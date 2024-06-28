const projectModel = require('../../models/project/project.js')
const project_MemberModel = require('../../models/project/project_member.js')
const org_memberModel = require('../../models/organization/organization_member.js')
const team_projectModel = require('../../models/team/team_project.js')
const usersModel = require('../../models/user/user.js')
const teamModel = require('../../models/team/team.js')
const clientModel = require('../../models/client/client.js')
const toDoModel = require("../../models/to_do/to_do.js");
const SessionModel = require('../../models/session/session.js')
const { PROJECT_MEMBER_ROLE, ORG_MEMBER_ROLE } = require('../constant.js')
const { formatTimeToHHMMSS } = require('../common.js')



module.exports = {
    SAVE: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        const { userData, org_id, client_id, name, managers = [], users = [], viewers = [], teams = [], start_date } = data || {};
        const { _id: user_id } = userData || {}

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(org_id),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.findOne(conditions)

        if (org_member) {
            var conditions = {
                org_id: ObjectId(org_id),
                name: name
            }
            var projectData = await projectModel.find(conditions)

            if (projectData && projectData.length > 0) {
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "Project already exits"
                callback(sendData);
            } else {

                const members = [...managers, ...users, ...viewers]
                if (members.length > 0) {
                    for (i = 0; i < members.length; i++) {
                        if (members[i] && members[i].userId && members[i].userId.length === 24) {
                            var condition = {
                                user_id: ObjectId(members[i].userId),
                                org_id: ObjectId(org_id),
                                invite_accpeted: true
                            }
                            const member = await org_memberModel.findOne(condition)
                            if (!member) {
                                sendData['err'] = 1;
                                sendData['ReturnMsg'] = `Member not found`;
                                callback(sendData);
                                return
                            }
                        }
                    }
                }
                if (teams.length > 0) {
                    for (i = 0; i < teams.length; i++) {
                        if (teams[i] && teams[i].length === 24) {
                            const team = await teamModel.findOne({ _id: ObjectId(teams[i]) })
                            if (!team) {
                                sendData['err'] = 1;
                                sendData['ReturnMsg'] = `Team not found`;
                                callback(sendData);
                                return
                            }
                        }
                    }
                }
                if (client_id && client_id.length === 24) {
                    data.client_id = ObjectId(client_id)
                    const client = await clientModel.findOne({ _id: data.client_id })
                    if (!client) {
                        sendData['err'] = 1;
                        sendData['ReturnMsg'] = `Client does not exist`;
                        callback(sendData);
                        return
                    }
                }
                else delete data.client_id
                data.client_id = null;
                data.start_date = start_date ? moment(start_date).format('lll') : "";
                data.created_at = new Date()

                const resProjectData = await projectModel.create(data);
                if (resProjectData) {
                    if (members.length > 0) {
                        for (i = 0; i < members.length; i++) {
                            projectApiController.MEMBER_CREATE(members[i], resProjectData._id, org_id)
                        }
                    }
                    if (teams.length > 0) {
                        for (i = 0; i < teams.length; i++) {
                            projectApiController.TEAM_CREATE(teams[i], resProjectData._id, user_id)
                        }
                    }
                    sendData['Data'] = resProjectData;
                    sendData['ReturnMsg'] = "Project created successfully"
                    callback(sendData);
                } else {
                    sendData['err'] = 1;
                    sendData['ReturnMsg'] = "Could not create project, please try again later";
                    callback(sendData);
                }
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData);
        }
    },
    MEMBER_CREATE: async function (data, projectId, orgId) {
        let { userId, role } = data || {}

        const user_id = ObjectId(userId)
        const project_id = ObjectId(projectId)
        const org_id = ObjectId(orgId)

        const condition = {
            user_id,
            org_id,
            invite_accpeted: true
        }
        const org_member = await org_memberModel.findOne(condition)
        if (org_member) {
            const MemberData = {
                user_id,
                project_id,
                org_id,
                role: role,
                pay_rate: org_member.pay_rate,
                bill_rate: org_member.bill_rate,
                updated_at: new Date()
            }
            const Memberdata = await project_MemberModel.create(MemberData)
        }
    },

    TEAM_CREATE: async function (team_id, projectId, userId) {
        const MemberData = {
            user_id: ObjectId(userId),
            project_id: ObjectId(projectId),
            team_id: ObjectId(team_id)
        }
        const teamData = await team_projectModel.create(MemberData)

    },

    LIST: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };


        var user_id = data.userData._id




        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            var projectConditions = [
                {
                    $match: {
                        "org_id": ObjectId(data.orgId),
                    }
                },
                {
                    $lookup: {
                        "from": "team_project",
                        "localField": "_id",
                        "foreignField": "project_id",
                        "as": "teamData"
                    }
                },
                {
                    $lookup: {
                        "from": "project_member",
                        "localField": "_id",
                        "foreignField": "project_id",
                        "as": "projectMemberData"
                    }
                },
                {
                    $lookup: {
                        "from": "to_do",
                        "localField": "_id",
                        "foreignField": "project_id",
                        "as": "toDoData"
                    }
                },
                {
                    $project: {
                        "name": 1,
                        "_id": 1,
                        "org_id": 1,
                        "owner_id": 1,
                        "team": "$teamData",
                        "members": '$projectMemberData',
                        "to_do_list": { $size: ['$toDoData'] },
                        "type": 1,
                        "based_on": 1,
                        "cost": 1,
                        "notify_at": 1,
                        "reset": 1,
                        "start_date": 1,
                        "non_billable_time": 1
                    }
                },

            ]


            var PROJECTCOUNT = await projectModel.aggregate([...projectConditions])

            var start = (data.start != "null") ? parseInt(data.start) : 1;
            var limit = (data.limit != "null") ? parseInt(data.limit) : PROJECTCOUNT.length || 1;
            start = (start - 1) * limit;

            var projectData = await projectModel.aggregate([...projectConditions, { $skip: start }, { $limit: limit }])



            if (projectData.length > 0) {
                var saveData = {
                    count: PROJECTCOUNT.length,
                    list: projectData
                }
                sendData['Data'] = saveData;
                sendData['ReturnMsg'] = "Project list"
                callback(sendData);
            } else {
                sendData['ReturnMsg'] = "Data not found"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData);
        }
    },
    PROJECT_UPDATE: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        console.log("data>>", data);

        let { userData, org_id, project_id, client_id, managers = [], users = [], viewers = [], teams = [], start_date } = data || {};
        let { _id: user_id } = userData || {}

        org_id = ObjectId(org_id)
        user_id = ObjectId(user_id)
        project_id = ObjectId(project_id)
        var orgId = ObjectId(org_id)

        const conditions = {
            user_id,
            org_id,
            invite_accpeted: true
        }
        const org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            const projectsConditions = {
                org_id,
                _id: project_id
            }
            const projectData = await projectModel.findOne(projectsConditions)

            if (projectData) {
                const members = [...managers, ...users, ...viewers]
                if (members.length > 0) {
                    for (i = 0; i < members.length; i++) {
                        if (members[i] && members[i].userId && members[i].userId.length === 24) {
                            const condition = {
                                user_id: ObjectId(members[i].userId),
                                org_id,
                                invite_accpeted: true
                            }
                            const member = await org_memberModel.findOne(condition)
                            if (!member) {
                                sendData['err'] = 1;
                                sendData['ReturnMsg'] = `Member not found`;
                                callback(sendData);
                                return
                            }
                        }
                    }
                }
                if (teams.length > 0) {
                    for (i = 0; i < teams.length; i++) {
                        if (teams[i] && teams[i].length === 24) {
                            const team = await teamModel.findOne({ _id: ObjectId(teams[i]) })
                            if (!team) {
                                sendData['err'] = 1;
                                sendData['ReturnMsg'] = `Team not found`;
                                callback(sendData);
                                return
                            }
                        }
                    }
                }
                if (client_id && client_id.length === 24) {
                    data.client_id = ObjectId(client_id)
                    const client = await clientModel.findOne({ _id: data.client_id })
                    if (!client) {
                        sendData['err'] = 1;
                        sendData['ReturnMsg'] = `Client does not exist`;
                        callback(sendData);
                        return
                    }
                }
                else data.client_id = null
                data.start_date = start_date ? moment(start_date).format('lll') : "";

                var pro_mem_condition = [
                    { $match: { project_id } },
                    {
                        $lookup: {
                            from: "organization_member",
                            let: { "o_id": orgId, "u_id": "$user_id" },
                            as: "userData",
                            pipeline: [
                                {
                                    $match:
                                    {
                                        $expr:
                                        {
                                            $and: [
                                                { $eq: ["$org_id", "$$o_id"] },
                                                { $eq: ["$user_id", "$$u_id"] },
                                                { $eq: ["$invite_accpeted", true] }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    { $unwind: "$userData" }
                ]

                var pro_mem_data = await project_MemberModel.aggregate(pro_mem_condition)
                console.log("pro_mem_data>", pro_mem_data)

                if (pro_mem_data) {
                    for (i = 0; i < pro_mem_data.length; i++) {
                        let userId = pro_mem_data[i].userData.user_id
                        await project_MemberModel.deleteOne({ project_id, user_id: userId })
                    }
                }



                // await project_MemberModel.deleteMany({ project_id })
                await team_projectModel.deleteMany({ project_id })

                if (members.length > 0) {
                    for (i = 0; i < members.length; i++) {
                        projectApiController.MEMBER_CREATE(members[i], project_id, org_id)
                    }
                }
                if (teams.length > 0) {
                    for (i = 0; i < teams.length; i++) {
                        projectApiController.TEAM_CREATE(teams[i], project_id, user_id)
                    }
                }

                data['updated_at'] = new Date()
                const projectConditions = {
                    _id: project_id,
                    org_id
                }

                const updateData = await projectModel.updateOne(projectConditions, data)
                console.log('updateData', updateData);
                if (updateData.matchedCount == 1) {
                    sendData['ReturnMsg'] = "Project updated successfully"
                    // sendData['Data'] = pro_mem_data
                    callback(sendData);
                } else {
                    sendData['err'] = 1;
                    sendData['ReturnMsg'] = "Could not update project, please try again later"
                    callback(sendData);
                }
            } else {
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "Project not found"
                callback(sendData);
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData);
        }
    },
    PROJECT_DELETE: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        console.log("data>>", data);
        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))
            if (org_member.org_id == data.orgId) {
                var projectConditions = {
                    _id: ObjectId(data.projectId),
                    org_id: ObjectId(data.orgId)
                }
                var projectDelete = await projectModel.deleteMany(projectConditions);
                var deleteSession = await SessionModel.deleteMany({ project_id: ObjectId(data.projectId), org_id: ObjectId(data.orgId) });

                var memberConditions = {
                    project_id: ObjectId(data.projectId),
                }

                var deleteto_do = await toDoModel.deleteMany(memberConditions);
                var deleteData = await project_MemberModel.deleteMany(memberConditions);
                var deleteData = await team_projectModel.deleteMany(memberConditions);
                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your Project is deleted"
                callback(sendData);

            } else {
                sendData['ReturnCode'] = 201;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData);
        }
    },
    DUPLICATE_PROJECT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        console.log("data>>", data);
        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))
            if (org_member.org_id == data.orgId) {

                var projectCondition = {
                    _id: ObjectId(data.userId)
                }

                var projectData = await projectModel.find(projectCondition)
                projectData = projectData[0]
                if (projectData.name !== data.name) {
                    projectData['name'] = data.name;

                    var start_date = (projectData.start_date) ? moment(data.start_date).format('lll') : "";

                    var projectData = {
                        org_id: ObjectId(projectData.org_id),
                        name: projectData.name,
                        billable: projectData.billable,
                        record_activity: projectData.record_activity,
                        description: projectData.description,
                        type: projectData.type,
                        based_on: projectData.based_on,
                        cost: projectData.cost,
                        notify_at: projectData.notify_at,
                        reset: projectData.reset,
                        start_date: start_date,
                        non_billable_time: projectData.non_billable_time,
                        status: projectData.status,
                        client_id: projectData.client_id
                    }

                    var createnewproject = await projectModel.create(projectData)

                    if (createnewproject) {

                        var membercondition = {
                            project_id: ObjectId(data.userId),
                            org_id: ObjectId(projectData.org_id),
                        }
                        var memberData = await project_MemberModel.find(membercondition)
                        if (memberData) {
                            for (i = 0; i < memberData.length; i++) {
                                projectApiController.DUPLICATE_MEMBER_CREATE(memberData[i], createnewproject._id, projectData.org_id)
                            }
                        }
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 0;
                        sendData['Data'] = createnewproject;
                        sendData['ReturnMsg'] = ""
                        callback(sendData);
                    } else {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 1;
                        sendData['Data'] = [];
                        sendData['ReturnMsg'] = "Project not created"
                        callback(sendData);
                    }

                } else {
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 1;
                    sendData['Data'] = [];
                    sendData['ReturnMsg'] = "Project name is already exist so please Enter new Project name";
                    callback(sendData);

                }

            } else {
                sendData['ReturnCode'] = 201;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }
    },
    DUPLICATE_MEMBER_CREATE: async function (data, id, orgId) {
        var condition = {
            user_id: ObjectId(data.userId),
            org_id: ObjectId(orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.findOne(condition)

        var projectMemberCreate = {
            user_id: ObjectId(data.user_id),
            project_id: ObjectId(id),
            org_id: ObjectId(orgId),
            role: data.role,
            pay_rate: org_member.pay_rate,
            bill_rate: org_member.bill_rate
        }

        var projectMember = await project_MemberModel.create(projectMemberCreate)
    },
    PROJECT_STATUS_UPDATE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        console.log("data>>", data);
        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))
            if (org_member.org_id == data.orgId) {

                var project_id = data.project_id

                for (i = 0; i < project_id.length; i++) {

                    var projectCondition = {
                        org_id: ObjectId(data.orgId),
                        _id: ObjectId(project_id[i])
                    }
                    var update = {
                        status: data.status,
                        updated_at: new Date()
                    }

                    var projectUpdate = await projectModel.updateOne(projectCondition, update)
                }
                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Project status updated"
                callback(sendData);

            } else {
                sendData['ReturnCode'] = 201;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }
    },
    PROJECT_STATUS_LIST: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: ""
        };

        console.log("data>>", data);
        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            let status = false
            if (data.status == "true") status = true

            var projectConditions = [
                {
                    $match: {
                        "org_id": ObjectId(data.orgId),
                        "status": status,
                        "name": { $regex: data.name || '', $options: "-i" }
                    }
                },
                {
                    $lookup: {
                        "from": "team_project",
                        "localField": "_id",
                        "foreignField": "project_id",
                        "as": "teamData"
                    }
                },
                {
                    $lookup: {
                        "from": "project_member",
                        "let": { "p_id": "$_id" },
                        "as": "projectMemberData",
                        "pipeline": [
                            {
                                $match:
                                {
                                    $expr:
                                        { $eq: ["$project_id", "$$p_id"] }
                                }
                            },
                            {
                                $lookup: {
                                    from: "organization_member",
                                    as: "userData",
                                    let: { u_id: "$user_id", org_id: "$org_id" },
                                    pipeline: [
                                        {
                                            $match: {
                                                $expr: {
                                                    $and: [
                                                        { $eq: ["$user_id", "$$u_id"] },
                                                        { $eq: ["$org_id", "$$org_id"] },
                                                        { $eq: ["$status", true] },
                                                        { $eq: ["$invite_accpeted", true] }
                                                    ]
                                                }
                                            }
                                        },
                                    ],

                                },
                            },
                            { $unwind: "$userData" },
                        ]

                    }
                },
                {
                    $lookup: {
                        "from": "to_do",
                        "localField": "_id",
                        "foreignField": "project_id",
                        "as": "toDoData"
                    }
                },
                {
                    $project: {
                        "name": 1,
                        "_id": 1,
                        "org_id": 1,
                        "owner_id": 1,
                        "team": { $size: ['$teamData'] },
                        "members": { $size: ['$projectMemberData'] },
                        "to_do_list": { $size: ['$toDoData'] },
                        "type": 1,
                        "based_on": 1,
                        "cost": 1,
                        "notify_at": 1,
                        "reset": 1,
                        "start_date": 1,
                        "non_billable_time": 1
                    }
                },

            ]

            let projectDataCount = await projectModel.aggregate(projectConditions);

            var start = (data.start != 'null') ? parseInt(data.start) : 1;
            var limit = (data.limit != 'null') ? parseInt(data.limit) : projectDataCount.length;
            start = (start - 1) * limit;
            limit = start + limit

            let projectData = projectDataCount.slice(start, limit)
            // let projectData = await projectModel.aggregate([...projectConditions, { $skip: start }, { $limit: limit }]);
            if (projectDataCount.length > 0) {
                let projectsByUser = []
                if (org_member[0].role !== ORG_MEMBER_ROLE.ORG_MANAGER && org_member[0].role !== ORG_MEMBER_ROLE.OWNER) {
                    const condition = [
                        {
                            $match: {
                                user_id: ObjectId(user_id),
                            }
                        },
                        {
                            $project: {
                                project_id: 1
                            }
                        }
                    ]
                    projectsByUser = await project_MemberModel.aggregate(condition)
                    if (projectsByUser && projectsByUser.length > 0) projectsByUser = projectsByUser.map((x) => String(x.project_id))
                    projectDataCount = projectDataCount.filter((x) => {
                        return projectsByUser.includes(String(x._id))
                    })
                    projectData = projectDataCount.slice(start, limit)
                }

                const saveData = {
                    count: projectDataCount.length,
                    list: projectData
                }
                sendData['Data'] = saveData;
                sendData['ReturnMsg'] = "Project list"
                callback(sendData);
            } else {
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "Data not found"
                callback(sendData);
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }

    },
    PROJECTS_ONE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: ""
        };

        console.log("data>>", data);
        var user_id = data.userData._id
        var projectId = data.projectId;
        var org_id = data.orgId
        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)
        console.log("org_member>", org_member)

        if (org_member.length > 0) {
            var projectCondition =
                [
                    { $match: { "_id": ObjectId(projectId), "org_id": ObjectId(org_id) } },
                    {
                        $lookup: {
                            from: "project_member",
                            let: { p_id: "$_id" },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ["$project_id", "$$p_id"] },
                                    }
                                },
                                {
                                    $lookup: {
                                        from: "organization_member",
                                        as: "org_status_check",
                                        let: { u_id: "$user_id", org_id: "$org_id" },
                                        pipeline: [
                                            {
                                                $match: {
                                                    $expr: {
                                                        $and: [
                                                            { $eq: ["$user_id", "$$u_id"] },
                                                            { $eq: ["$org_id", "$$org_id"] },
                                                            { $eq: ["$status", true] },
                                                            { $eq: ["$invite_accpeted", true] },
                                                        ]
                                                    }
                                                }
                                            },
                                        ]
                                    },
                                },
                                { $unwind: "$org_status_check" },
                                {
                                    $lookup: {
                                        from: "user",
                                        localField: "org_status_check.user_id",
                                        foreignField: "_id",
                                        as: "member_data",
                                    },
                                },
                                { $unwind: "$member_data" },
                                {
                                    $project: {
                                        _id: "$member_data._id",
                                        name: "$member_data.name",
                                        role: "$role",
                                    },
                                },
                            ],
                            as: "members",
                        },
                    },
                    {
                        $lookup: {
                            from: "team_project",
                            let: { p_id: "$_id" },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ["$project_id", "$$p_id"] },
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "team",
                                        localField: "team_id",
                                        foreignField: "_id",
                                        as: "team_data",
                                    },
                                },
                                { $unwind: "$team_data" },
                                {
                                    $project: {
                                        _id: "$team_data._id",
                                        team_name: "$team_data.team_name",
                                    },
                                },
                            ],
                            as: "teams",
                        },
                    },
                ]

            var project = await projectModel.aggregate(projectCondition)
            console.log("project>>", project);

            if (project && project.length > 0) {
                project = project[0]
                const { members } = project || {}
                if (members && members.length > 0) {
                    project.managers = members.filter((x) => x.role === PROJECT_MEMBER_ROLE.MANAGER)
                    project.users = members.filter((x) => x.role === PROJECT_MEMBER_ROLE.USER)
                    project.viewers = members.filter((x) => x.role === PROJECT_MEMBER_ROLE.VIEWER)
                }
                delete project.members
                sendData['Data'] = project;
                sendData['ReturnMsg'] = "Project item"
                callback(sendData);
            } else {
                sendData['ReturnMsg'] = "Data not found"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }
    },
    PROJECT_MEMBER_UPDATE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        console.log("data>>", data);
        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))
            if (org_member.org_id == data.orgId) {

                var user = data.userId

                for (i = 0; i < user.length; i++) {
                    var projectConditions = {
                        _id: ObjectId(user[i]),
                        project_id: ObjectId(data.projectId)
                    }
                    var update = {
                        role: data.role,
                        pay_rate: data.pay_rate,
                        bill_rate: data.bill_rate,
                        updated_at: new Date()
                    }
                    var updateData = await project_MemberModel.updateOne(projectConditions, update)
                }
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your data is updated"
                callback(sendData);
            } else {
                sendData['ReturnCode'] = 201;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }
    },
    PROJECT_MEMBER_DELETE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))
            if (org_member.org_id == data.orgId) {

                var projectCondition = {
                    _id: ObjectId(data.userId),
                    project_id: ObjectId(data.projectId)
                }

                var projectData = await project_MemberModel.deleteMany(projectCondition)

                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Data is deleted"
                callback(sendData);
            } else {
                sendData['ReturnCode'] = 201;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }
    },
    PROJECT_TEAM_DELETE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };


        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))
            if (org_member.org_id == data.orgId) {

                var team = data.userId

                for (i = 0; i < team.length; i++) {
                    var teamConditions = {
                        _id: ObjectId(team[i]),
                        project_id: ObjectId(data.projectId)
                    }
                    var teamData = await team_projectModel.deleteOne(teamConditions)
                }
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your data is deleted"
                callback(sendData);
            } else {
                sendData['ReturnCode'] = 201;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }

    },
    LEAVE_PROJECT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        var user_id = data.userData._id

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            invite_accpeted: true
        }
        var org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {
            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))
            if (org_member.org_id == data.orgId) {

                var condition = {
                    _id: ObjectId(user_id)
                }
                var userData = await usersModel.find(condition)

                if (userData.length > 0) {
                    userData = userData[0]

                    var projectMemberCondition = {
                        user_id: ObjectId(user_id),
                        project_id: ObjectId(data.projectId)
                    }

                    var projectMemberData = await project_MemberModel.find(projectMemberCondition)

                    if (projectMemberData.length > 0) {
                        projectMemberData = projectMemberData[0]

                        var delCondition = {
                            _id: ObjectId(projectMemberData._id)
                        }
                        await project_MemberModel.deleteOne(delCondition)

                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 0;
                        sendData['ReturnMsg'] = "Your are deleted successfully!";
                        callback(sendData);

                    } else {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 1;
                        sendData['Data'] = [];
                        sendData['ReturnMsg'] = "Project not found";
                        callback(sendData);
                    }
                } else {
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 1;
                    sendData['Data'] = [];
                    sendData['ReturnMsg'] = "No record found";
                    callback(sendData);
                }
            } else {
                sendData['ReturnCode'] = 201;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }

    },
    PROJECT_LIST_BY_USER_ID: async function (data, callback) {
        let sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: ""
        };
        const { userData, name = '' } = data || {}
        let { _id: user_id } = userData || {}
        user_id = ObjectId(user_id)

        const org_member = await org_memberModel.find({ user_id })
        var startOfWeek = new Date(moment().startOf('week').add(1, 'day').toDate());
        if (org_member && org_member.length > 0) {
            const trackingEnableOrgIds = org_member.filter((x) => x.time_track).map((x) => ObjectId(x.org_id))

            var projectConditions = [
                {
                    $match: {
                        user_id: user_id,
                        org_id: { $in: trackingEnableOrgIds }
                    }
                },
                {
                    $lookup: {
                        from: "project",
                        let: { p_id: "$project_id", o_id: "$org_id" },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ["$_id", "$$p_id"] },
                                    name: { $regex: name || '', $options: "-i" }
                                },
                            },
                            {
                                $lookup: {
                                    from: "client",
                                    let: { c_id: "$client_id" },
                                    pipeline: [
                                        { $match: { $expr: { $eq: ["$_id", "$$c_id"] }, }, },
                                        {
                                            $project: {
                                                _id: 0,
                                                name: "$name",
                                                address: "$address",
                                            },
                                        },
                                    ],
                                    as: "clientData",
                                },
                            },
                            {
                                $lookup: {
                                    from: "organization",
                                    let: { o_id: "$$o_id" },
                                    pipeline: [
                                        { $match: { $expr: { $eq: ["$_id", "$$o_id"] }, }, },
                                        { $project: { _id: 1, name: "$organization_name", }, },
                                    ],
                                    as: "org",
                                },
                            },
                            {
                                $lookup: {
                                    from: "Session",
                                    let: { p_id: "$_id" },
                                    pipeline: [
                                        {
                                            $match: {
                                                "created_at": {
                                                    $gte: startOfWeek
                                                },
                                                $and: [
                                                    { $expr: { $eq: ["$org_id", "$$o_id"] } },

                                                    { $expr: { $eq: ["$user_id", ObjectId(user_id)] } },
                                                    { $expr: { $eq: ["$project_id", "$$p_id"] } },
                                                ]
                                            },
                                        },
                                        {
                                            $addFields: {
                                                "difference": {
                                                    "$divide": [
                                                        {
                                                            "$subtract": [{
                                                                $cond: {
                                                                    if: "$end_time",
                                                                    then: "$end_time",
                                                                    else: new Date(),
                                                                }
                                                            }, "$start_time"],
                                                        },
                                                        1000
                                                    ]
                                                }
                                            }
                                        },
                                        { $project: { _id: 0, tracked: "$difference", }, },
                                    ],
                                    as: "session_data",
                                },
                            },
                        ],
                        as: "projectData",
                    },
                },
                { $unwind: "$projectData" },
                { $unwind: "$projectData.org" },
                {
                    $lookup: {
                        from: "to_do",
                        let: { p_id: "$projectData._id" },
                        pipeline: [
                            {
                                $match: {
                                    $and: [
                                        { $expr: { $eq: ["$assignee_id", ObjectId(user_id)] } },
                                        { $expr: { $eq: ["$project_id", "$$p_id"] } },
                                    ]
                                },
                            },
                            { $sort: { created_at: -1 } },
                            { $limit: 1 }
                        ],
                        as: "to_do",
                    }
                },
                {
                    $project: {
                        _id: "$projectData._id",
                        name: "$projectData.name",
                        org_name: "$projectData.org.name",
                        session_data: "$projectData.session_data",
                        to_do_last: {
                            $cond: {
                                if: { $gt: [{ $size: "$to_do.title" }, 0] },
                                then: { $arrayElemAt: ["$to_do.title", 0] },
                                else: "",
                            },
                        },
                        client_name: {
                            $cond: {
                                if: { $gt: [{ $size: "$projectData.clientData.name" }, 0] },
                                then: { $arrayElemAt: ["$projectData.clientData.name", 0] },
                                else: "",
                            },
                        },
                        client_address: {
                            $cond: {
                                if: { $gt: [{ $size: "$projectData.clientData.address" }, 0] },
                                then: { $arrayElemAt: ["$projectData.clientData.address", 0] },
                                else: "",
                            },
                        },
                    }
                },
            ]

            var projectData = await project_MemberModel.aggregate(projectConditions)
            if (projectData.length > 0) {
                projectData = projectData.map((x) => {
                    x.tracked = 0
                    if (x.session_data.length > 0) x.tracked = x.session_data.reduce((sum, val) => parseInt(sum + val.tracked || 0), 0)
                    x.tracked = formatTimeToHHMMSS(x.tracked, true, true, false)
                    delete x.session_data
                    return x
                }).filter((x) => x)

                const saveData = {
                    count: projectData.length,
                    list: projectData
                }
                sendData['Data'] = saveData;
                sendData['ReturnMsg'] = "Project list"
                callback(sendData);
            } else {
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "Data not found"
                callback(sendData);
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData);
        }
    },
    PROJECT_CLIENT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: ""
        };

        var user_id = data.userData._id
        var condition = {
            user_id: ObjectId(user_id)
        }
        var org_member = await org_memberModel.find(condition)

        if (org_member.length > 0) {
            var projectConditions = [{
                $match: {
                    "_id": ObjectId(data.projectId),
                }
            },
            {
                $lookup: {
                    from: "client",
                    localField: "client_id",
                    foreignField: "_id",
                    as: "clientData"
                }
            },
            // {
            //     $lookup: {
            //         from: "client_project",
            //         let: { p_id: "$_id" },
            //         pipeline: [
            //             {
            //                 $match: {
            //                     $expr: { $eq: ["$project_id", "$$p_id"] },
            //                 },
            //             },
            //             {
            //                 $lookup: {
            //                     from: "client",
            //                     let: { c_id: "$client_id" },
            //                     pipeline: [
            //                         {
            //                             $match: {
            //                                 $expr: { $eq: ["$_id", "$$c_id"] },
            //                             },
            //                         },
            //                     ],
            //                     as: "clientData",
            //                 },
            //             },
            //             { $unwind: "$clientData" },
            //             {
            //                 $project: {
            //                     _id: 0,
            //                     name: "$clientData.name",
            //                     address: "$clientData.address",
            //                 },
            //             },
            //         ],
            //         as: "clientProjectData",
            //     },

            // },

            {
                $project: {
                    _id: 1,
                    name: 1,
                    client: "$clientData"


                }
            },]

            var projectData = await projectModel.aggregate(projectConditions)

            var clientname = ''
            var client_address = ''
            if (projectData[0].client[0] != undefined) {
                clientname = projectData[0].client[0].name
                client_address = projectData[0].client[0].address
            }
            if (projectData.length > 0) {
                const saveData = {
                    data: {
                        "_id": projectData[0]._id,
                        "name": projectData[0].name,
                        "client_name": clientname,
                        "client_address": client_address
                    }
                }
                sendData['Data'] = saveData;
                sendData['ReturnMsg'] = "Project list"
                callback(sendData);
            } else {
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "Data not found"
                callback(sendData);
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Data nxaxaot found"
            callback(sendData);
        }
    },
    PROJECTSTATUS: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        const user_id = data.userData._id
        const project_id = data.projectId
        const sessionId = data.sessionId

        var projectData = await projectModel.findOne({ "_id": ObjectId(project_id) })
        if (projectData) {
            const membercondition = {
                "user_id": ObjectId(user_id),
                "time_track": true,
                "invite_accpeted": true,
                "org_id": ObjectId(projectData.org_id)
            }

            var orgmemberData = await org_memberModel.find(membercondition)
            if (orgmemberData.length > 0) {
                orgmemberData = orgmemberData[0]
                const projectCondition = {
                    "user_id": ObjectId(user_id),
                    "project_id": ObjectId(project_id),
                    "org_id": ObjectId(projectData.org_id)
                }
                const projectMemberData = await project_MemberModel.find(projectCondition)

                if (projectMemberData.length > 0) {
                    const multiSessionCondition = {
                        "_id": ObjectId(sessionId),
                        "end_time": null
                    }

                    const sessionMulitipale = await SessionModel.find(multiSessionCondition)

                    if (sessionMulitipale.length > 0) {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 0;
                        sendData['Data'] = [];
                        sendData['ReturnMsg'] = "Project Data found"
                        callback(sendData)

                    } else {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 1;
                        sendData['Data'] = [];
                        sendData['ReturnMsg'] = "Session is Running other pc"
                        callback(sendData)
                    }
                }
                else {
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 1;
                    sendData['Data'] = [];
                    sendData['ReturnMsg'] = "Stopped timer for project because it is invalid(it has been reassgined,moved or archived)"
                    callback(sendData)
                }
            }
            else {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Stopped timer for project because it is invalid(it has been reassgined,moved or archived)"
                callback(sendData)
            }
        }
        else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Stopped timer for project because it is invalid(it has been reassgined,moved or archived)"
            callback(sendData)
        }
    },
    PROJECT_DETAIL: async function (data, callback) {
        let sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        let userId = ObjectId(data.userData._id)
        let orgId = ObjectId(data.orgId)
        let projectId = ObjectId(data.projectId)



        let conditions = {
            user_id: userId,
            org_id: orgId,
            invite_accpeted: true
        }
        let org_member = await org_memberModel.find(conditions)

        if (org_member.length > 0) {

            let pro_condition = [
                { $match: { _id: projectId, org_id: orgId } },
                {
                    $lookup: {
                        from: "client",
                        localField: "client_id",
                        foreignField: "_id",
                        as: "clientData"
                    }
                },
                { $unwind: { path: "$clientData", preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: "Session",
                        let: { "u_id": userId, "o_id": "$org_id" },
                        as: "session_data",
                        pipeline: [
                            {
                                $match:
                                {
                                    $expr: {
                                        $and: [
                                            { $eq: ["$user_id", "$$u_id"] },
                                            { $eq: ["$org_id", "$$o_id"] },
                                        ]
                                    }
                                }
                            },
                            { $sort: { end_time: -1 } },
                            { $limit: 1 },
                            {
                                $project: {
                                    _id: 0,
                                    last_active: "$end_time"
                                }
                            }
                        ]
                    }
                },
                { $unwind: { path: "$session_data", preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: "to_do",
                        let: { "p_id": "$_id", "a_id": userId },
                        as: "to_do_Data",
                        pipeline: [
                            {
                                $match:
                                {
                                    $expr: {
                                        $and: [
                                            { $eq: ["$assignee_id", "$$a_id"] },
                                            { $eq: ["$project_id", "$$p_id"] },
                                            { $eq: ["$completed", false] },
                                        ]
                                    }
                                }
                            },
                            {
                                $project: {
                                    _id: 0,
                                    to_do: "$title"
                                }
                            }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "project_member",
                        let: { "p_id": "$_id" },
                        as: "projectMemberData",
                        pipeline: [
                            {
                                $match:
                                {
                                    $expr:
                                        { $eq: ["$project_id", "$$p_id"] }
                                }
                            },
                            {
                                $lookup: {
                                    from: "organization_member",
                                    as: "org_mem_Data",
                                    let: { u_id: "$user_id", org_id: "$org_id" },
                                    pipeline: [
                                        {
                                            $match:
                                            {
                                                $expr:
                                                {
                                                    $and: [
                                                        { $eq: ["$user_id", "$$u_id"] },
                                                        { $eq: ["$org_id", "$$org_id"] },
                                                        { $eq: ["$status", true] },
                                                        { $eq: ["$invite_accpeted", true] }
                                                    ]
                                                }
                                            }
                                        },
                                    ],
                                },
                            },
                            { $unwind: "$org_mem_Data" },
                            {
                                $lookup: {
                                    from: "user",
                                    let: { "u_id": "$org_mem_Data.user_id" },
                                    as: "userData",
                                    pipeline: [
                                        {
                                            $match:
                                            {
                                                $expr:
                                                    { $eq: ["$_id", "$$u_id"] }
                                            }
                                        }
                                    ]
                                }
                            },
                            { $unwind: "$userData" },
                            {
                                $project: {
                                    _id: "$userData._id",
                                    role: 1,
                                    membername: "$userData.name",
                                    profile_img: "$userData.profile_img",
                                    pay_rate: "$org_mem_Data.pay_rate",
                                    bill_rate: "$org_mem_Data.bill_rate",
                                    since: "$created_at"
                                }
                            }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "team_project",
                        let: { p_id: "$_id" },
                        as: "teams",
                        pipeline: [
                            {
                                $match:
                                {
                                    $expr:
                                        { $eq: ["$project_id", "$$p_id"] }
                                }
                            },
                            {
                                $lookup: {
                                    from: "team",
                                    as: "team_Data",
                                    let: { t_id: "$team_id" },
                                    pipeline: [
                                        {
                                            $match:
                                            {
                                                $expr:
                                                {
                                                    $and: [
                                                        { $eq: ["$_id", "$$t_id"] },
                                                    ]
                                                }
                                            }
                                        },
                                    ],
                                },
                            },
                            { $unwind: "$team_Data" },
                            {
                                $project: {
                                    _id: "$team_Data._id",
                                    team_name: "$team_Data.team_name"
                                }
                            }
                        ]
                    }
                },
                {
                    $project: {
                        "_id": 1,
                        "org_id": 1,
                        "name": 1,
                        "billable": 1,
                        "record_activity": 1,
                        "hours": 1,
                        "type": 1,
                        "based_on": 1,
                        "cost": 1,
                        "notify_at": 1,
                        "reset": 1,
                        "start_date": 1,
                        "non_billable_time": 1,
                        "status": 1,
                        "client_id": 1,
                        "created_at": 1,
                        "updated_at": 1,
                        "__v": 1,
                        "description": 1,
                        "teams": 1,
                        "last_active": {
                            $cond: {
                                if: "$session_data",
                                then: "$session_data.last_active",
                                else: "N/A",
                            }
                        },
                        "client": {
                            $cond: {
                                if: "$clientData",
                                then: "$clientData.name",
                                else: "No client",
                            }
                        },
                        "to_do": { $size: "$to_do_Data" },
                        "member": {
                            $cond: {
                                if: { $gt: [{ $size: "$projectMemberData" }, 0] },
                                then: "$projectMemberData",
                                else: [],
                            }
                        },
                    }
                }
            ]

            let project_detail = await projectModel.aggregate(pro_condition)

            if (project_detail.length > 0) {

                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData['Data'] = project_detail[0];
                sendData['ReturnMsg'] = "Project data found";
                callback(sendData);
            } else {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = "";
                sendData['ReturnMsg'] = "Project is not belongs to this organization";
                callback(sendData);
            }

        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData)
        }

    },

    DELETEPROJECT_DETAIL: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        const user_id = data.userData._id;
        const _id = data.id
        const project_id = data.project_id;
        const type = data.type;
        const org_id = data.org_id


        const condition = {
            "org_id": ObjectId(org_id),
            "user_id": ObjectId(user_id)
        }

        const orgdata = await org_memberModel.findOne(condition)

        if (orgdata) {
            const update_condition = {
                "_id": ObjectId(project_id),
                "org_id": ObjectId(org_id)
            }

            const projectList = await projectModel.findOne(update_condition)


            if (projectList) {
                let count = 0;
                if (type === "member") {
                    for (let i = 0; i < _id.length; i++) {
                        const membercon = {
                            "project_id": ObjectId(project_id),
                            "user_id": ObjectId(_id[i]),
                            "org_id": ObjectId(org_id)
                        }


                        // const projectmemberdata = await project_MemberModel.findOne(membercon)

                        const memberdata = await project_MemberModel.deleteOne(membercon)


                        if (memberdata.deletedCount > 0) count++
                    }
                    ;

                    if (count > 0) {
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Project member delete sucessfully"
                        callback(sendData)
                    } else {
                        sendData["err"] = 1;
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Project member already deleted."
                        callback(sendData)
                    }

                }
                else if (type === "team") {
                    for (let i = 0; i < _id.length; i++) {

                        const projectcondition = {
                            "project_id": ObjectId(project_id),
                            "team_id": ObjectId(_id[i]),
                        }

                        const teamdata = await team_projectModel.deleteOne(projectcondition)
                        if (teamdata.deletedCount > 0) count++
                    }

                    if (count > 0) {
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Project team delete sucessfully"
                        callback(sendData)
                    } else {
                        sendData["err"] = 1;
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Project team already deleted."
                        callback(sendData)
                    }
                }
                else {
                    sendData["Data"] = {};
                    sendData["ReturnMsg"] = "Data Not found"
                    callback(sendData)
                }
            }
            else {
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "This project is not belongs to organization"
                callback(sendData)
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Organization data not found"
            callback(sendData)
        }
    },
}
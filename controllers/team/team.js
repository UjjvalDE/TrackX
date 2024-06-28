const organizationModel = require('../../models/organization/organization.js')
const org_memberModel = require('../../models/organization/organization_member.js')
const team_projectModel = require('../../models/team/team_project.js')
const teamModel = require('../../models/team/team.js')
const team_memberModel = require('../../models/team/team_member.js')
const team_projectModal = require('../../models/team/team_project')
const projectModel = require('../../models/project/project.js')
const organization_memberModal = require('../../models/organization/organization_member.js')

module.exports = {
    SAVE: async function (data, callback) {
        //send data
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
                var conditions = {
                    org_id: ObjectId(data.orgId),
                    team_name: data.team_name
                }
                var teamData = await teamModel.find(conditions)

                if (teamData.length == 0) {
                    delete data['userData']
                    data['org_id'] = ObjectId(data.orgId)
                    data.created_at = new Date()
                    data['created_By'] = ObjectId(org_member.user_id)

                    var teamCreate = await teamModel.create(data)
                    console.log("teamCreate>>>>", teamCreate);
                    if (teamCreate) {
                        let members = [...data.team_leads || [], ...data.team_mates || []]

                        if (members.length > 0) {
                            for (i = 0; i < members.length; i++) {
                                teamApiController.TEAM_MEMBER_CREATE(members[i], teamCreate._id, data.orgId, callback)
                            }
                        }

                        if (data.projects) {
                            for (i = 0; i < data.projects.length; i++) {
                                teamApiController.TEAM_PROJECTS_CREATE(data.projects[i], teamCreate._id, data.orgId, callback)
                            }
                        }
                        sendData['Data'] = teamCreate;
                        sendData['ReturnCode'] = 200;
                        sendData['ReturnMsg'] = 'Team created successfully';
                        callback(sendData);
                    } else {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 1;
                        sendData['Data'] = [];
                        sendData['ReturnMsg'] = "team is not created"
                        callback(sendData);
                    }
                } else {
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 1;
                    sendData['Data'] = [];
                    sendData['ReturnMsg'] = "team Name is Already exits"
                    callback(sendData);
                }
            } else {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Your organization is not match"
                callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "data not found"
            callback(sendData);
        }
    },
    TEAMSONE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        console.log("data>>>", data);
        var team_id = ObjectId(data.team_id);
        var orgId = ObjectId(data.org_id);

        let team_found = await teamModel.findOne({_id: team_id, org_id: orgId})

        if(team_found){
        const teamcondition = [
            {
                $match: {
                    "_id": team_id, "org_id": orgId,
                },
            },
            {
                $lookup: {
                    from: "team_member",
                    let: { t_id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$team_id", "$$t_id"] },
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
                                                    { $eq: ["$invite_accpeted", true] }
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
                                profile_img: "$member_data.profile_img",
                                status: "$status",
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
                    let: { t_id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$team_id", "$$t_id"] },
                            },
                        },
                        {
                            $lookup: {
                                from: "project",
                                localField: "project_id",
                                foreignField: "_id",
                                as: "project_data",
                            },
                        },
                        { $unwind: "$project_data" },
                        {
                            $project: {
                                _id: "$project_data._id",
                                name: "$project_data.name",
                            },
                        },
                    ],
                    as: "projects",
                },
            },
            {
                $lookup: {
                    from: "user",
                    localField: "created_By",
                    foreignField: "_id",
                    as: "created_by_user",
                },
            },
            {
                $addFields: {
                    created_By: String("$created_by_user.name")
                }
            },
            { $unwind: "$created_By" },
            {
                $project: {
                    created_by_user: 0
                },
            },
        ]

        let team = await teamModel.aggregate(teamcondition)
        if (team && team.length > 0) {
            team = team[0]
            if (team.members && team.members.length > 0) {
                team.team_leads = team.members.filter((x) => x.status === 1)
                team.team_mates = team.members.filter((x) => x.status === 2)
            }else{
                team.team_leads = [];
                team.team_mates = [];
            }
            delete team.members
            sendData['Data'] = team;
            callback(sendData)

        } else {
            sendData['err'] = 1;
            sendData["ReturnMsg"] = "Data not found"
            callback(sendData)
        }
    }else{
        sendData['err'] = 1;
        sendData["ReturnMsg"] = "Team is not belongs to this organization"
        callback(sendData)
    }
    },
    TEAMSUPDATE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        const { updateBody, team_id } = data || {}
        const { team_mates = [], team_leads = [], projects = [] } = updateBody || {}
        const teamId = ObjectId(team_id)
        const update_condition = {
            "_id": ObjectId(team_id),
            "achieved": false
        }
        const findUpdateData = await teamModel.findOne(update_condition)

        if (findUpdateData) {
            const updateData = await teamModel.updateOne(update_condition, { $set: updateBody });
            var orgId = findUpdateData.org_id;

            if (updateData) {

                var teamCondition = [
                    { $match: { "team_id": ObjectId(team_id) } },
                    {
                        $lookup: {
                            from: "organization_member",
                            let: { "o_id": ObjectId(orgId), "u_id": "$user_id" },
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

                var team_mem_data = await team_memberModel.aggregate(teamCondition)
                console.log("team_mem_data>", team_mem_data)
                if (team_mem_data) {
                    for (i = 0; i < team_mem_data.length; i++) {
                        let userId = team_mem_data[i].userData.user_id
                        await team_memberModel.deleteOne({ team_id: teamId, user_id: userId })
                    }
                }
                // if (updateData) {
                //     const teamCondition = {
                //         team_id: ObjectId(team_id)
                //     }
                //     await team_memberModel.deleteMany(teamCondition)

                const team_pro_Condition = {
                    team_id: ObjectId(team_id)
                }

                await team_projectModal.deleteMany(team_pro_Condition)

                let members = [...team_leads, ...team_mates]
                if (members.length > 0) {
                    for (i = 0; i < members.length; i++) {
                        teamApiController.TEAM_MEMBER_CREATE(members[i], team_id, findUpdateData.org_id, callback)
                    }
                }
                if (projects.length > 0) {
                    for (i = 0; i < projects.length; i++) {
                        teamApiController.TEAM_PROJECTS_CREATE(projects[i], team_id, findUpdateData.org_id, callback)
                    }
                }
                sendData["Data"] = {};
                sendData["ReturnMsg"] = "Team updated successfully"
                callback(sendData)
            } else {
                sendData["err"] = 1;
                sendData['ReturnMsg'] = "Could not update team, please try again later";
                callback(sendData)
            }
        }
        else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "This team is not Found"
            callback(sendData)
        }

    },
    DELETETEAM: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        const user_id = data.userData._id;
        const team_id = data.team_id;
        const update_body = {
            "achieved": true,

        }
        console.log(update_body, user_id, team_id);
        const update_condition = {
            "_id": ObjectId(team_id),

        }
        const teamList = await teamModel.findOne(update_condition)
        if (teamList) {
            const updateData = await teamModel.deleteMany(update_condition);
            var teamCondition = {
                team_id: ObjectId(team_id)
            }
            var teamData = await team_memberModel.deleteMany(teamCondition);
            var team_project_data = await team_projectModal.deleteMany(teamCondition)
            if (updateData) {
                sendData["Data"] = {};
                sendData["ReturnMsg"] = "Team Delete Sucessfully"
                callback(sendData)
            } else {
                sendData["err"] = 1;
                sendData['ReturnMsg'] = "Team is not Delete";
                callback(sendData)
            }
        }
        else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "This team is Already deleted"
            callback(sendData)
        }

    },
    TEAMSLIST: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        console.log("data>>>>", data);
        let userId = data.userData._id
        let org_id = data.orgId;
        let start = (data.start) ? parseInt(data.start) : 1;
        let limit = (data.limit) ? parseInt(data.limit) : 10;
        start = (start - 1) * limit;

        let find_condition = { "org_id": ObjectId(org_id), "user_id": ObjectId(userId) };

        let find_user_data = await org_memberModel.findOne(find_condition);

        const teamsListCondition = [
            {
                $match: {
                    "org_id": ObjectId(org_id),
                }
            },
            {
                $lookup: {
                    from: "team_member",
                    let: { t_id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$team_id", "$$t_id"] },
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
                                                    { $eq: ["$invite_accpeted", true] }
                                                ]
                                            }
                                        }
                                    },
                                ]
                            },
                        },
                        { $unwind: "$org_status_check" },
                    ],
                    as: "teamMember",
                }
            },
            {
                $lookup: {
                    from: "team_project",
                    localField: "_id",
                    foreignField: "team_id",
                    as: "projectData",
                },
            },
            {
                $project: {
                    '_id': 1,
                    "team_name": 1,
                    "member": { $size: ["$teamMember"] },
                    "project": { $size: ["$projectData"] }
                }
            },
        ]

        if (find_user_data.role == 1 || find_user_data.role == 2) {
            let start = (data.start != "null") ? parseInt(data.start) : 1;
            var listData_length = await teamModel.aggregate([...teamsListCondition])
            let limit = (data.limit != "null") ? parseInt(data.limit) : listData_length.length || 1;
            start = (start - 1) * limit;
            var listData = await teamModel.aggregate([...teamsListCondition, { $skip: start }, { $limit: limit }])
        }
        else {
            var listData_length = await teamModel.aggregate([
                ...teamsListCondition,
                {
                    $lookup: {
                        from: "team_member",
                        localField: "_id",
                        foreignField: "team_id",
                        as: "teamMember",
                    },
                }
            ])
            let start = (data.start != "null") ? parseInt(data.start) : 1;
            let limit = (data.limit != "null") ? parseInt(data.limit) : listData_length.length || 1;
            start = (start - 1) * limit;

            var list_data_length = listData_length.map((x) => {
                var teamdata = x.teamMember.map((y) => {
                    var teamMem = {
                        data: y,
                        ...x
                    }
                    delete teamMem.teamMember
                    return teamMem
                })

                return teamdata
            })
            let finalData_length = []
            list_data_length.forEach((x) => {
                x.forEach((y) => {
                    y.user_id = y.data.user_id;
                    delete y.data
                    finalData_length.push(y)
                })
            })

            listData_length = finalData_length.filter((x) => {
                return x.user_id == userId
            })


            var listData = await teamModel.aggregate([
                ...teamsListCondition,
                {
                    $lookup: {
                        from: "team_member",
                        localField: "_id",
                        foreignField: "team_id",
                        as: "teamMember",
                    },
                },
                { $skip: start },
                { $limit: limit }
            ])

            var list_data = listData.map((x) => {
                var teamdata = x.teamMember.map((y) => {
                    var teamMem = {
                        data: y,
                        ...x
                    }
                    delete teamMem.teamMember
                    return teamMem
                })

                return teamdata
            })
            let finalData = []
            list_data.forEach((x) => {
                x.forEach((y) => {
                    y.user_id = y.data.user_id;
                    delete y.data
                    finalData.push(y)
                })
            })

            listData = finalData.filter((x) => {
                return x.user_id == userId
            })
        }
        // let teamsCountCondition = [
        //     {
        //         $match: {
        //             "org_id": ObjectId(org_id),
        //         }
        //     },
        //     {
        //         $lookup: {
        //             "from": "team_member",
        //             "as": "teamMember",
        //             "let": { "t_id": "$_id" },
        //             "pipeline": [{
        //                 $match: {
        //                     $expr: {
        //                         $and: [
        //                             { $eq: ["$team_id", "$$t_id"] },
        //                         ]
        //                     }
        //                 }
        //             },

        //             ],

        //         }
        //     },
        //     {
        //         $lookup: {
        //             "from": "team_project",
        //             "localField": "_id",
        //             "foreignField": "team_id",
        //             "as": "teamData"
        //         },

        //     },
        //     {
        //         $lookup: {
        //             "from": "project",
        //             "as": "projectData",
        //             "let": { "p_id": "$teamData.project_id" },
        //             "pipeline": [{
        //                 $match: {
        //                     $expr: {
        //                         $and: [
        //                             { $eq: ["$_id", "$$p_id"] },
        //                         ]
        //                     }
        //                 }
        //             },

        //             ],

        //         }
        //     },

        //     {
        //         $project: {
        //             '_id': 1,
        //         }
        //     },

        // ]
        // const teamCount = await teamModel.aggregate(teamsCountCondition)

        console.log("teamlistData>>", listData.length);
        if (listData) {
            sendData['Data'] = {
                count: listData_length.length,
                list: listData
            };
            callback(sendData)
        }
        else {
            sendData['err'] = 1;
            sendData["ReturnMsg"] = "Data is not found"
            callback(sendData)
        }

    },
    TEAM_MEMBER_CREATE: async function (data, id, orgId, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        console.log("data>>>", data);
        if (data.userId.length == 24) {
            var condition = {
                user_id: ObjectId(data.userId),
                org_id: ObjectId(orgId),
                invite_accpeted: true
            }
            var org_member = await org_memberModel.findOne(condition)

            if (org_member) {
                var MemberData = {
                    user_id: ObjectId(data.userId),
                    team_id: ObjectId(id),
                    org_id: ObjectId(orgId),
                    role: data.role,
                    status: data.status,
                    updated_at: new Date()
                }
                var MemberData = await team_memberModel.create(MemberData)
            } else {
                console.log("member else part gone");
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Member is not include this organization"
                // callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Please vaild userId id"
            // callback(sendData);
        }
    },
    TEAM_PROJECTS_CREATE: async function (data, id, orgId, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        console.log("data>>>", data);
        if (data.length == 24) {
            var condition = {
                _id: ObjectId(data),
                org_id: ObjectId(orgId)
            }
            console.log(condition);
            var org_member = await projectModel.find(condition)
            console.log(org_member);
            if (org_member) {

                var teamProjectData = {

                    project_id: ObjectId(data),
                    team_id: ObjectId(id),
                    user_id: ObjectId(data)
                }
                var projectData = await team_projectModel.create(teamProjectData)

            } else {
                console.log("team else part gone");
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Member is not include this organization"
                // callback(sendData);
            }
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Please vaild userId id"
            // callback(sendData);
        }
    },

    DELETETEAM_DETAIL: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        console.log("data>", data)
        const user_id = data.userData._id;
        const _id = data.id
        console.log("_id>", _id)
        const team_id = data.team_id;
        const type = data.type;
        const org_id = data.org_id


        const condition = {
            "org_id": ObjectId(org_id),
            "user_id": ObjectId(user_id)
        }

        const orgdata = await organization_memberModal.findOne(condition)

        if (orgdata) {
            // const condition = {
            //     "org_id": ObjectId(org_id),
            //     "user_id": ObjectId(user_id)
            // }
            // const orgdata = await organizationModal.findOne(condition)

            const update_condition = {
                "_id": ObjectId(team_id),
                "org_id": ObjectId(org_id)
            }

            const teamList = await teamModel.findOne(update_condition)

            console.log("teamlist", teamList);

            if (teamList) {
                let count = 0;
                if (type === "member") {
                    for (let i = 0; i < _id.length; i++) {
                        const membercon = {
                            "team_id": ObjectId(team_id),
                            "user_id": ObjectId(_id[i]),
                            "org_id": ObjectId(org_id)
                        }

                        const memberdata = await team_memberModel.deleteOne(membercon)
                        console.log("memberdata>", memberdata)

                        if (memberdata.deletedCount > 0) count++
                    }

                    console.log("count",count);

                    if (count > 0) {
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Team member delete successfully."
                        callback(sendData)
                    } else {
                        sendData['err'] = 1;
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Team member already deleted."
                        callback(sendData)
                    }

                }
                else if (type === "project") {
                    for (let i = 0; i < _id.length; i++) {

                        const projectcondition = {
                            "team_id": ObjectId(team_id),
                            "project_id": ObjectId(_id[i]),
                        }

                        const projectdata = await team_projectModal.deleteOne(projectcondition)

                        console.log("projectdata", projectdata);

                        if (projectdata.deletedCount > 0) count++
                    }

                    console.log("count",count);

                    if (count > 0) {
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Team project delete successfully."
                        callback(sendData)
                    } else {
                        sendData['err'] = 1;
                        sendData["Data"] = {};
                        sendData["ReturnMsg"] = "Team project already deleted."
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
                sendData['ReturnMsg'] = "This team is not belongs to organization"
                callback(sendData)
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Org data not found"
            callback(sendData)
        }
    },
}
const organizationModel = require('../../models/organization/organization');
const clientModel = require('../../models/client/client')
const orgMemberModel = require('../../models/organization/organization_member');
const clientProjectModel = require('../../models/client/client_project');
const projectModal = require('../../models/project/project');




module.exports = {
    SAVE: async function (data, callback) {
        //send data

        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        console.log("data>>", data);
        var organizationId = data.organizationId;
        userData = data.userData;

        const condition = {
            _id: ObjectId(organizationId),
        }
        var organizationData = await organizationModel.find(condition)
        console.log("organizationData>>>", organizationData);
        if (organizationData.length > 0) {
            // console.log("log in if part");
            organizationData = organizationData[0]
            delete data['userData']
            delete data['organizationId']
            data['org_id'] = ObjectId(organizationId)



            var memberCondition = {
                name: data.name,
                org_id: ObjectId(organizationId)
            }
            clientData = await clientModel.find(memberCondition)
            if (clientData.length > 0) {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "Client already exist";
                callback(sendData);


            } else {
                if (data.project) {

                    console.log("log in if part");
                    var project = data.project;
                    delete data["project"]
                    data.created_at = new Date();
                    var clientCreateData = await clientModel.create(data)
                    console.log("clientCreateData>>>>", clientCreateData);
                    for (var i = 0; i < project.length; i++) {
                        var clientprojectdata = {
                            client_id: clientCreateData._id,
                            project_id: project[i]
                        };
                        console.log(project[i], "check");
                        clientApiController.CLIENTPROJECT_CREATE(clientprojectdata, callback);

                    }
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 0;
                    sendData['Data'] = clientCreateData;
                    sendData['ReturnMsg'] = "Client created";
                    callback(sendData);
                }
                else {
                    data.created_at = new Date();

                    var clientCreateData = await clientModel.create(data)
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 0;
                    sendData['Data'] = clientCreateData;
                    sendData['ReturnMsg'] = "Client created";
                    callback(sendData);
                }
            }
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Organization not found";
            callback(sendData);

        }

    },
    UPDATE_CLIENT_DATA: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        //get userdata into variable
        console.log("123data>>", data)
        var client_id = ObjectId(data._id);
        var condition = {
            _id: ObjectId(data._id)
        }
        console.log("condition>", condition)

        var clientData = await clientModel.find(condition)

        console.log("clientData>>", clientData)



        if (clientData.length > 0) {
            clientData = clientData[0]
            delete data['clientData']
            console.log("data.project>",data.project)
            if (data.project.length > 0) {
                var project_update = await projectModal.findOneAndUpdate({ _id: data.project[0] }, { client_id: client_id })
            } else {
                var find_project = await projectModal.findOne({ client_id})
                if(find_project){
                var project_update = await projectModal.findOneAndUpdate({ client_id}, { client_id: null })
                }
            }
            // const respData = await clientModel.findOne(condition)
            const respData = await clientModel.updateOne(condition, data)
            console.log("project_update>", project_update)
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = respData;
            sendData['ReturnMsg'] = "Client updated";
            callback(sendData);
            // if (data.project) {
            //     var Projectdelete = {
            //         client_id: ObjectId(data._id),
            //     }
            //     console.log("projectdelete>>>.",Projectdelete);

            //     var deleteData = await clientProjectModel.deleteMany(Projectdelete)

            //     for (var i = 0; i < data.project.length; i++) {
            //         var clientprojectdata = {
            //             client_id:data._id,

            //             project_id:data.project[i]};
            //             console.log("clientprojectdata>>>>>>>",clientprojectdata);
            //         clientApiController.CLIENTPROJECT_CREATE(clientprojectdata);

            //     }
            //     const respData = await clientModel.updateOne(condition, data);
            //     sendData['ReturnCode'] = 200;
            //     sendData['err'] = 0;
            //     sendData['Data'] = respData;
            //     sendData['ReturnMsg'] = "Client updated";
            //     callback(sendData);

            // }

        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No record found";
            callback(sendData);
        }

    },
    DELETE_CLIENT_DATA: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)

        const condition = {
            _id: data.deleteId
        }

        var clientData = await clientModel.find(condition)

        if (clientData.length > 0) {

            const respData = await clientModel.deleteOne(condition);

            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = respData;
            sendData['ReturnMsg'] = "Client deleted";
            callback(sendData);

        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No record found";
            callback(sendData);
        }
    },
    ARCHIVE_CLIENT: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)
        var user_id = data.userData._id;
        var clientId = data.clientId

        var memberCondition = {
            _id: ObjectId(clientId)
        }

        var clientData = await clientModel.find(memberCondition)


        if (clientData.length > 0) {
            var updateData = {
                status: false
            }

            var archiveClient = await clientModel.updateOne(memberCondition, updateData)
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Client archived";
            callback(sendData);

        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No record found";
            callback(sendData);

        }
    },
    RESTORE_CLIENT: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)
        var user_id = data.userData._id;
        var clientId = data.clientId


        var roleCondition = {
            user_id: ObjectId(user_id)
        }

        var organizationMemberData = await orgMemberModel.find(roleCondition)
        console.log("organizationMemberData>>", organizationMemberData)

        if (organizationMemberData.length > 0) {
            organizationMemberData = organizationMemberData[0]

            if (organizationMemberData.role == 1 || organizationMemberData.role == 2) {

                var updateCondition = {
                    _id: ObjectId(clientId)
                }

                var updateClientData = {
                    status: true
                }

                var updateClient = await clientModel.updateOne(updateCondition, updateClientData)
                console.log("updateClient>>", updateClient)

                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData['Data'] = []
                sendData['ReturnMsg'] = "Client restored";
                callback(sendData);

            } else {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "You are not eligible";
                callback(sendData);

            }


        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No record found";
            callback(sendData);

        }

    },
    ARCHIVE_CLIENT_LIST: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)
        var user_id = data.userData._id;
        var organizationId = data.organizationId

        var projectDataCondition = {
            org_id: ObjectId(organizationId),
            archived: true
        }

        var clientData = await clientModel.find(projectDataCondition)

        if (clientData.length > 0) {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;;
            sendData['Data'] = clientData
            sendData['ReturnMsg'] = "Client archived data";
            callback(sendData);


        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No record found";
            callback(sendData);

        }


    },
    ACTIVE_CLIENT_LIST: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)
        var user_id = data.userData._id;
        var organizationId = data.organizationId

        var projectDataCondition = {
            org_id: ObjectId(organizationId),
            archived: false
        }

        var clientData = await clientModel.find(projectDataCondition)

        if (clientData.length > 0) {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;;
            sendData['Data'] = clientData
            sendData['ReturnMsg'] = "Client Active data";
            callback(sendData);


        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No record found";
            callback(sendData);

        }

    },

    CLIENT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""

        }
        console.log(data);

        var orgid = data.orgid;
        var status = data.status;


        console.log("status", status);

        if (status == "true") {
            status = true
        } else {
            status = false
        }

        var clientcount = await clientModel.find({ "org_id": ObjectId(orgid), "status": status }).count()

        var start = (data.start != "null") ? parseInt(data.start) : 1;
        var limit = (data.limit != "null") ? parseInt(data.limit) : clientcount;
        start = (start - 1) * limit;

        var clientdata = await clientModel.find({ "org_id": ObjectId(orgid), "status": status }).skip(start).limit(limit)
        console.log(clientdata)
        var savedata = {
            count: clientcount,
            list: clientdata
        }
        if (clientdata.length > 0) {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = savedata;
            callback(sendData)
        }

        else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = {};
            sendData['ReturnMsg'] = 'No data found';
            callback(sendData)
        }



    },

    CLIENTPROJECT_CREATE: async function (data) {
        //send data
        console.log("log in CLIENTPROJECT_CREATE");
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        var Project_find = await projectModal.find({ "_id": ObjectId(data.project_id) })
        console.log("Project_find>>>>", Project_find);
        if (Project_find.length > 0) {
            data.created_at = new Date()
            var Memberdata = await clientProjectModel.create(data)

        }
    },


    CLIENTONE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        console.log(data);
        var client_id = data.client_id;

        const clientcondition = [
            {
                $match: { "_id": ObjectId(client_id) }
            },
            {
                $lookup: {
                    "from": "project",
                    "localField": "_id",
                    "foreignField": "client_id",
                    "as": "projectData"
                }
            },
            { $unwind: { path: "$ProjectData", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    "_id": 1,
                    "org_id": 1,
                    "status": 1,
                    "name": 1,
                    "email": 1,
                    "hours": 1,
                    "address": 1,
                    "number": 1,
                    "budget_type": 1,
                    "based_on": 1,
                    "notify_at": 1,
                    "reset": 1,
                    "start_date": 1,
                    "non_billable_time": 1,
                    "cost": 1,
                    "created_at": 1,
                    "updated_at": 1,
                    "projectData": "$projectData._id",

                }
            }

        ]

        // const clientcondition = [
        //     {
        //         $match: { "_id": ObjectId(client_id) }
        //     },

        //     {
        //         $lookup: {
        //             "from": "client_project",
        //             "as": "clientProjectData",
        //             "let": { "c_id": "$_id" },
        //             "pipeline": [{
        //                 $match: {
        //                     $expr: {
        //                         $and: [
        //                             { $eq: ["$client_id", "$$c_id"] },
        //                         ]
        //                     }
        //                 }
        //             },
        //             ],

        //         }
        //     },
        //     {
        //         $lookup: {
        //             "from": "project",
        //             "as": "projectData",
        //             "let": { "p_id": "$clientProjectData.project_id" },
        //             "pipeline": [{
        //                 $match: {
        //                     $expr: {
        //                         $and: [
        //                             { $in: ["$_id", "$$p_id"] },
        //                         ]
        //                     }
        //                 }
        //             },
        //             {
        //                 $project: {
        //                     '_id': 1,
        //                     'name': 1
        //                 }
        //             },
        //             ],

        //         }
        //     },
        //       {}
        //     {
        //         $project: {
        //             "_id": 1,
        //             "org_id": 1,
        //             "status": 1,
        //             "name": 1,
        //             "email": 1,
        //             "hours": 1,
        //             "address": 1,
        //             "number": 1,
        //             "budget_type": 1,
        //             "based_on": 1,
        //             "notify_at": 1,
        //             "reset": 1,
        //             "start_date": 1,
        //             "non_billable_time": 1,
        //             "cost": 1,
        //             "created_at": 1,
        //             "updated_at": 1,

        //             "projectData": 1,

        //         }
        //     }

        // ]

        const listData = await clientModel.aggregate(clientcondition);
        console.log(listData);
        if (listData.length > 0) {
            sendData['Data'] = listData[0];
            callback(sendData)
        }
        else {
            sendData['err'] = 1;
            sendData["ReturnMsg"] = "Data is not found"
            callback(sendData)
        }
    }

}

// TEAMSONE: async function (data, callback) {
//     var sendData = {
//         ReturnCode: 200,
//         err: 0,
//         Data: {},
//         ReturnMsg: ""
//     };
//     console.log("data>>>>", data);
//     var user_id = data.userData._id;
//     var team_id = data.team_id;
//     const teamcondition = [

//         {
//             $match: {
//                 "team_id": ObjectId(team_id),
//             }
//         },
//         // {
//         //     $lookup: {
//         //         "from": "team",
//         //         "as": "teamData",
//         //         "let": { "t_id": "$team_id" },
//         //         "pipeline": [{
//         //             $match: {
//         //                 $expr: {
//         //                     $and: [
//         //                         { $eq: ["$_id", "$$t_id"] },
//         //                         // { $eq: ["$achieved", false] }
//         //                     ]
//         //                 }
//         //             }
//         //         }],

//         //     }
//         // },
//         // { $unwind: "$teamData" },
//         // {
//         //     $project: {
//         //         '_id': 0,
//         //         "_id": "$teamData._id",
//         //         "org_id": "$teamData.org_id",
//         //         "team_name": "$teamData.team_name",
//         //         "approve_timesheets": "$teamData.approve_timesheets",
//         //         "schedule_shifts": "$teamData.schedule_shifts",
//         //         "approve_time_off_requests": "$teamData.approve_time_off_requests",
//         //         "create_and_edit_teams_projects": "$teamData.create_and_edit_teams_projects",
//         //         "edit_team_members_and_project_rol": "$teamData.edit_team_members_and_project_rol",
//         //         "approve_timesheets_to_team_leads": "$teamData.approve_timesheets_to_team_leads",
//         //         "approve_time_to_team_leads": "$teamData.approve_time_to_team_leads",
//         //         "schedule_shifts_to_team_leads": "$teamData.schedule_shifts_to_team_leads",
//         //         "created_By": "$teamData.created_By",
//         //         "created_at": "$teamData.created_at",
//         //         "updated_at": "$teamData.updated_at",
//         //     }
//         // }
//     ]
//     // const teamcondition = {
//     //     _id: ObjectId(team_id)
//     // }
//     const listData = await teamModel.aggregate(teamcondition)
//     console.log(listData);
//     if (listData.length > 0) {
//         sendData['Data'] = listData[0];
//         callback(sendData)
//     }
//     else {
//         sendData['err'] = 1;
//         sendData["ReturnMsg"] = "Data is not found"
//         callback(sendData)
//     }

// },
//client id
//prj id
//create
//up
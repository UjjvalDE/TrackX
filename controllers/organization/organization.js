//models imported
const userModal = require('../../models/user/user');
const organizationModal = require('../../models/organization/organization');
const organization_memberModal = require('../../models/organization/organization_member');
// const sendInvitationModal = require('../../models/organization/invite_organization_member');
const projectModal = require('../../models/project/project')
const teamModal = require('../../models/team/team')
const team_projectModal = require('../../models/team/team_project')
const team_memberModal = require('../../models/team/team_member')
const project_MemberModel = require('../../models/project/project_member.js')
const todoModal = require("../../models/to_do/to_do");
const sessionModal = require("../../models/session/session");
const screen_shotmodel = require("../../models/screen_shot/screen_shot");
const work_limitModel = require("../../models/work_limit/work_limit");
const { addDaysToDate } = require('../common');
// const { object, all } = require('underscore');
const url = process.env.URL
module.exports = {
    ADD_ORGANIZATION: async function (data, callback) {
        console.log("datacheck>>>", data)
        //send data  
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        const userData = data.userData

        const organization_type = data.organization_type;
        const organization_name = data.organization_name;
        const team_size = data.team_size;
        const manger_emailid = data.manger_emailid;
        const goals = data.goals;
        const userdata = data.userData;

        var usersData = await userModal.find({ _id: userdata._id, email_verify: true });

        if (usersData.length > 0) {
            usersData = usersData[0]

            const saveData = {
                organization_type: organization_type,
                organization_name: organization_name,
                team_size: team_size,
                owner_id: ObjectId(userdata._id),
                goals: goals,
                created_at: new Date()
            };
            const respData = await organizationModal.create(saveData);

            const orgMemberData = {
                org_id: respData._id,
                user_id: usersData._id,
                role: 1,
                invite_accpeted: true,
                created_at: new Date()

            }
            await organization_memberModal.create(orgMemberData)

            if (manger_emailid) {
                if (usersData.email != manger_emailid) {
                    var userCheckData = await userModal.find({ email: manger_emailid })
                    if (userCheckData.length <= 0) {
                        const memberEntry = {
                            email: manger_emailid,
                            temp: true,
                            created_at: new Date()
                        }
                        var userMemberData = await userModal.create(memberEntry)
                    }
                    var userCheckData = await userModal.find({ email: manger_emailid })
                    userCheckData = userCheckData[0]
                    const inviteOrgMember = {
                        org_id: respData._id,
                        user_id: userCheckData._id,
                        role: 2,
                        created_at: new Date()
                    };


                    var namecondition = {
                        _id: ObjectId(userData._id)
                    }
                    var reqSendData = await userModal.find(namecondition)
                    reqSendData = reqSendData[0]
                    var orgName = organization_name;
                    const sendinvite = await organization_memberModal.create(inviteOrgMember);

                    const org_condition = {
                        _id: ObjectId(sendinvite.org_id)
                    }
                    const org_detail = await organizationModal.findOne(org_condition);
                    var payload = {
                        _id: sendinvite._id,
                        org_name: org_detail.organization_name
                    };
                    const token = jwt.sign(payload, process.env.SECRET_KEY);
                    var link = `${url}/auth/organization-invite-verify/${token}`
                    // commonController.__sendEmail(manger_emailid, link);


                    var userName = reqSendData.name;


                    ejs.renderFile(path.join(__dirname + '/../../templates/organization_manager_invite.ejs'), { link: link, userName: userName, orgName: orgName }, (err, data) => {

                        if (!err) {
                            var subject = "Comfirm your TrackerX account"
                            commonController.__sendEmail(manger_emailid, subject, data);
                        }
                    })

                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 0;
                    sendData['Data'] = {
                        respData,
                        token: token
                    };
                    sendData['ReturnMsg'] = "Organization created";
                    callback(sendData);

                    // if (userCheckData.length > 0) {
                    //     userCheckData = userCheckData[0]
                    //     const inviteOrgMember = {
                    //         org_id: respData._id,
                    //         user_id: userCheckData._id,
                    //         role: 2
                    //     };
                    //     const sendinvite = await organization_memberModal.create(inviteOrgMember);
                    //     console.log("sendinvite>>", sendinvite)
                    //     const org_condition = {
                    //         _id: ObjectId(sendinvite.org_id)
                    //     }
                    //     const org_detail = await organizationModal.findOne(org_condition);
                    //     var payload = {
                    //         _id: sendinvite._id,
                    //         org_name: org_detail.organization_name
                    //     };
                    //     const token = jwt.sign(payload, process.env.SECRET_KEY);
                    //     var link = `${url}auth/organization-invite-verify/${token}`
                    //     commonController.__sendEmail(manger_emailid, link);

                    //     sendData['ReturnCode'] = 200;
                    //     sendData['err'] = 0;
                    //     sendData['Data'] = respData;
                    //     sendData['ReturnMsg'] = "Organization created";
                    //     callback(sendData);
                    // } else {
                    //     const memberEntry = {
                    //         email: manger_emailid,
                    //         temp: true
                    //     }
                    //     var userMemberData = await userModal.create(memberEntry)
                    //     const inviteOrgMember = {
                    //         org_id: respData._id,
                    //         user_id: userMemberData._id,
                    //         role: 2
                    //     };
                    //     const sendinvite = await organization_memberModal.create(inviteOrgMember);
                    //     console.log("sendinvite>>", sendinvite)
                    //     const org_condition = {
                    //         _id: ObjectId(sendinvite.org_id)
                    //     }
                    //     const org_detail = await organizationModal.findOne(org_condition);
                    //     var payload = {
                    //         _id: sendinvite._id,
                    //         org_name: org_detail.organization_name
                    //         // active: sendinvite.active,
                    //         // block: sendinvite.block
                    //     };
                    //     var payload = {
                    //         _id: sendinvite._id,
                    //         org_name: org_detail.organization_name
                    //     };
                    //     const token = jwt.sign(payload, process.env.SECRET_KEY);
                    //     var link = `${url}auth/organization-invite-verify/${token}`
                    //     commonController.__sendEmail(manger_emailid, link);
                    //     // const token = jwt.sign(payload, process.env.SECRET_KEY);
                    //     // commonController.__sendEmail(manger_emailid, token);
                    //     sendData['ReturnCode'] = 200;
                    //     sendData['err'] = 0;
                    //     sendData['Data'] = respData;
                    //     sendData['ReturnMsg'] = "Organization created."
                    //     callback(sendData);
                    // }
                } else {
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 0;
                    sendData['Data'] = respData;
                    sendData['ReturnMsg'] = "Organization created But owner and manger not be same";
                    callback(sendData);
                }
            } else {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData['Data'] = respData;
                sendData['ReturnMsg'] = "Organization created";
                callback(sendData);
            }

        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Please verify your account";
            callback(sendData);
        }
    },
    GET_ONE_ORG: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        const user_id = data.userData._id;
        const org_id = data.org_id;
        var condition = {
            "_id": mongoose.mongo.ObjectId(org_id.toString())
        }
        var org_data = await organizationModal.findOne(condition, { status: 0 })
        if (org_data) {
            const memberCond = {
                user_id: ObjectId(user_id),
                org_id: ObjectId(org_id),
            }
            const orgMember = await organization_memberModal.findOne(memberCond)
            let org = JSON.parse(JSON.stringify(org_data))
            org.user_role = orgMember && orgMember.role ? orgMember.role : 0
            org.status = orgMember && orgMember.status ? orgMember.status : false
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = org;
            callback(sendData)
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Organization not found";
            callback(sendData)
        }

    },

    ORGANIZATION: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        // console.log("<< data >>", data);
        var user_id = data.userData._id;
        var status = data.status;
        var start = (data.start != "null") ? parseInt(data.start) : 1;
        if (status == "true") {
            status = true
        } else {
            status = false
        }
        const orgDataCondition = [
            { $match: { "user_id": ObjectId(user_id), invite_accpeted: true } },
            {
                $lookup: {
                    "from": "organization",
                    "as": "orgData",
                    "let": { "o_id": "$org_id" },
                    "pipeline": [{
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$_id", "$$o_id"] },
                                ]
                            }
                        }
                    }],
                },


            },
            { $unwind: "$orgData" },
            { $match: { status: true } },
            { $match: { "orgData.status": status } },
            {
                $project: {
                    "organization_name": "$orgData.organization_name",
                    "_id": "$orgData._id",
                    "archived": "$orgData.status",
                    logo: "$orgData.logo",
                    user_role: "$role"

                }
            },
        ]
        var organizationcount = await organization_memberModal.aggregate(orgDataCondition);
        // var organizationcount = await organization_memberModal.find({ "user_id": ObjectId(user_id) })
        var limit = (data.limit != "null") ? parseInt(data.limit) : organizationcount.length || 1;
        start = (start - 1) * limit;
        var organizationData = await organization_memberModal.aggregate([...orgDataCondition, { $skip: start }, { $limit: limit }]);
        var saveData = {
            count: organizationcount.length,
            list: organizationData
        }
        if (organizationData.length > 0) {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = saveData;
            callback(sendData)
        }
        else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No data found";
            callback(sendData)
        }

    },


    // VERIFY_INVITE_MANAGER: async function (data, callback) {
    //     //send data 
    //     var sendData = {
    //         status: 200,
    //         err: 0,
    //         data: {},
    //         msg: ""
    //     };

    //     var token = data.token
    //     try {
    //         const decoded = jwt.verify(token, process.env.SECRET_KEY);
    //         if (typeof decoded._id != "undefined") {

    //             var sendInviteData = await organization_memberModal.find({
    //                 _id: decoded._id
    //             })
    //             console.log("sendInviteData>>", sendInviteData)

    //             if (sendInviteData.length > 0) {
    //                 sendInviteData = sendInviteData[0]

    //                 //for add organization data

    //                 const condition = {
    //                     "_id": sendInviteData._id,
    //                     "invite_accpeted": false
    //                 }
    //                 var inviteData = await organization_memberModal.find(condition)
    //                 console.log("inviteData>>>", inviteData)

    //                 if (inviteData.length > 0) {
    //                     inviteData = inviteData[0]

    //                     var userCondition = {
    //                         "_id": inviteData._id,
    //                     }

    //                     await organization_memberModal.updateOne(userCondition, { "invite_accpeted": true })
    //                     // var usersData = await userModal.find(userCondition)
    //                     // if (usersData.length > 0) {
    //                     //     usersData = usersData[0]
    //                     //     console.log("usersData>>", usersData)
    //                     //     const orgMemberData = {
    //                     //         org_id: inviteData.org_id,
    //                     //         user_id: usersData._id,
    //                     //         role: 2,
    //                     //         status: true
    //                     //     }
    //                     //     await organization_memberModal.create(orgMemberData)

    //                     //     const condition = {

    //                     //         _id: ObjectId(inviteData._id)
    //                     //     }
    //                     //     const data = {
    //                     //         "status": true
    //                     //     }
    //                     //     await sendInvitationModal.updateOne(condition, data)

    //                     //     sendData['status'] = 200;
    //                     //     sendData['err'] = 0;
    //                     //     sendData['msg'] = "Your account has been verified";
    //                     //     callback(sendData);
    //                     // } else {
    //                     //     sendData['status'] = 200;
    //                     //     sendData['err'] = 1;
    //                     //     sendData['data'] = [];
    //                     //     sendData['msg'] = "You need to verified account";
    //                     //     callback(sendData);
    //                     // }

    //                     sendData['status'] = 200;
    //                     sendData['err'] = 0;
    //                     sendData['msg'] = "Your account has been verified";
    //                     callback(sendData);

    //                 } else {
    //                     const condition = {
    //                         "_id": sendInviteData._id,
    //                         "invite_accpeted": true
    //                     }
    //                     var inviteData = await organization_memberModal.find(condition)

    //                     sendData['status'] = 200;
    //                     sendData['err'] = 1;
    //                     sendData['data'] = [];
    //                     sendData['msg'] = "You are alredy existed user";
    //                     callback(sendData);
    //                 }
    //             } else {
    //                 sendData['status'] = 200;
    //                 sendData['err'] = 1;
    //                 sendData['data'] = [];
    //                 sendData['msg'] = "not invited";
    //                 callback(sendData);
    //             }
    //         }
    //     } catch (err) {
    //         sendData['status'] = 200;
    //         sendData['err'] = 1;
    //         sendData['data'] = [];
    //         sendData['msg'] = err;
    //         callback(sendData);
    //     }
    // },
    EXIST_ORGANIZATION_INVITE: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        //get user data into variable
        var email = data.email;
        var requestId = data.userData._id

        //condition
        var condition = {
            email: email,

        };

        var usersData = await userModal.find(condition);

        if (usersData.length > 0) {
            usersData = usersData[0]
            var orgOwnerCondition = {
                owner_id: ObjectId(usersData._id),
                status: false,
            }
            const orgData = await organizationModal.find(orgOwnerCondition)

            if (orgData.length > 0) {
                var allData = []
                const updateData = orgData.map(async (value, index) => {
                    var memberCondition = {
                        user_id: ObjectId(requestId),
                        org_id: ObjectId(value._id)
                    }



                    var orgMemberData = await organization_memberModal.find(memberCondition)

                    if (orgMemberData.length > 0) {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 1;
                        sendData['Data'] = [];
                        sendData['ReturnMsg'] = "You are already member this organization"
                        callback(sendData)
                    } else {

                        var payload = {
                            _id: value._id,
                            requestId: requestId,
                        };

                        const token = jwt.sign(payload, process.env.SECRET_KEY);
                        const orgData1 = {
                            organization_Name: value.organization_name,
                            token: token
                        }
                        allData.push(orgData1)


                        if (allData && allData.length > 0) {

                            if (orgData.length == index + 1) {

                                var userdataaa = await userModal.find({ _id: ObjectId(data.userData._id) });

                                userdataaa = userdataaa[0]
                                var userName = userdataaa.name;

                                var orgName = orgData[0].organization_name
                                ejs.renderFile(path.join(__dirname + '/../../templates/exist_organization_invite.ejs'), { url: url, userName: userName, orgName: orgName, allData: allData }, (err, data) => {
                                    if (!err) {
                                        var subject = `${userName} has requested to join your organization in TrackerX`
                                        commonController.__sendEmail(email, subject, data);
                                    }
                                })
                                sendData['ReturnCode'] = 200;
                                sendData['err'] = 0;
                                sendData['ReturnMsg'] = `Send email to ${email}`
                                callback(sendData)
                            }
                        } else {
                            sendData['ReturnCode'] = 200;
                            sendData['err'] = 1;
                            sendData['Data'] = [];
                            sendData['ReturnMsg'] = "All data not found "
                            callback(sendData)
                        }
                    }
                })
            } else {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "Organization data not found "
                callback(sendData)
            }
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "You are not registerd account"
            callback(sendData)
        }
    },
    VERIFY_EXISTORG_JOIN: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };
        var token = data.token

        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            if (!decoded) {
                sendData['ReturnCode'] = 406;
                sendData['err'] = 1;
                sendData['ReturnMsg'] = "Your token is not valid";
                callback(sendData);
            } else {
                if (typeof decoded._id != "undefined") {
                    const condition = {
                        user_id: ObjectId(decoded.requestId),
                        org_id: ObjectId(decoded._id)
                    }
                    var orgMemberData = await organization_memberModal.find(condition)
                    if (orgMemberData.length > 0) {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 1;
                        sendData['Data'] = {};
                        sendData['ReturnMsg'] = "You are already member of this organization ";
                        callback(sendData);
                    } else {
                        var organizationdata = await organizationModal.find({ _id: decoded._id })
                        if (organizationdata.length > 0) {
                            organizationdata = organizationdata[0]
                            var userData = await userModal.find({ _id: decoded.requestId, email_verify: true })
                            if (userData.length > 0) {
                                userData = userData[0]
                                var orgMember = {
                                    org_id: ObjectId(organizationdata._id),
                                    user_id: ObjectId(userData._id),
                                    created_at: new Date(),
                                    invite_accpeted: true
                                }
                                const orgCreatedData = await organization_memberModal.create(orgMember)

                                const orgdata = await organizationModal.find({ _id: ObjectId(orgCreatedData.org_id) })


                                // let userName = userData.name
                                // if(orgdata && orgdata.length > 0){
                                //     orgdata = orgdata[0]
                                // }
                                let orgName = orgdata[0].organization_name
                                let ownerId = orgdata[0].owner_id

                                let userdataa = await userModal.find({ _id: ObjectId(ownerId) })

                                let userName = userdataa[0].name


                                let email = userData.email

                                var payload = {
                                    _id: userData._id,
                                    org_name: orgdata.organization_name
                                };

                                const token = jwt.sign(payload, process.env.SECRET_KEY);
                                var link = `${url}/app/dashboard`

                                ejs.renderFile(path.join(__dirname + '/../../templates/verify_existing_organization.ejs'), { url: url, userName: userName, orgName: orgName, link: link }, (err, data) => {

                                    if (!err) {
                                        var subject = "Requested accepted"
                                        commonController.__sendEmail(email, subject, data);
                                    }
                                })

                                sendData['ReturnCode'] = 200;
                                sendData['err'] = 0;
                                sendData['Data'] = orgCreatedData;
                                sendData['ReturnMsg'] = "Your invite has been accepted";
                                callback(sendData);

                            } else {
                                sendData['ReturnCode'] = 200;
                                sendData['err'] = 1;
                                sendData['Data'] = [];
                                sendData['ReturnMsg'] = "User not found";
                                callback(sendData);
                            }

                        } else {
                            sendData['ReturnCode'] = 200;
                            sendData['err'] = 1;
                            sendData['Data'] = [];
                            sendData['ReturnMsg'] = "Organization is not found";
                            callback(sendData);
                        }
                    }

                } else {
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 1;
                    sendData['Data'] = [];
                    sendData['ReturnMsg'] = "Something went to wrong";
                    callback(sendData);
                }
            }

        } catch (err) {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = err;
            callback(sendData);
        }

        // try {
        //     const decoded = jwt.verify(token, process.env.SECRET_KEY);

        //     if (!decoded) {
        //         sendData['ReturnCode'] = 406;
        //         sendData['err'] = 1;
        //         sendData['ReturnMsg'] = "Your token is not valid";
        //         callback(sendData);
        //     }
        //     console.log("decoded>>", decoded)

        //     if (typeof decoded._id != "undefined") {
        //         var verifyData = await organizationModal.find({
        //             _id: decoded._id
        //         })
        //         if (verifyData.length > 0) {
        //             verifyData = verifyData[0]
        //             var condition = {
        //                 _id: ObjectId(decoded.requestId),
        //                 status: true
        //             }
        //             var requestData = await userModal.find(condition)

        //             if (requestData.length > 0) {
        //                 requestData = requestData[0]
        //                 console.log("requestData>>", requestData)
        //                 var orgMember = {
        //                     org_id: ObjectId(decoded._id),
        //                     user_id: ObjectId(requestData._id),
        //                     created_at: new Date(),
        //                     invite_accpeted: true
        //                 }
        //                 console.log("orgMember>>", orgMember)
        //                 const orgCreatedData = await organization_memberModal.create(orgMember)

        //                 sendData['ReturnCode'] = 200;
        //                 sendData['err'] = 0;
        //                 sendData['Data'] = orgCreatedData;
        //                 sendData['ReturnMsg'] = "Your invite has been accepted";
        //                 callback(sendData);
        //             } else {
        //                 sendData['ReturnCode'] = 200;
        //                 sendData['err'] = 1;
        //                 sendData['Data'] = [];
        //                 sendData['ReturnMsg'] = "Your account has not found";
        //                 callback(sendData);
        //             }
        //         }
        //     } else {
        //         sendData['ReturnCode'] = 200;
        //         sendData['err'] = 1;
        //         sendData['Data'] = [];
        //         sendData['Data'] = "Something went to wrong";
        //         callback(sendData);
        //     }

        // } catch (err) {
        //     sendData['ReturnCode'] = 200;
        //     sendData['err'] = 1;
        //     sendData['Data'] = [];
        //     sendData['ReturnMsg'] = err;
        //     callback(sendData);
        // }
    },

    GET_INVITE_PEOPLE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };
        console.log("data>>>>", data);
        var invite_id = data.invite_id;

        var inviteCondition =
            [
                {
                    $match: { "_id": ObjectId(invite_id), "invite_accpeted": false }
                },

                {
                    $lookup: {
                        "from": "user",
                        "localField": "user_id",
                        "foreignField": "_id",
                        "as": "inviteData"
                    },

                },
                { "$unwind": "$inviteData" },

                {
                    $lookup: {
                        "from": "project_member",
                        "localField": "user_id",
                        "foreignField": "user_id",
                        "as": "projectMemberData"
                    }
                },


                {
                    $lookup: {
                        "from": "project",
                        "as": "projectData",
                        "let": { "project_id": "$projectMemberData.project_id" },
                        "pipeline": [{
                            $match: {
                                $expr: {
                                    $and: [
                                        {
                                            $in: ["$_id", "$$project_id"]
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "$project": {
                                "name": 1,
                                "_id": 1

                            }
                        }
                        ],


                    }
                },
                {
                    $lookup: {
                        "from": "team_member",
                        "as": "teamMemberData",
                        "let": { "user_id": "$user_id" },
                        "pipeline": [{
                            $match: {
                                $expr: {
                                    $and: [
                                        {
                                            $eq: ["$user_id", "$$user_id"],
                                        }
                                    ]
                                }
                            }
                        },
                        ],


                    }
                },
                {
                    $lookup: {
                        "from": "team",
                        "as": "teamData",
                        "let": { "t_id": "$teamMemberData.team_id" },
                        "pipeline": [{
                            $match: {
                                $expr: {
                                    $and: [
                                        {
                                            $in: ["$_id", "$$t_id"],
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "$project": {
                                team_name: 1,
                                _id: 1
                            }
                        },
                        ],


                    }
                },


                {
                    $lookup: {
                        "from": "organization",
                        "localField": "org_id",
                        "foreignField": "_id",
                        "as": "orgData"
                    }
                },
                {
                    "$unwind": "$orgData"
                },

                {
                    $project: {
                        "name": "$inviteData.name",
                        "email": "$inviteData.email",
                        "user_id": "$inviteData._id",
                        "org_id": 1,
                        "projectData": 1,
                        "teamData": 1,
                        "role": 1,
                        "pay_period": 1,
                        "create_at": "$inviteData.created_at",
                        "pay_rate": 1,
                        "weekly_limit": 1,
                        "status": 1,
                        "timesheet_approval": "$orgMemberData.timesheet_approval",
                        "organization_name": "$orgData.organization_name"

                    }
                },
            ]
        const inviteData = await organization_memberModal.aggregate(inviteCondition);
        console.log("inviteData>>>", inviteData);
        if (inviteData) {
            sendData['Data'] = inviteData;
            callback(sendData);
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Given Id is not Found"
            callback(sendData);
        }

    },

    DELETE_INVITE_PEOPLE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };
        console.log("data>>>>", data);
        var invite_id = data.invite_id;
        var condition = {
            _id: ObjectId(invite_id)
        }

        const inviteData = await organization_memberModal.findOne(condition);
        console.log("inviteData>", inviteData);

        if (inviteData.status == true) {

            const Del_data = await organization_memberModal.deleteOne(condition);

            const Del_cond = {
                user_id: inviteData.user_id,
                org_id: inviteData.org_id
            }

            const Pro_Data = await project_MemberModel.deleteMany(Del_cond);
            const Team_Data = await team_memberModal.deleteMany(Del_cond);
            // console.log("inviteData>",inviteData)
        } else {
            const update_data = await organization_memberModal.findOneAndUpdate(condition, { "status": false, "invite_accpeted": true })
        }
        if (inviteData) {
            sendData['ReturnMsg'] = "Invitation delete successfully";
            callback(sendData);
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Given Id is not Found"
            callback(sendData);
        }

    },
    UPDATE_INVITE_PEOPLE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };
        console.log("data>>>>", data);
        var invite_id = data.invite_id;
        const invitecondition = {
            "_id": invite_id,
            "invite_accpeted": false
        }
        const inviteData = await organization_memberModal.findOne(invitecondition)
        console.log("inviteData>>>", inviteData);
        if (inviteData) {
            try {
                const { name, pay_period, pay_rate, projects, role, teams, timesheet_approval, weekly_limit } = data.updateData;
                if (name) {
                    const userUpdate = {
                        "name": name
                    }
                    const usercondition = {
                        "_id": inviteData.user_id
                    }
                    const updateUser = await userModal.updateOne(usercondition, userUpdate)
                }
                if (projects) {
                    console.log("data is come on project part")
                    const projectcondition = {
                        "user_id": ObjectId(inviteData.user_id),
                        "org_id": ObjectId(inviteData.org_id),
                        // "project_id": ObjectId(project)
                    }

                    var projectMemberData = await project_MemberModel.deleteMany(projectcondition)
                    console.log(projectMemberData);
                    projects.forEach(async project => {
                        // if (projectMemberData.length == 0) {
                        organizationApiController.MEMBER_CREATE(project, data.role, inviteData.user_id, inviteData.org_id, callback)
                        // }
                    });
                }
                if (teams) {
                    console.log("data is come on teams part")
                    const teamCondition = {
                        "user_id": ObjectId(inviteData.user_id),
                        "org_id": ObjectId(inviteData.org_id),
                    }
                    var teamData = await team_memberModal.deleteMany(teamCondition)
                    console.log("teamDat>>>a", teamData);
                    teams.forEach(async eachteam => {
                        // if (teamData.length == 0) {
                        organizationApiController.TEAM_CREATE(eachteam, inviteData.user_id, inviteData.org_id, callback)
                        // }
                    });
                }

                if (pay_rate || role || pay_period || weekly_limit) {
                    console.log("flow is gonse on etc");
                    const updateData = {
                        "pay_rate": pay_rate,
                        "role": role,
                        "pay_period": pay_period,
                        "weekly_limit": weekly_limit
                    }
                    const updateinvite = await organization_memberModal.updateOne(invitecondition, updateData)

                }
                sendData['ReturnMsg'] = "Data Updated SucessFully"
                callback(sendData)

            } catch (err) {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = err
                callback(sendData)
            }
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Invite Data Not Found"
            callback(sendData)
        }
    },
    REINVITE_PEOPLE: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };
        console.log("data>>>>123", data);

        var invite_id = data.invite_id;
        var condition = {
            "_id": ObjectId(invite_id),
            "invite_accpeted": false
        }
        const inviteData = await organization_memberModal.findOne(condition);
        const orgData = await organizationModal.findOne({ _id: ObjectId(inviteData.org_id) })
        console.log("inviteData>>>>", inviteData);
        if (inviteData) {
            var payload = {
                _id: inviteData._id,
                organization_name: orgData.organization_name
            }
            const userData = await userModal.findOne({ _id: inviteData.user_id })
            console.log("userData>>>", userData);

            const token = jwt.sign(payload, process.env.SECRET_KEY);
            var link = `${url}/auth/organization-invite-verify/${token}`
            // commonController.__sendEmail(userData.email, link);

            var namecondition = {
                _id: ObjectId(data.userData._id)
            }
            var reqSendData = await userModal.find(namecondition)
            reqSendData = reqSendData[0]
            console.log("reqSendData>>", reqSendData)
            var orgName = orgData.organization_name
            const email = userData.email
            // console.log("email>>>>>>", userData.email)

            var userName = reqSendData.name
            ejs.renderFile(path.join(__dirname + '/../../templates/invite_people.ejs'), { link: link, userName: userName, orgName: orgName }, (err, data) => {
                console.log("err>>", err)
                console.log("data>>>", data)
                if (!err) {
                    console.log(err);
                    var subject = `${userName} invites you to join ${orgName} on TrackerX`
                    commonController.__sendEmail(email, subject, data);
                }
            })
            console.log("link>>>>", link);
            sendData['ReturnMsg'] = "Invitation send sucessfully";
            callback(sendData);
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Given Id is not Found"
            callback(sendData);
        }
    },
    INVITE_PEOPLE: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        console.log("data>>123", data)
        const userData = data.userData

        var memberCondition = [
            { $match: { "email": data.email } },
            {
                $lookup: {
                    "from": "organization_member",
                    "foreignField": "user_id",
                    "localField": "_id",
                    "as": "orgmemberData"
                }
            },
            { $unwind: "$orgmemberData" },

            { $match: { "orgmemberData.org_id": ObjectId(data.organizationId) } },
            // { $match: { "orgmemberData.invite_accpeted": false } },
            // { $match: { "status": false } },
            {
                $project: {
                    "_id": 1,
                    "email": 1,
                    "password": 1,
                    "name": 1,
                    "token": 1,
                    "email_verify": 1,
                    "temp": 1,
                    "created_at": 1,
                    "updated_at": 1,
                    "invite_org": 1,
                    "orgmemberData": 1
                }
            }
        ]
        var orgMemberData = await userModal.aggregate(memberCondition)
        // console.log("<< orgMemberData >>123", orgMemberData);

        if (orgMemberData.length > 0) {
            orgMemberData = orgMemberData[0].orgmemberData;

            //var invited_memberData = await userModal.aggregate(invited_memberCondition)
            if (orgMemberData.status == true && orgMemberData.invite_accpeted == true) {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "User already belongs to the organization";
                callback(sendData);
            } else if (orgMemberData.status == true && orgMemberData.invite_accpeted == false) {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "User already invited to the organization";
                callback(sendData);
            } else if (orgMemberData.status == false && orgMemberData.invite_accpeted == true) {
                var userCheckData = await userModal.findOne({ _id: orgMemberData.user_id });
                // console.log("userCheckData>>>>123",userCheckData)
                var organizationCondition = {
                    _id: ObjectId(data.organizationId)
                }

                var orgData = await organizationModal.findOne(organizationCondition)
                var createInviteData = {
                    user_id: ObjectId(userCheckData._id),
                    org_id: ObjectId(data.organizationId),
                    role: data.role,
                    pay_rate: data.pay_rate,
                    invite_accpeted: false,
                    created_at: new Date(),
                }
                var projectData = await project_MemberModel.find({ user_id: userCheckData._id });
                console.log("projectData", projectData);
                if (data.projects && data.projects.length > 0) {
                    var project = data.projects
                    var deleteproject = {
                        user_id: ObjectId(userCheckData._id),
                        org_id: ObjectId(data.organizationId),
                    }

                    var datadelete = await project_MemberModel.deleteMany(deleteproject);
                    for (i = 0; i < project.length; i++) {
                        organizationApiController.MEMBER_CREATE(project[i], data.role, userCheckData._id, data.organizationId, callback)
                    }
                }
                if (data.teams) {
                    var teamId = data.teams
                    var deleteteam = {
                        user_id: ObjectId(userCheckData._id),
                        org_id: ObjectId(data.organizationId),
                    }
                    var datadelete = await team_memberModal.deleteMany(deleteteam)
                    for (i = 0; i < teamId.length; i++) {
                        organizationApiController.TEAM_CREATE(teamId[i], userCheckData._id, data.organizationId, callback)
                    }
                }
                var namecondition = {
                    _id: ObjectId(userData._id)
                }
                var reqSendData = await userModal.findOne(namecondition)
                // reqSendData = reqSendData[0]
                console.log("reqSendData>>", reqSendData)
                var inviteData = await organization_memberModal.updateOne({ _id: ObjectId(orgMemberData._id) }, createInviteData)
                // console.log('inviteData>>', inviteData);

                var payload = {
                    _id: orgMemberData._id,
                    org_name: orgData.organization_name
                }
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                var urlInvite = `${url}/auth/organization-invite-verify/${token}`;
                console.log(urlInvite);
                // var link = `${process.env.LOCALHOST}guest/verify-user/${token}`
                // console.log("link>>",link)
                var userName = reqSendData.name
                ejs.renderFile(path.join(__dirname + '/../../templates/invite_people.ejs'), { link: urlInvite, userName: userName, orgName: orgData.organization_name }, (err, htmldata) => {
                    console.log("err>>", err)
                    console.log("data>>>", data)
                    if (!err) {
                        console.log(err);
                        var subject = `${userName} invites you to join ${orgData.organization_name} on TrackerX`
                        commonController.__sendEmail(data.email, subject, htmldata);
                    }
                })
                // commonController.__sendEmail(data.email, urlInvite);

                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData["Data"] = inviteData
                sendData['ReturnMsg'] = `Invite sent to ${data.email}`
                callback(sendData);
            }

        } else {
            var organizationCondition = {
                _id: ObjectId(data.organizationId)
            }

            var orgData = await organizationModal.findOne(organizationCondition)
            // console.log("orgData>>", orgData)
            if (orgData) {

                var userCheckData = await userModal.findOne({ email: data.email });
                // userCheckData = userCheckData[0]
                if (!userCheckData) {
                    const memberEntry = {
                        email: data.email,
                        temp: true,
                        created_at: new Date()
                    }
                    var userMemberData = await userModal.create(memberEntry)
                    // console.log("newUserMemberData >>>", userMemberData);
                }
                //for organization owner name
                var namecondition = {
                    _id: ObjectId(userData._id)
                }
                var reqSendData = await userModal.findOne(namecondition)
                // reqSendData = reqSendData[0]
                console.log("reqSendData>>", reqSendData)
                var orgName = orgData.organization_name
                userCheckData = await userModal.findOne({ email: data.email });
                // console.log('userCheckData>>', userCheckData);
                var createInviteData = {
                    user_id: ObjectId(userCheckData._id),
                    org_id: ObjectId(data.organizationId),
                    role: data.role,
                    status: true,
                    pay_rate: data.pay_rate,
                    created_at: new Date(),
                }
                var projectData = await project_MemberModel.find({ user_id: userCheckData._id });
                console.log("projectData", projectData);
                if (data.projects) {
                    var project = data.projects
                    var deleteproject = {
                        user_id: ObjectId(userCheckData._id),
                        // org_id: ObjectId(data.organizationId),
                    }

                    console.log("deleteproject", deleteproject);

                    var datadelete = await project_MemberModel.deleteMany(deleteproject);


                    for (i = 0; i < project.length; i++) {
                        organizationApiController.MEMBER_CREATE(project[i], data.role, userCheckData._id, data.organizationId, callback)
                    }
                }
                if (data.teams) {
                    var teamId = data.teams
                    var deleteteam = {
                        user_id: ObjectId(userCheckData._id),
                        // org_id: ObjectId(data.organizationId),
                    }

                    console.log("deleteteam", deleteteam);
                    var datadelete = await team_memberModal.deleteMany(deleteteam)
                    for (i = 0; i < teamId.length; i++) {
                        organizationApiController.TEAM_CREATE(teamId[i], userCheckData._id, data.organizationId, callback)
                    }
                }
                var inviteData = await organization_memberModal.create(createInviteData)
                console.log('inviteData>>', inviteData);

                var payload = {
                    _id: inviteData._id,
                    org_name: orgData.organization_name
                }
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                var link = `${url}/auth/organization-invite-verify/${token}`;
                console.log(link);
                // var link = `${process.env.LOCALHOST}guest/verify-user/${token}`
                // console.log("link>>",link)
                // commonController.__sendEmail(data.email, url);
                var userName = reqSendData.name
                ejs.renderFile(path.join(__dirname + '/../../templates/invite_people.ejs'), { link: link, userName: userName, orgName: orgName }, (err, data) => {
                    console.log("err>>", err)
                    console.log("data>>>", data)
                    if (!err) {
                        console.log(err);
                        var subject = `${userName} invites you to join ${orgName} on TrackerX`
                        commonController.__sendEmail(userCheckData.email, subject, data);
                    }
                })

                sendData['ReturnCode'] = 200;
                sendData['err'] = 0;
                sendData["Data"] = inviteData
                sendData['ReturnMsg'] = `Invite sent to ${data.email}`
                callback(sendData);


            } else {
                sendData['ReturnCode'] = 200;
                sendData['err'] = 1;
                sendData['Data'] = [];
                sendData['ReturnMsg'] = "OrganizationData data not found";
                callback(sendData);
            }
        }
    },
    VERIFY_INVITE_MEMBER: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        console.log("data>>", data)
        var token = data.token

        try {
            jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
                if (!decoded) {
                    sendData['ReturnCode'] = 200;
                    sendData['err'] = 1;
                    sendData['Data'] = [];
                    sendData['ReturnMsg'] = "Your token is not valid";
                    callback(sendData);
                } else {
                    if (decoded && typeof decoded._id !== "undefined") {
                        var verifyDataCondition = {
                            _id: ObjectId(decoded._id),
                            "invite_accpeted": false
                        }

                        var inviteData = await organization_memberModal.find(verifyDataCondition)
                        console.log("inviteData>>", inviteData)

                        if (inviteData.length > 0) {
                            inviteData = inviteData[0]

                            var userCondition = {
                                _id: ObjectId(inviteData.user_id),
                                email_verify: true
                            }

                            var usersData = await userModal.find(userCondition)
                            var errorData = await userModal.findOne({ _id: ObjectId(inviteData.user_id) })
                            var email = errorData.email

                            console.log("usersData>>", usersData)
                            if (usersData.length > 0) {

                                usersData = usersData[0]

                                // var orgMember = {
                                //     org_id: ObjectId(inviteData.org_id),
                                //     user_id: ObjectId(usersData._id),
                                //     role: inviteData.role,
                                // }

                                // await organization_memberModal.create(orgMember)

                                var UpdateCondition = {
                                    _id: ObjectId(decoded._id),
                                    "invite_accpeted": false
                                }
                                var UpdateData = {
                                    invite_accpeted: true,
                                    status: true
                                }

                                var inviteMemberData = await organization_memberModal.updateOne(UpdateCondition, UpdateData);


                                sendData['ReturnCode'] = 200;
                                sendData['err'] = 0;
                                sendData['Data'] = usersData;
                                sendData['ReturnMsg'] = "Your invitation has been accepted";
                                callback(sendData);


                            } else {
                                sendData['ReturnCode'] = 200;
                                sendData['err'] = 1;
                                sendData['Data'] = { "email": email };
                                sendData['ReturnMsg'] = "You need to register your account";
                                callback(sendData);

                            }
                        } else {
                            sendData['ReturnCode'] = 200;
                            sendData['err'] = 1;
                            sendData['Data'] = errorData;
                            sendData['ReturnMsg'] = "Your account has not invited";
                            callback(sendData);
                        }
                    } else {
                        sendData['ReturnCode'] = 200;
                        sendData['err'] = 1;
                        sendData['Data'] = [];
                        sendData['ReturnMsg'] = "Something went wrong";
                        callback(sendData);
                    }
                }
            });
        } catch (err) {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = err;
            // callback(sendData);
        }
    },
    UPDATE_ORGANIZATION: async function (data, callback) {
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
            _id: data.updateId
        }

        var organizationData = await organizationModal.find(condition)

        console.log("organizationData>>", organizationData)

        if (organizationData.length > 0) {
            organizationData = organizationData[0]

            delete data['userData']
            delete data['updateId']

            const respData = await organizationModal.updateOne(condition, data);
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = respData;
            sendData['ReturnMsg'] = "Your organization updated successfully!";
            callback(sendData);
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Something is wrong";
            callback(sendData);
        }
    },
    DELETE_ORGANIZATION_DATA: async function (data, callback) {
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

        var organizationData = await organizationModal.find(condition)

        console.log("organizationData>>", organizationData)

        if (organizationData.length > 0) {
            organizationData = organizationData[0]

            organizationApiController.__deleteOrg(organizationData)
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['ReturnMsg'] = "Organization deleted.";
            callback(sendData);
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Your organization not found";
            callback(sendData);
        }
    },
    __deleteOrg: async function (data) {

        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable

        const condition = {
            _id: ObjectId(data._id)
        }
        // console.log("condition>>", condition)
        await organizationModal.deleteMany(condition);


        var orgMemberData = {
            org_id: ObjectId(data._id)
        }
        console.log("orgMemberData>>", orgMemberData)
        await organization_memberModal.deleteMany(orgMemberData)

        var projectData = {
            org_id: ObjectId(data._id)
        }

        var projectdata = await projectModal.find(projectData)
        if (projectdata.length > 0) {
            await projectModal.deleteMany(projectData)
            await project_MemberModel.deleteMany(projectData);
            await team_projectModal.deleteMany(projectData)

            var teamCondition = {
                org_id: ObjectId(data._id)
            }
            await teamModal.deleteMany(teamCondition)
            await team_memberModal.deleteMany(teamCondition)
            organizationApiController.__deleteOrgData(projectdata)
        }
    },
    __deleteOrgData: async function (data) {
        for (var i = 0; i < data.length; i++) {
            var sessioncondition = {
                project_id: ObjectId(data[i]._id)
            }
            var sessionData = await sessionModal.find(sessioncondition)
            if (sessionData.length > 0) {
                organizationApiController.__deleteOrgSSData(sessionData)
            }
            var deleteCondition = {
                project_id: ObjectId(data[i]._id)
            }
            await todoModal.deleteMany(sessioncondition)
            await sessionModal.deleteMany(sessioncondition)

        }
    },
    __deleteOrgSSData: async function (data) {
        for (var i = 0; i < data.length; i++) {
            var sscondition = {
                session_id: ObjectId(data[i]._id)
            }
            await screen_shotmodel.deleteMany(sscondition)

        }
    },
    ORGANIZATION_MEMBER_LIST: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)
        var start = (data.start != "null") ? parseInt(data.start) : 1;



        let active_status = data.active_status;
        // if(data.active_status == "all") 
        if (data.active_status == "true") active_status = true
        else if (data.active_status == "false") active_status = false

        console.log("active>>", active_status);

        let status = false;
        if (data.status == "true") status = true
        let time_track;
        if (data.time_track == "true") time_track = true
        else if (data.time_track == "false") time_track = false


        let matchCondition = {
            "org_id": ObjectId(data.orgId),
            "invite_accpeted": status,
        }
        if (data.role) matchCondition.role = Number(data.role)
        if (time_track !== undefined) matchCondition.time_track = time_track



        if (active_status == true || active_status == false) {
            matchCondition.status = active_status
            // delete matchCondition.invite_accpeted
        }
        else if (active_status == "all") {
            // matchCondition.status = active_status
            ((matchCondition.invite_accpeted = true) || (matchCondition.status = (true || false)))
            // delete matchCondition.invite_accpeted
        }


        console.log("matchconditii>>", matchCondition);



        var memberCondition = [
            {
                $match: matchCondition
            },
            {
                $lookup: {
                    from: "user",
                    as: "userData",
                    let: { u_id: "$user_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$u_id"] },
                                "name": { $regex: data.name || '', $options: "-i" }
                            },
                        },]
                }
            },
            { $unwind: "$userData" },
            {
                $lookup: {
                    "from": "team_member",
                    "as": "teamMemberData",
                    "let": { "user_id": "$user_id", "org_id": "$org_id" },
                    "pipeline": [{
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$user_id", "$$user_id"], },
                                    { $eq: ["$org_id", "$$org_id"] }
                                ]
                            }
                        }
                    },
                    ],


                }
            },
            {
                $lookup: {
                    "from": "project_member",
                    "as": "projectMemberData",
                    "let": { "user_id": "$user_id", "org_id": "$org_id" },

                    "pipeline": [{
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$user_id", "$$user_id"] },
                                    { $eq: ["$org_id", "$$org_id"] }
                                ]
                            }
                        }
                    },
                    ],


                }
            },
            {
                $addFields: {
                    createAt: "$created_at" ,
                }
              },
            {
                $project: {
                    "user_id": 1,
                    "name": "$userData.name",
                    "status": 1,
                    "email": "$userData.email",
                    "createAt" : 1,
                    "profile_img": "$userData.profile_img",
                    "pay_rate": 1,
                    "role": 1,
                    "weekly_limit": 1,
                    "daily_limit": 1,
                    "time_track": 1,
                    "team": { $size: ['$teamMemberData'] },
                    "project": { $size: ["$projectMemberData"] },
                    "invite_accpeted": 1,
                    "bill_rate": 1,
                    "pay_period": 1,
                    "pay_type": 1,
                    "default_project_role": 1
                },
            }

        ]
        var org_count = await organization_memberModal.aggregate(memberCondition)
        // console.log("org_count", org_count);

        var limit = (data.limit != "null") ? parseInt(data.limit) : org_count.length || 1;
        start = (start - 1) * limit;
        var org_Data = await organization_memberModal.aggregate([...memberCondition, { $skip: start }, { $limit: limit }])

        if (org_Data.length > 0) {
            sendData['Data'] = {
                "count": org_count.length,
                "list": org_Data
            }
            sendData['ReturnMsg'] = "Organization member list"
            callback(sendData);
        } else {
            sendData['err'] = 1;
            sendData['ReturnMsg'] = "Data not found"
            callback(sendData);
        }
    },
    ORGANIZATION_ONE_MEMBER_LIST: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        }
        console.log("data>>", data)
        const user_id = ObjectId(data.user_id);
        const org_id = ObjectId(data.org_id)


        let matchCondition = {
            "org_id": ObjectId(org_id),
            "user_id": ObjectId(user_id),
        }

        var memberCondition = [{ $match: matchCondition },

        {
            $lookup: {
                "from": "user",
                "localField": "user_id",
                "foreignField": "_id",
                "as": "userData"
            }
        },
        { $unwind: "$userData" },
        {
            $lookup: {
                from: "Session",
                let: { "u_id": user_id, "o_id": "$org_id" },
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
                    { $sort: { start_time : -1  }},
                    { $limit: 1 },
                    {
                        $project: {
                            _id: 1,
                            last_active: 
                            { $cond: [{ $eq: ['$end_time', null] }, '$start_time', '$end_time'] },                         
                            todo_id: "$todo_id",
                            project_id: "$project_id",
                            start_time : "$start_time"
                        }
                    }
                ]
            }

        },
        { $unwind: { path: "$session_data", preserveNullAndEmptyArrays: true } },
        {
            $lookup: {
                from: "screen_shot",
                let: { "s_id": "$session_data._id"},
                as: "screenshot_data",
                pipeline: [
                    {
                        $match:
                        {
                            $expr: {
                                $and: [
                                    { $eq: ["$session_id", "$$s_id"] },
                                ]
                            }
                        }
                    },
                    { $sort: { created_at : -1  }},
                    { $limit : 1}, 
                    {
                        $project: {
                            _id: 1,
                            created_at : 1
                            // last_active: 
                            // { $cond: [{ $eq: ['$end_time', null] }, '$start_time', '$end_time'] },                         
                            // todo_id: "$todo_id",
                            // project_id: "$project_id",
                            // start_time : "$start_time"
                        }
                    }
                ]
            }
        },
        { $unwind: { path: "$screenshot_data", preserveNullAndEmptyArrays: true } },
        {
            $lookup: {
                from: "project",
                let: { "p_id": "$session_data.project_id" },
                as: "project_data",
                pipeline: [
                    {
                        $match:
                        {
                            $expr: {
                                $and: [
                                    { $eq: ["$_id", "$$p_id"] },
                                ]
                            }
                        }
                    },
                    { $limit: 1 },
                    {
                        $project: {
                            _id: 1,
                            project_name: "$name"
                        }
                    }
                ]
            }
        },
        { $unwind: { path: "$project_data", preserveNullAndEmptyArrays: true } },
        // { $unwind : "$project_data"},
        {
            $lookup: {
                from: "to_do",
                let: { "u_id": user_id, "todo_id": "$session_data.todo_id" },
                as: "todo_data",
                pipeline: [
                    {
                        $match:
                        {
                            $expr: {
                                $and: [
                                    { $eq: ["$createdby_id", "$$u_id"] },
                                    { $eq: ["$_id", "$$todo_id"] },
                                ]
                            }
                        }
                    },
                    { $limit: 1 },
                    {
                        $project: {
                            _id: 1,
                            title_name: "$title"
                        }
                    }
                ]
            }
        },
        { $unwind: { path: "$todo_data", preserveNullAndEmptyArrays: true } },
        // { $unwind : "$todo_data"},
        {
            $lookup: {
                "from": "team_member",
                "as": "teamMemberData",
                "let": { "user_id": "$user_id", "org_id": "$org_id" },
                "pipeline": [{
                    $match: {
                        $expr: {
                            $and: [
                                {
                                    $eq: ["$user_id", "$$user_id"],
                                },
                                {
                                    $eq: ["$org_id", "$$org_id"]
                                }
                            ]
                        }
                    }
                },
                ],


            }
        },
        {
            $lookup: {
                "from": "team",
                "as": "teamData",
                "let": { "t_id": "$teamMemberData.team_id" },
                "pipeline": [{
                    $match: {
                        $expr: {
                            $and: [
                                {
                                    $in: ["$_id", "$$t_id"],
                                }
                            ]
                        }
                    }
                },
                {
                    "$project": {
                        team_name: 1,
                        _id: 1
                    }
                },
                ],


            }
        },
        {
            $lookup: {
                "from": "project_member",
                "as": "projectMemberData",
                "let": {
                    "user_id": "$user_id", "org_id": "$org_id"
                },

                "pipeline": [{
                    $match: {
                        $expr: {
                            $and: [
                                { $eq: ["$user_id", "$$user_id"] },
                                { $eq: ["$org_id", "$$org_id"] }
                            ]
                        }
                    }
                },
                ],


            }
        },
        {
            $lookup: {
                "from": "project",
                "as": "projectData",
                "let": { "p_id": "$projectMemberData.project_id" },
                "pipeline": [{
                    $match: {
                        $expr: {
                            $and: [
                                {
                                    $in: ["$_id", "$$p_id"],
                                }
                            ]
                        }
                    }
                },
                {
                    "$project": {
                        name: 1,
                        _id: 1
                    }
                },
                ],


            }
        },
        {
            $project: {
                "user_id": 1,
                "org_id": 1,
                "role": 1,
                "default_project_role" : 1,
                "status": 1,
                "job_title": 1,
                "job_type": 1,
                "location": 1,
                "employee_id": 1,
                "tax_info": 1,
                "time_track": 1,
                "member_add_allProject": 1,
                "add_as": 1,
                "modify_time": 1,
                "allowed_app": 1,
                "idle_timeOut": 1,
                "keep_idle_time": 1,
                "pay_period": 1,
                "pay_type": 1,
                "timesheet_approval": 1,
                "pay_rate": 1,
                "bill_rate": 1,
                "weekly_limit": 1,
                "daily_limit": 1,
                "shift_to_set_daily_limit": 1,
                "day_allow_work": 1,
                "created_at": 1,
                "member_joined": "$created_at",
                "updated_at": 1,
                "__v": 1,
                "projectData": 1,
                "teamData": 1,
                // "last_active": "$session_data.last_active", 
                "last_active": "$screenshot_data.created_at",
                // "sddddd" : "$screenshot_data",
                // {
                //     $cond: {
                //         if: "$session_data.end_time",
                //         then: "$session_data.last_active",
                //         else: "$session_data",
                //     }
                // },
                "project_name": "$project_data.project_name",
                // "dddddd" : "$session_data",
                "last_tracking_todo_name": "$todo_data.title_name",
                "name": "$userData.name",
                "email": "$userData.email",
                "profile_img": "$userData.profile_img",
                "teamData": 1,

            }
        }
        ]
        var org_data = await organization_memberModal.aggregate(memberCondition)

        // console.log("org_data>>", org_data);
        // console.log("conditions>>", conditions);
        if (org_data.length > 0) {
            console.log(org_data);
            sendData['Data'] = org_data;
            callback(sendData)

        } else {
            sendData["err"] = 1;
            sendData['ReturnMsg'] = "User is not belongs to this organization.";
            callback(sendData)
        }
    },
    // ORGANIZATION_ONE_MEMBER_LIST: async function (data, callback) {
    //     //send data
    //     var sendData = {
    //         ReturnCode: 200,
    //         err: 0,
    //         Data: {},
    //         ReturnMsg: ""
    //     };
    //     //get userdata into variable
    //     console.log("data>>", data)
    //     var user_id = data.userData._id
    //     var conditions = {
    //         user_id: ObjectId(user_id),
    //         org_id: ObjectId(data.orgId)
    //     }
    //     var org_member = await organization_memberModal.find(conditions)

    //     if (org_member.length > 0) {

    //         org_member = org_member[0]

    //         org_member = JSON.parse(JSON.stringify(org_member))

    //         if (org_member.org_id == data.orgId) {
    //             var start = (data.start) ? parseInt(data.start) : 1;

    //             var limit = data.limit ? parseInt(data.limit) : 10;
    //             start = (start - 1) * limit;

    //             if (data.status == true) {
    //                 console.log("true");
    //                 var memberCondition = [{ $match: { "org_id": ObjectId(data.orgId), "_id": ObjectId(data.userId) } },
    //                 {
    //                     $lookup: {
    //                         "from": "user",
    //                         "localField": "user_id",
    //                         "foreignField": "_id",
    //                         "as": "userData"
    //                     }
    //                 },
    //                 { $unwind: "$userData" },
    //                 {
    //                     $lookup: {
    //                         "from": "team_member",
    //                         "localField": "user_id",
    //                         "foreignField": "user_id",
    //                         "as": "teamMemberData"
    //                     }
    //                 },
    //                 {
    //                     $lookup: {
    //                         "from": "project_member",
    //                         "localField": "user_id",
    //                         "foreignField": "user_id",
    //                         "as": "projectMemberData"
    //                     }
    //                 },
    //                 {
    //                     $project: {
    //                         "name": "$userData.name",
    //                         "status": 1,
    //                         "pay_rate": 1,
    //                         "role": 1,
    //                         "weekly_limit": 1,
    //                         "daily_limit": 1,
    //                         "time_track": 1,
    //                         "team": { $size: ['$teamMemberData'] },
    //                         "project": { $size: ["$projectMemberData"] },
    //                         "bill_rate": 1,
    //                         "pay_period": 1,
    //                         "pay_type": 1
    //                     }
    //                 }]

    //                 var org_Data = await organization_memberModal.aggregate(memberCondition)
    //                 if (org_Data.length > 0) {
    //                     sendData['ReturnCode'] = 200;
    //                     sendData['err'] = 0;
    //                     sendData['Data'] = org_Data
    //                     sendData['ReturnMsg'] = ""
    //                     callback(sendData);
    //                 } else {
    //                     sendData['ReturnCode'] = 404;
    //                     sendData['err'] = 1;
    //                     sendData['Data'] = org_Data;
    //                     sendData['ReturnMsg'] = "Data not found"
    //                     callback(sendData);
    //                 }
    //             } else {

    //                 var memberCondition = [{ $match: { "org_id": ObjectId(data.orgId), "_id": ObjectId(data.userId) } },
    //                 {
    //                     $lookup: {
    //                         "from": "user",
    //                         "localField": "user_id",
    //                         "foreignField": "_id",
    //                         "as": "userData"
    //                     }
    //                 },
    //                 { $unwind: "$userData" },
    //                 {
    //                     $lookup: {
    //                         "from": "team_member",
    //                         "localField": "user_id",
    //                         "foreignField": "user_id",
    //                         "as": "teamMemberData"
    //                     }
    //                 },
    //                 {
    //                     $lookup: {
    //                         "from": "project_member",
    //                         "localField": "user_id",
    //                         "foreignField": "user_id",
    //                         "as": "projectMemberData"
    //                     }
    //                 },
    //                 {
    //                     $project: {
    //                         "email": "$userData.email",
    //                         "status": 1,
    //                         "pay_rate": 1,
    //                         "weekly_limit": 1,
    //                         "team": { $size: ['$teamMemberData'] },
    //                         "project": { $size: ["$projectMemberData"] },
    //                         "pay_period": 1,
    //                         "role": 1
    //                     }
    //                 }]
    //                 var memberData = await sendInvitationModal.aggregate(memberCondition)
    //                 if (memberData.length > 0) {

    //                     sendData['ReturnCode'] = 200;
    //                     sendData['err'] = memberData;
    //                     sendData['ReturnMsg'] = "";
    //                     callback(sendData);
    //                 } else {
    //                     sendData['ReturnCode'] = 404;
    //                     sendData['err'] = 0;
    //                     sendData['ReturnMsg'] = "data is not found";
    //                     callback(sendData);
    //                 }
    //             }
    //         } else {
    //             sendData['ReturnCode'] = 201;
    //             sendData['err'] = 1;
    //             sendData['Data'] = [];
    //             sendData['ReturnMsg'] = "Your organization is not match"
    //             callback(sendData);
    //         }
    //     } else {
    //         sendData['ReturnCode'] = 201;
    //         sendData['err'] = 1;
    //         sendData['Data'] = [];
    //         sendData['ReturnMsg'] = "data not found"
    //         callback(sendData);
    //     }
    // },
    ORGANIZATION_MEMBER_UPDATE: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)
        var user_id = data.userData._id
        let today = new Date()
        let yesterday = addDaysToDate(today, -1)
        yesterday = new Date(new Date(new Date(new Date(yesterday.setHours(23)).setMinutes(59))).setSeconds(59))
        let today_day = new Date().getDay()
        let week_start_date = undefined;
        if (today_day == 0) { week_start_date = addDaysToDate(new Date(), -6) }
        else if (today_day == 1) { week_start_date = addDaysToDate(new Date(), 0) }
        else { week_start_date = addDaysToDate(new Date(), -(today_day - 1)) }
        week_start_date = new Date(new Date(new Date(new Date(week_start_date.setHours(00)).setMinutes(00))).setSeconds(00))

        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId)
        }
        var org_member = await organization_memberModal.find(conditions)

        if (org_member.length > 0) {

            org_member = org_member[0]

            org_member = JSON.parse(JSON.stringify(org_member))

            if (org_member.org_id == data.orgId) {
                var userId = data.userId

                var findcondition = {
                    _id: ObjectId(data._id),
                    org_id: ObjectId(data.orgId),
                }
                var memberData = await organization_memberModal.findOne(findcondition)
                // console.log("memberData>",memberData)
                let work_limit_daily_cond = {
                    user_id: ObjectId(memberData.user_id),
                    org_id: ObjectId(memberData.org_id),
                    created_at: { $gte: yesterday },
                }

                let work_limit_dailyUpdate = await work_limitModel.updateOne(work_limit_daily_cond, { daily_limit: data.daily_limit, weekly_limit: data.weekly_limit, updated_at : new Date(), }, { upsert: true })


                let work_limit_weekly_cond = {
                    user_id: ObjectId(memberData.user_id),
                    org_id: ObjectId(memberData.org_id),
                    $and: [
                        { created_at: { $gt: week_start_date } },
                        { created_at: { $lte: today } }
                    ]
                }
                let work_limit_weeklyUpdate = await work_limitModel.updateMany(work_limit_weekly_cond, { weekly_limit: data.weekly_limit, updated_at : new Date() })

                //team Member update
                if (data.team) {
                    var teamId = data.team
                    var role = data.role
                    var status = data.status
                    var deleteteam = {
                        org_id: ObjectId(memberData.org_id),
                        // team_id: ObjectId(teamId[i]),
                        user_id: ObjectId(memberData.user_id),
                    }
                    var datadelete = await team_memberModal.deleteMany(deleteteam);

                    for (i = 0; i < teamId.length; i++) {
                        organizationApiController.TEAM_CREATE(teamId[i], memberData.user_id, memberData.org_id, role, status, callback)
                    }
                }

                //projecr Member update
                if (data.project) {
                    var project = data.project
                    const role = data.role
                    var deleteproject = {
                        user_id: ObjectId(memberData.user_id),
                        org_id: ObjectId(memberData.org_id),
                    }

                    var datadelete = await project_MemberModel.deleteMany(deleteproject)
                    for (i = 0; i < project.length; i++) {

                        organizationApiController.MEMBER_CREATE(project[i], memberData.role, memberData.user_id, memberData.org_id, callback)

                    }
                }


                var condition = {
                    _id: ObjectId(data._id),
                    org_id: ObjectId(memberData.org_id)
                }
                delete data['userData']
                delete data['userId']

                var orgData = await organization_memberModal.updateOne(condition, data)
                sendData['Data'] = orgData
                callback(sendData)

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

    MEMBER_CREATE: async function (data, role, userId, org_id, callback) {

        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        const projectrole = (role == 1) || (role == 2) || (role == 3) || (role == 0) ? 0 : (role == 4) ? 1 : (role == 5) ? 2 : 3;
        console.log("role>>>", projectrole);

        if (data.length == 24) {
            var MemberData = {
                user_id: ObjectId(userId),
                project_id: ObjectId(data),
                org_id: ObjectId(org_id),

                role: projectrole,

                updated_at: new Date()
            }
            var Memberdata = await project_MemberModel.create(MemberData)
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Please valid projectId"
            callback(sendData);
        }
    },
    TEAM_CREATE: async function (data, userId, orgId, role, status, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        if (data.length == 24) {
            var MemberData = {
                user_id: ObjectId(userId),
                team_id: ObjectId(data),
                org_id: ObjectId(orgId),
                // role: role,
                // status: status,
                updated_at: new Date()
            }
            var Memberdata = await team_memberModal.create(MemberData)
        } else {
            sendData['ReturnCode'] = 201;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "Please valid teamId"
            callback(sendData);
        }
    },
    ORGANIZATION_MEMBER_DELETE: async function (data, callback) {
        //send data
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };
        //get userdata into variable
        console.log("data>>", data)
        var user_id = data.userData._id
        var conditions = {
            user_id: ObjectId(user_id),
            org_id: ObjectId(data.orgId),
            status: true,
        }

        var org_member = await organization_memberModal.find(conditions)
        console.log("org_member>", org_member)
        if (org_member.length > 0) {

            org_member = org_member[0]
            console.log("org_member>>", org_member)
            org_member = JSON.parse(JSON.stringify(org_member))
            console.log("org_member>>>", org_member)
            if (org_member.org_id == data.orgId) {

                var own_condition = {
                    org_id: ObjectId(data.orgId),
                    status: true,
                    role: 1
                }
                var arr_own = []
                var total_own = await organization_memberModal.find(own_condition).count();
                console.log("total_own>>>", total_own)
                var userId = data.userId

                for (i = 0; i < userId.length; i++) {

                    if (Object.keys(userId[i]).length == 24) {

                        var condition = { user_id: ObjectId(userId[i]), org_id: ObjectId(data.orgId), status: true }

                        var memberexist = await organization_memberModal.find(condition)
                        console.log("memberexist>>>", memberexist)
                        if (memberexist.length > 0) {
                            memberexist = memberexist[0]

                            if (org_member.role <= memberexist.role) {
                                if (memberexist.role != 1) {
                                    var findcondition = {
                                        user_id: ObjectId(userId[i]),
                                        org_id: ObjectId(data.orgId)
                                    }
                                    var member_Data1 = await organization_memberModal.findOneAndUpdate(findcondition, { "status": false })
                                    var projectConditions = {
                                        user_id: ObjectId(memberexist.user_id),
                                        org_id: ObjectId(data.orgId)
                                    }
                                    var projectData = await project_MemberModel.deleteMany(projectConditions)
                                    console.log("projectData>", projectData)
                                    //team member delete
                                    var teamCondition = {
                                        user_id: ObjectId(memberexist.user_id),
                                        org_id: ObjectId(data.orgId),
                                    }
                                    var teamData = await team_memberModal.deleteMany(teamCondition)
                                    console.log("teamData>", teamData)
                                } else {
                                    arr_own.push(userId[i]);
                                }

                                if (total_own == arr_own.length) {

                                    for (i = 0; i < (total_own - 1); i++) {
                                        var pro_cond = {
                                            user_id: ObjectId(arr_own[i]),
                                            org_id: ObjectId(data.orgId)
                                        }
                                        var member_Data = await organization_memberModal.findOneAndUpdate(pro_cond, { "status": false })
                                        console.log("member_Data>", member_Data)
                                        var pro_data = await project_MemberModel.deleteMany(pro_cond)
                                        var team_Data = await team_memberModal.deleteMany(pro_cond)
                                    }
                                    sendData['ReturnCode'] = 201;
                                    sendData['err'] = 1;
                                    sendData['Data'] = data.userId;
                                    sendData['ReturnMsg'] = "Last owner can not be removed"
                                    callback(sendData);
                                }
                                else if (arr_own.length < total_own) {

                                    for (i = 0; i < total_own; i++) {
                                        var pro_cond = {
                                            user_id: ObjectId(arr_own[i]),
                                            org_id: ObjectId(data.orgId)
                                        }
                                        var member_Data = await organization_memberModal.findOneAndUpdate(pro_cond, { "status": false })
                                        var pro_data = await project_MemberModel.deleteMany(pro_cond)
                                        var team_Data = await team_memberModal.deleteMany(pro_cond)
                                    }

                                    sendData['ReturnCode'] = 200;
                                    sendData['err'] = 0;
                                    sendData['Data'] = data.userId;
                                    sendData['ReturnMsg'] = "Members are removed"
                                    callback(sendData);
                                }
                            } else {
                                sendData['ReturnCode'] = 201;
                                sendData['err'] = 1;
                                sendData['Data'] = [];
                                sendData['ReturnMsg'] = "You can not remove your superior"
                                callback(sendData);

                            }
                        } else {
                            sendData['ReturnCode'] = 201;
                            sendData['err'] = 1;
                            sendData['Data'] = [];
                            sendData['ReturnMsg'] = "Member not exist"
                            callback(sendData);
                        }
                    }
                }
            }
            else {
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
    INVITE_PENDING: async function (data, callback) {
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
        var condition = [
            {
                $match: {
                    "user_id": ObjectId(user_id),
                    "invite_accpeted": false
                },
            },
            {
                $lookup: {
                    "from": "organization",
                    "as": "organizationData",
                    "localField": "org_id",
                    "foreignField": "_id",
                }
            },
            {
                $unwind: "$organizationData"
            },
            {
                $project: {
                    "_id": 1,
                    "organization_name": "$organizationData.organization_name",
                    "organization_id": "$organizationData._id"
                }
            }
        ];

        let org_member = await organization_memberModal.aggregate(condition);
        if (org_member && org_member.length > 0) {
            org_member = org_member.map((x) => {
                const payload = {
                    _id: x._id,
                    org_name: x.organization_name
                }
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                x.token = token;
                return x
            })
        }
        sendData['Data'] = org_member;
        sendData['ReturnCode'] = 200;
        callback(sendData)
    }
}
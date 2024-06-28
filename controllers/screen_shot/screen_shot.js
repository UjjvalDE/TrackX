const userModal = require("../../models/user/user");
const projectModal = require("../../models/project/project");
const todoModal = require("../../models/to_do/to_do");
const sessionModal = require("../../models/session/session");
const orgMemberModal = require("../../models/organization/organization_member");
const screenShotModal = require("../../models/screen_shot/screen_shot");

module.exports = {
    CREATE_SCREEN_SHOT: async function (data, callback) {
        let sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        const { ss_url, session_id, key_event, mouse_event, userData, task = [] } = data || {}
        const { _id } = userData || {}
        const condition = {
            user_id: ObjectId(_id)
        }

        const orgMemberData = await orgMemberModal.find(condition)

        if (orgMemberData && orgMemberData.length > 0) {
            const sessionData = await sessionModal.find({ _id: session_id })

            if (sessionData && sessionData.length > 0) {
                const screenShot = {
                    session_id,
                    ss_url,
                    key_event,
                    mouse_event,
                    task
                };
                screenShot.created_at = new Date()
                screenShot.updated_at = new Date()
                const data = await screenShotModal.create(screenShot)

                sendData['Data'] = data
                sendData["ReturnMsg"] = "Screen shot created successfully";
                callback(sendData);
            } else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "Session data not found";
                callback(sendData);
            }
        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Data not found";
            callback(sendData);
        }
    },

    GET_ONE_SCREEN_SHOT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        const { item_id, userData } = data || {}
        const { _id } = userData || {};

        const condition = {
            user_id: ObjectId(_id)
        }
        const orgMemberData = await orgMemberModal.find(condition)

        if (orgMemberData && orgMemberData.length > 0) {
            const screenShotCondition = {
                _id: item_id,
            };
            const screenShot = await screenShotModal.find(screenShotCondition);

            if (screenShot && screenShot.length > 0) {
                sendData['Data'] = screenShot
                sendData["ReturnMsg"] = "Screen shot item";
                callback(sendData);
            } else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "Screen shot not found";
                callback(sendData);
            }
        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Data not found";
            callback(sendData);
        }
    },
    GET_LAST_SCREEN_SHOT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        const { project_id, userData } = data || {}
        const { _id } = userData || {};

        const condition = {
            user_id: ObjectId(_id)
        }
        const orgMemberData = await orgMemberModal.find(condition)

        if (orgMemberData && orgMemberData.length > 0) {
            const sessionCondition = {
                project_id: ObjectId(project_id),
                user_id: ObjectId(_id)
            };
            const sscondition = [{ $match: { "user_id": ObjectId(_id), "project_id": ObjectId(project_id) } },
            {
                $lookup: {
                    "from": "screen_shot",
                    "foreignField": "session_id",
                    "localField": "_id",
                    "as": "screenshotData"
                }
            },
            { $unwind: "$screenshotData" },
            {
                $project: {
                    _id: 0,
                    ss_url: "$screenshotData.ss_url",
                    created_at: "$screenshotData.created_at"

                }
            },
            { $sort: { created_at: - 1 } },
            { $limit: 1 }
            ]
            const sessionData = await sessionModal.aggregate(sscondition);

            if (sessionData && sessionData.length > 0) {
                sendData['Data'] = {
                    "ss_url": sessionData[0].ss_url,
                    "created_at": sessionData[0].created_at
                }
                sendData["ReturnMsg"] = "Screen shot item";
                callback(sendData);
            } else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "Screen shot not found";
                callback(sendData);
            }
        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Data not found";
            callback(sendData);
        }
    },

    GET_SCREEN_SHOT_LIST_BY_SESSION: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: "",
        };

        const { session_id, userData } = data || {}
        const { _id } = userData || {};

        const condition = {
            user_id: ObjectId(_id)
        }
        const orgMemberData = await orgMemberModal.find(condition)

        if (orgMemberData && orgMemberData.length > 0) {
            const screenShotCondition = {
                session_id
            };
            const data = await screenShotModal.find(screenShotCondition);

            if (data && data.length > 0) {
                sendData['Data'] = data
                sendData["ReturnMsg"] = "Screen shot list";
                callback(sendData);
            } else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "Screen shots not found";
                callback(sendData);
            }
        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Data not found";
            callback(sendData);
        }
    },

    DELETE_SCREEN_SHOT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        let { ss_ids = [], userData, org_id } = data || {}
        const { _id } = userData || {};
        const orgMemberData = await orgMemberModal.findOne({ user_id: ObjectId(_id), org_id: ObjectId(org_id) })

        if (orgMemberData) {
            ss_ids = ss_ids.filter((x) => x && x.length === 24).map((y) => ObjectId(y))
            const ssDeleteData = await screenShotModal.deleteMany({ _id: { $in: ss_ids } });

            if (ssDeleteData && ssDeleteData.deletedCount > 0) {
                sendData["ReturnMsg"] = "Screen shot(s) deleted successfully";
                callback(sendData);
            } else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "Could not delete screen shot, please try again later";
                callback(sendData);
            }

        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Unauthorized access";
            callback(sendData);
        }
    },
    DELETE_ONE_SCREEN_SHOT: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        let { ss_id, userData } = data;
        const { _id } = userData || {};
        const orgMemberData = await orgMemberModal.findOne({ user_id: ObjectId(_id) })

        if (orgMemberData) {

            const ssDeleteData = await screenShotModal.deleteOne({ _id: { $eq: ss_id } });

            if (ssDeleteData && ssDeleteData.deletedCount > 0) {
                sendData["ReturnMsg"] = "Screen shot deleted successfully";
                callback(sendData);
            } else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "Could not delete screen shot, please try again later";
                callback(sendData);
            }

        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Unauthorized access";
            callback(sendData);
        }
    },
};

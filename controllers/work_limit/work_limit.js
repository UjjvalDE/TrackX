//models imported
const userModal = require("../../models/user/user");
const organizationModal = require("../../models/organization/organization");
const orgMemberModel = require("../../models/organization/organization_member");
// const sendInvitationModal = require('../../models/organization/invite_organization_member');
const projectModal = require("../../models/project/project");
const teamModal = require("../../models/team/team");
const team_projectModal = require("../../models/team/team_project");
const team_memberModal = require("../../models/team/team_member");
const project_MemberModel = require("../../models/project/project_member.js");
const sessionModel = require("../../models/session/session");
const work_limitModel = require("../../models/work_limit/work_limit");
const { formatTimeToHHMMSS, addDaysToDate, groupBy, GetTimeDifference } = require("../common");
const moment = require("moment/moment");


module.exports = {

    WORK_LIMIT: async function (data, callback) {
        console.log("data>>", data)
 
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: ""
        };

        const org_member_data = await orgMemberModel.find()

        const create_work_limitData = org_member_data.forEach(function (x) {
            //    let limit_data = work_limitModel.create({user_id: x.user_id, org_id: x.org_id, weekly_limit: x.weekly_limit, daily_limit: x.daily_limit, created_at: new Date("2023-01-22"), updated_at: new Date()})
            let limit_data = work_limitModel.create({ user_id: x.user_id, org_id: x.org_id, weekly_limit: x.weekly_limit, daily_limit: x.daily_limit, created_at: new Date(), updated_at: new Date() })
            return limit_data
        })
        console.log("create_work_limitData>", create_work_limitData)

        sendData['ReturnCode'] = 200;
        sendData['err'] = 0;
        sendData['Data'] = create_work_limitData;
        sendData['ReturnMsg'] = "Work_limit created";
        callback(sendData);

    },
}
const orgMemberModel = require('../models/organization/organization_member');
const work_limitModel = require("../models/work_limit/work_limit");

let time = Object.freeze({hour: 00, minute: 05, tz: "IST"})

const job = schedule.scheduleJob(time, async function(){

    const org_member_data = await orgMemberModel.find()

    const create_work_limitData = org_member_data.forEach(async function (x) {
        let limit_data = await work_limitModel.create({user_id: x.user_id, org_id: x.org_id, weekly_limit: x.weekly_limit, daily_limit: x.daily_limit, created_at: new Date(), updated_at: new Date()})
    } )
  });

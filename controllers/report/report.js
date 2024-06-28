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

function getMinutes(dt1, dt2) {
  minuteArray = [];
  let res1 = {}
  let res3 = {}

  // hours*minutes*seconds*milliseconds
  var oneDay = 24 * 60 * 60 * 1000;
  startHours = (24 - dt1.getHours())
  if (dt1.getMinutes() > 0) startHours--;

  // Calculate Minutes for start date
  startDayMin = startHours * 60 + (60 - dt1.getMinutes());
  res1.diff = startDayMin * 60
  res1.date = moment(dt1).format('YYYY-MM-DD')
  minuteArray.push(res1);

  var diffDays = Math.round(Math.abs((dt1.getTime() - dt2.getTime()) / (oneDay))) - 1; //Calculate number of days

  for (i = 0; i < diffDays; i++) {
    let res2 = {}
    //Push minutes for number of days
    res2.diff = 1440 * 60
    const date = addDaysToDate(dt1, i + 1)
    res2.date = moment(date).format('YYYY-MM-DD')
    minuteArray.push(res2);
  }
  if (diffDays >= 0) {
    // Calculate Minutes for end date
    endDayMin = (dt2.getHours() * 60) + dt2.getMinutes();
    res3.diff = endDayMin * 60
    res3.date = moment(dt2).format('YYYY-MM-DD')
    minuteArray.push(res3)
  }
  return minuteArray;
}

const scr_shot_rawData = (data) => {
  if (!data && data.length === 0) return []
  let ssData = []
  data.forEach((x) => {
    if (x.shots.length > 0) {
      let last_ss_time = undefined
      x.shots.forEach((y, i) => {
        let ssItem = { ...x, session_id: x._id }
        ssItem.project_name = x.projects.length > 0 && x.projects[0].name ? x.projects[0].name : "";
        ssItem.todo_name = x.todos.length > 0 && x.todos[0].title ? x.todos[0].title : "";
        ssItem.userId = x.users.length > 0 && x.users[0]._id ? x.users[0]._id : "";
        ssItem.user_name = x.users.length > 0 && x.users[0].name ? x.users[0].name : "";
        ssItem.user_profile_img = x.users.length > 0 && x.users[0].profile_img ? x.users[0].profile_img : "";
        ssItem.ss_id = y._id;
        ssItem.ss_url = y.ss_url;
        ssItem.key_event = y.key_event;
        ssItem.mouse_event = y.mouse_event;
        ssItem.ss_created_at = y.created_at;
        ssItem.task = y.task;
        ssItem.tracked = GetTimeDifference(last_ss_time || x.start_time, y.created_at)
        if (i === x.shots.length - 1) {
          const extraTime = GetTimeDifference(y.created_at, x.end_time || new Date())
          ssItem.tracked += extraTime
        }
        last_ss_time = y.created_at
        ssItem.activity = parseInt(((ssItem.key_event + ssItem.mouse_event) / 500) * 100);
        ssItem.activity = ssItem.activity > 100 ? 100 : ssItem.activity
        ssItem.date = moment(y.created_at).format('YYYY-MM-DD')
        ssItem.hourTime = moment(ssItem.ss_created_at || x.start_time).format("ddd, MMM DD YYYY")
        // ssItem.hourTime_ = moment(ssItem.ss_created_at || x.start_time).format("HH")
        delete ssItem._id
        delete ssItem.todos
        delete ssItem.shots
        delete ssItem.users
        delete ssItem.projects
        delete ssItem.__v
        ssData.push(ssItem)
      })
    } else {
      delete x
      // let ssItem = { ...x, session_id: x._id }
      // ssItem.project_name = x.projects.length > 0 && x.projects[0].name ? x.projects[0].name : "";
      // ssItem.todo_name = x.todos.length > 0 && x.todos[0].title ? x.todos[0].title : "";
      // ssItem.user_name = x.users.length > 0 && x.users[0].name ? x.users[0].name : "";
      // ssItem.user_profile_img = x.users.length > 0 && x.users[0].profile_img ? x.users[0].profile_img : "";
      // ssItem.task = [];
      // ssItem.tracked = GetTimeDifference(x.start_time, x.end_time || new Date());
      // ssItem.activity = 0;
      // ssItem.date = moment(x.start_time).format('YYYY-MM-DD')
      // ssItem.hourTime = moment(x.start_time).format('HH')
      // delete ssItem._id
      // delete ssItem.todos
      // delete ssItem.shots
      // delete ssItem.users
      // delete ssItem.projects
      // delete ssItem.__v
      // ssData.push(ssItem)
    }
  })
  return ssData
}


module.exports = {

  GET_WEEK_REPORT: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    let { userData, org_id, start_date, end_date, projects = [], members = [], tab_type = "Me" } = data || {}
    let { _id: user_id } = userData || {}

    start_date = new Date(start_date);
    end_date = addDaysToDate(new Date(end_date), 1);
    let get_date = new Date(data.end_date)
    const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
    const now = new Date();
    org_id = ObjectId(org_id)
    user_id = ObjectId(user_id)
    tab_type = tab_type.trim().toLowerCase();
    const today = new Date();

    const orgMember = await orgMemberModel.findOne({ user_id, org_id });
    if (orgMember) {
      if (tab_type === "me") members = [user_id]

      let sessionCond = {
        $and: [
          { org_id: ObjectId(org_id) },
          { $and: [{ start_time: { $gte: start_date } }, { start_time: { $lt: end_date } }] },
          { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
        ]
      }

      if (projects.length > 0) {
        projects = projects.filter((x) => x).map((x) => ObjectId(x))
        sessionCond.project_id = { $in: projects }
      }
      if (members.length > 0) {
        members = members.filter((x) => x).map((x) => ObjectId(x))
        sessionCond.user_id = { $in: members }
      }

      const ssCond = [
        {
          $lookup: {
            from: "screen_shot",
            localField: "_id",
            foreignField: "session_id",
            as: "shots",
          },
        },
        {
          $lookup: {
            from: "project",
            let: { p_id: "$project_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$p_id"] }, }, },
              { $project: { _id: 0, name: "$name", }, },
            ],
            as: "projects",
          },
        },
        { $unwind: "$projects" },
        {
          $lookup: {
            from: "user",
            let: { u_id: "$user_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$u_id"] }, }, },
              { $project: { _id: 0, name: "$name", profile_img: "$profile_img" }, },
            ],
            as: "users",
          },
        },
        { $unwind: "$users" },
        { $project: { _id: 0, }, },
      ]

      let sessions = await sessionModel.aggregate([
        { $match: sessionCond }, ...ssCond
      ])

      for (i = 0; i < sessions.length; i++) {
        if (sessions[i].end_time == null) {
          if ((now - last_date) < 0) { sessions[i].end_time = now }
          else { sessions[i].end_time = last_date }
        }
      }

      sessions = sessions.map((x) => {
        let times = []
        if (moment(x.start_time).format('YYYY-MM-DD') === moment(x.end_time).format('YYYY-MM-DD')) {
          let res = {}
          res.diff = GetTimeDifference(x.start_time, x.end_time)
          res.date = moment(x.start_time).format('YYYY-MM-DD')
          times.push(res)
        } else times = getMinutes(x.start_time, x.end_time)

        times = times.map((y) => {
          let data = {
            tracked: y.diff,
            date: y.date,
            ...x
          }
          data.shots = data.shots.filter((z) => moment(z.created_at).format('YYYY-MM-DD') === y.date)
          data.shots = data.shots.map((z) => {
            z.activity = parseInt((((z.key_event || 0) + (z.mouse_event || 0)) / 500) * 100)
            return z
          })
          data.activity = parseInt((data.shots.reduce((sum, val) => sum + parseInt((val && val.activity) || 0), 0) / data.shots.length)) || 0;
          return data
        })
        return times
      })

      let finalData = []
      sessions.forEach((x) => {
        x.forEach((y) => {
          y.project_name = y.projects.name
          y.user_name = y.users.name
          y.profile_img = y.users.profile_img
          delete y.shots
          delete y.start_time
          delete y.end_time
          delete y.created_at
          delete y.updated_at
          delete y.__v
          delete y.projects
          delete y.users
          finalData.push(y)
        })
      })

      let data = []
      let benchmarks = {}
      benchmarks.avg_activity = 0
      if (tab_type === 'me') benchmarks.avg_hours_per_day = 0
      if (tab_type === 'all') benchmarks.avg_hours_per_member = 0
      if (tab_type === 'me') data = groupBy(finalData, "project_name", "project", "data")
      else if (tab_type === 'all') data = groupBy(finalData, "user_name", "member", "data")

      let chart_data = [];
      chart_data = groupBy(finalData, "date", "date", "group_data")

      for (i = 0; i < chart_data.length; i++) {
        var total_diff = 0;
        for (j = 0; j < chart_data[i].group_data.length; j++) {
          total_diff = total_diff + chart_data[i].group_data[j].tracked
        }
        chart_data[i].total_sec = total_diff;
        total_diff = (total_diff / 3600) || 0;
        total_diff = total_diff.toFixed(2);
        chart_data[i].total_time = total_diff;
        delete chart_data[i].group_data
      }

      data = data.map((x) => {
        x.weekly_tracked = 0
        x.weekly_activity = 0
        x.report_data = groupBy(x.data, "date", "date", "date_data")
        x.report_data = x.report_data.map((y) => {
          const tracked = y.date_data.reduce((sum, val) => sum + val.tracked, 0)
          const activity = parseInt(y.date_data.reduce((sum, val) => sum + val.activity, 0) / y.date_data.length)
          x.weekly_tracked += tracked
          x.weekly_activity += activity
          return {
            ...y.date_data[0],
            tracked: formatTimeToHHMMSS(tracked),
            activity
          }
        })
        if (tab_type === 'me') benchmarks.avg_hours_per_day += x.weekly_tracked
        else if (tab_type === 'all') benchmarks.avg_hours_per_member += x.weekly_tracked

        x.weekly_sec = x.weekly_tracked
        x.weekly_tracked = formatTimeToHHMMSS(x.weekly_tracked)
        if (x.report_data.length > 0) x.weekly_activity = parseInt(x.weekly_activity / x.report_data.length)
        x.report_data.forEach((y) => {
          x[y.date] = y.tracked
        })

        x.profile_img = x.data[0].profile_img
        delete x.data
        delete x.report_data
        return x
      })

      if (tab_type === 'me') benchmarks.projects_worked = data.length
      else if (tab_type === 'all') benchmarks.members_worked = data.length
      if (tab_type === 'me') benchmarks.avg_hours_per_day = formatTimeToHHMMSS((benchmarks.avg_hours_per_day || 0) / GetTimeDifference(start_date, end_date, 'day'))
      else if (tab_type === 'all') benchmarks.avg_hours_per_member = formatTimeToHHMMSS((benchmarks.avg_hours_per_member || 0) / data.length)
      if (data.length > 0) benchmarks.avg_activity = parseInt(data.reduce((sum, val) => sum + val.weekly_activity, 0) / data.length)

      const res = {
        benchmarks,
        report_data: data,
        chart_data
      }
      sendData['Data'] = res
      sendData["ReturnMsg"] = `${tab_type} weekly report`;
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 401
      sendData["err"] = 1;
      sendData["ReturnMsg"] = "Unauthorized access";
      callback(sendData);
    }
  },
  TIME_ACTIVITY_REPORT: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    let { user_id, org_id, project_id = [], todo_id = [], client_id = [], member_id = [] } = data || {};

    let tab_type = data.tab_type.trim().toLowerCase()
    let get_date = new Date(data.end_date)
    const start_date = new Date(data.start_date);
    const end_date1 = new Date(data.end_date);
    const end_date = new Date(end_date1.setDate(end_date1.getDate() + 1));
    const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
    const now = new Date();

    let org_member = await orgMemberModel.findOne({ user_id: ObjectId(user_id), org_id: ObjectId(org_id) })

    if (org_member) {

      var match_condition = {
        $and: [
          { org_id: ObjectId(org_id) },
          { $and: [{ $or: [{ start_time: { $gte: start_date } }, { end_time: { $gte: start_date } }, { end_time: null }] }, { start_time: { $lt: end_date } }] },
          // { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
        ]
      }
      if (data.tab_type == "Me") { match_condition.user_id = ObjectId(user_id) }

      if (project_id && project_id.length > 0) {
        project_id = project_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.project_id = { $in: project_id };
      }

      if (data.tab_type == "All" && member_id && member_id.length > 0) {
        member_id = member_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.user_id = { $in: member_id };
      }

      if (todo_id && todo_id.length > 0) {
        todo_id = todo_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.todo_id = { $in: todo_id };
      }

      console.log("match_condition>>>", match_condition)

      if (client_id && client_id.length > 0) {
        client_id = client_id.filter((x) => x).map((x) => ObjectId(x))

        var client_aggre = {};
        client_aggre.client_id = { $in: client_id };

        console.log("client_aggre>", client_aggre)
        var session_aggre = [
          {
            $match: match_condition
          },
          {
            $lookup: {
              from: "project",
              localField: "project_id",
              foreignField: "_id",
              as: "projectdata",
            }
          },
          { $unwind: "$projectdata" },
          {
            $lookup: {
              from: "client",
              localField: "projectdata.client_id",
              foreignField: "_id",
              as: "clientdata"
            }
          },
          { $unwind: { path: "$clientdata", preserveNullAndEmptyArrays: true } },
          {
            $project: {
              _id: 1,
              user_id: 1,
              org_id: 1,
              todo_id: 1,
              start_time: 1,
              created_at: 1,
              end_time: 1,
              updated_at: 1,
              client_id: "$projectdata.client_id",
              client_name: "$clientdata.name",
              project_name: "$projectdata.name",
            }
          },
          { $match: client_aggre },
          {
            $lookup: {
              from: "user",
              localField: "user_id",
              foreignField: "_id",
              as: "userdata",
            },
          },
          { $unwind: "$userdata" },
          {
            $lookup: {
              from: "to_do",
              localField: "todo_id",
              foreignField: "_id",
              as: "tododata",
            },
          },
          { $unwind: { path: "$tododata", preserveNullAndEmptyArrays: true } },
          {
            $lookup: {
              from: "screen_shot",
              localField: "_id",
              foreignField: "session_id",
              as: "screen_shotdata",
            }
          },
          {
            $project: {
              _id: 1,
              start_time: 1,
              created_at: 1,
              end_time: 1,
              updated_at: 1,
              project_name: 1,
              user_name: "$userdata.name",
              user_pro_img: "$userdata.profile_img",
              todo_title: "$tododata.title",
              client_name: 1,
              int_sec: 1,
              screen_shotdata: 1,
            }
          }
        ]
      }
      else {
        var session_aggre = [
          {
            $match: match_condition
          },

          {
            $lookup: {
              from: "project",
              localField: "project_id",
              foreignField: "_id",
              as: "projectdata",
            },
          },
          { $unwind: "$projectdata" },

          {
            $lookup: {
              from: "user",
              localField: "user_id",
              foreignField: "_id",
              as: "userdata",
            },
          },
          { $unwind: "$userdata" },

          {
            $lookup: {
              from: "to_do",
              localField: "todo_id",
              foreignField: "_id",
              as: "tododata",
            },
          },
          { $unwind: { path: "$tododata", preserveNullAndEmptyArrays: true } },

          {
            $lookup: {
              from: "client",
              localField: "projectdata.client_id",
              foreignField: "_id",
              as: "clientdata"
            }
          },
          { $unwind: { path: "$clientdata", preserveNullAndEmptyArrays: true } },
          {
            $lookup: {
              from: "screen_shot",
              localField: "_id",
              foreignField: "session_id",
              as: "screen_shotdata",
            }
          },
          {
            $project: {
              _id: 1,
              start_time: 1,
              created_at: 1,
              end_time: 1,
              updated_at: 1,
              project_name: "$projectdata.name",
              user_name: "$userdata.name",
              user_pro_img: "$userdata.profile_img",
              todo_title: "$tododata.title",
              client_name: "$clientdata.name",
              screen_shotdata: 1,
            }
          }
        ];
      }
      var session_data = await sessionModel.aggregate(session_aggre);

      // console.log("session_data>", session_data)
      for (i = 0; i < session_data.length; i++) {
        if (session_data[i].end_time == null) {
          if ((now - last_date) < 0) { session_data[i].end_time = now }
          else { session_data[i].end_time = last_date }
        }
      }
      // console.log("session_data>", session_data)

      let sessions = session_data.map((x) => {
        let times = []
        if (moment(x.start_time).format('YYYY-MM-DD') === moment(x.end_time).format('YYYY-MM-DD')) {
          let res = {}
          res.diff = GetTimeDifference(x.start_time, x.end_time)
          res.date = moment(x.start_time).format('YYYY-MM-DD')
          times.push(res)
        } else times = getMinutes(x.start_time, x.end_time)
        // console.log('times', times);
        // x.times = times
        times = times.map((y) => {
          let data = {
            /*diff: y.diff*/
            total_seconds: y.diff,
            date: y.date,
            ...x
          }
          data.screen_shotdata = data.screen_shotdata.filter((z) => moment(z.created_at).format('YYYY-MM-DD') === y.date)
          data.screen_shotdata = data.screen_shotdata.map((z) => {
            // z.keyboard = parseInt(((z.key_event || 0) / 300) * 100)
            // z.mouse = parseInt(((z.mouse_event || 0) / 200) * 100)
            z.activity = parseInt((((z.key_event || 0) + (z.mouse_event || 0)) / 500) * 100)
            return z
          })
          data.activity = parseInt((data.screen_shotdata.reduce((sum, val) => sum + parseInt((val && val.activity) || 0), 0) / data.screen_shotdata.length)) || 0;
          return data
        })
        // console.log('times', times);
        return times
      })
      let finalData = []
      sessions.forEach((x) => {
        x.forEach((y) => {
          delete y.screen_shotdata
          delete y.start_time
          delete y.end_time
          delete y.created_at
          delete y.updated_at
          delete y.__v
          /* y.sess_time = formatTimeToHHMMSS((y.diff || 0)) */
          y.sess_time = formatTimeToHHMMSS((y.total_seconds || 0))
          finalData.push(y)
        })
      })

      if (finalData) {
        var total_sec = 0;
        var total_activity = 0;

        for (i = 0; i < finalData.length; i++) {
          if (new Date(finalData[i].date) < start_date || new Date(finalData[i].date) > last_date) delete finalData[i]
          else {
            total_activity = total_activity + finalData[i].activity
            /* total_sec = total_sec + finalData[i].diff */
            total_sec = total_sec + finalData[i].total_seconds
          }
        }
        finalData = finalData.filter((x) => x)
        var avg_activity = (total_activity / (finalData.length || 1));
        avg_activity = avg_activity.toFixed(2);
        var total_time = commonController.formatTimeToHHMMSS(total_sec, isHr = true, isMin = true, isSec = true)
      }

      for (i = 0; i < (finalData.length - 1); i++) {
        var activity = 0;
        var session_time = 0;

        if (finalData[i]) {
          var k = 1;
          for (j = i + 1; j < (finalData.length); j++) {
            if (
              finalData[j] &&
              (finalData[i].date == finalData[j].date) &&
              (finalData[i].project_name == finalData[j].project_name) &&
              (finalData[i].user_name == finalData[j].user_name) &&
              (finalData[i].user_pro_img == finalData[j].user_pro_img) &&
              (finalData[i].client_name == finalData[j].client_name) &&
              (finalData[i].todo_title == finalData[j].todo_title)) {
              k++;
              activity = activity + finalData[j].activity
              session_time = session_time + finalData[j].total_seconds
              delete finalData[j];
            }
          }
          var activity_final = ((finalData[i].activity + activity) / k);
          finalData[i].activity = activity_final;
          finalData[i].total_seconds = finalData[i].total_seconds + session_time;
          var sum_time = commonController.formatTimeToHHMMSS(finalData[i].total_seconds, isHr = true, isMin = true, isSec = true)
          finalData[i].sess_time = sum_time;
        }
      }

      finalData = finalData.filter((x) => x).map((x) => x);

      for (i = 0; i < finalData.length; i++) {
        if (!finalData[i].client_name) finalData[i].client_name = "No client"
        if (!finalData[i].todo_title) finalData[i].todo_title = "No to-do"
      }

      let groupBy_Date = []
      groupBy_Date = groupBy(finalData, "date", "date", "group_data")

      for (i = 0; i < groupBy_Date.length; i++) {
        var total_diff = 0;
        for (j = 0; j < groupBy_Date[i].group_data.length; j++) {
          total_diff = total_diff + groupBy_Date[i].group_data[j].total_seconds
        }
        groupBy_Date[i].total_sec = total_diff;
        total_diff = (total_diff / 3600) || 0;
        total_diff = total_diff.toFixed(2);
        groupBy_Date[i].total_time = total_diff;
        delete groupBy_Date[i].group_data
      }

      if (finalData) {
        const result = {
          activties: {
            total_time: total_time,
            avg_activity: avg_activity + "%"
          },
          report_data: finalData,
          chart_data: groupBy_Date,
        }

        sendData["ReturnCode"] = 200;
        sendData["err"] = 0;
        sendData["Data"] = result
        sendData["ReturnMsg"] = "Time & Activity report generated";
        callback(sendData);
      } else {
        sendData["ReturnCode"] = 200;
        sendData["err"] = 1;
        sendData["Data"] = [];
        sendData["ReturnMsg"] = "Organization not found";
        callback(sendData);
      }
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "You are not a member of this organization";
      callback(sendData);
    }
  },
  WEEKLY_LIMIT_REPORT: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    let { user_id, org_id, project_id = [], todo_id = [], client_id = [], member_id = [], group_by = "" } = data || {};

    let tab_type = data.tab_type.trim().toLowerCase();
    if (data.groupBy) group_by = group_by.trim().toLowerCase();
    group_by = group_by.trim().toLowerCase();
    let get_date = new Date(data.end_date);
    const start_date = new Date(data.start_date);
    const end_date1 = new Date(data.end_date);
    const end_date = new Date(end_date1.setDate(end_date1.getDate() + 1));
    const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
    const now = new Date();

    let org_member = await orgMemberModel.findOne({ user_id: ObjectId(user_id), org_id: ObjectId(org_id) })

    if (org_member) {

      var match_condition = {
        $and: [
          { org_id: ObjectId(org_id) },
          { $and: [{ $or: [{ start_time: { $gte: start_date } }, { end_time: { $gte: start_date } }, { end_time: null }] }, { start_time: { $lt: end_date } }] },
          // { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
        ]
      }
      if (tab_type == "me") { match_condition.user_id = ObjectId(user_id) }

      // if (project_id && project_id.length > 0) {
      //   project_id = project_id.filter((x) => x).map((x) => ObjectId(x))
      //   match_condition.project_id = { $in: project_id };
      // }

      if (tab_type == "all" && member_id && member_id.length > 0) {
        member_id = member_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.user_id = { $in: member_id };
      }

      // if (todo_id && todo_id.length > 0) {
      //   todo_id = todo_id.filter((x) => x).map((x) => ObjectId(x))
      //   match_condition.todo_id = { $in: todo_id };
      // }

      console.log("match_condition>>>", match_condition)

      var session_aggre = [
        {
          $match: match_condition
        },

        {
          $lookup: {
            from: "project",
            localField: "project_id",
            foreignField: "_id",
            as: "projectdata",
          },
        },
        { $unwind: "$projectdata" },

        {
          $lookup: {
            from: "user",
            localField: "user_id",
            foreignField: "_id",
            as: "userdata",
          },
        },
        { $unwind: "$userdata" },
        {
          $lookup: {
            from: "organization_member",
            let: { "u_id": "$user_id", },
            as: "org_memberdata",
            pipeline: [
              {
                $match:
                {
                  $expr:
                  {
                    $and: [
                      { $eq: ["$user_id", "$$u_id"] },
                      { $eq: ["$org_id", ObjectId(org_id)] },
                    ]
                  }
                }
              }
            ]
          }
        },
        { $unwind: "$org_memberdata" },
        {
          $lookup: {
            from: "to_do",
            localField: "todo_id",
            foreignField: "_id",
            as: "tododata",
          },
        },
        { $unwind: { path: "$tododata", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "client",
            localField: "projectdata.client_id",
            foreignField: "_id",
            as: "clientdata"
          }
        },
        { $unwind: { path: "$clientdata", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "screen_shot",
            localField: "_id",
            foreignField: "session_id",
            as: "screen_shotdata",
          }
        },
        {
          $project: {
            _id: 0,
            sess_id: "$_id",
            start_time: 1,
            created_at: 1,
            end_time: 1,
            updated_at: 1,
            project_name: "$projectdata.name",
            user_id: "$userdata._id",
            user_name: "$userdata.name",
            profile_img: "$userdata.profile_img",
            // todo_title: "$tododata.title",
            todo_title: {
              $cond: {
                if: "$tododata",
                then: "$tododata.title",
                else: "No to-do",
              }
            },
            // client_name: "$clientdata.name",
            client_name: {
              $cond: {
                if: "$clientdata",
                then: "$clientdata.name",
                else: "No client",
              }
            },
            screen_shotdata: 1,
          }
        }
      ];

      var session_data = await sessionModel.aggregate(session_aggre);
      // console.log("session_data>", session_data)

      if (session_data.length > 0) {

        for (i = 0; i < session_data.length; i++) {
          if (session_data[i].end_time == null) {
            if ((now - last_date) < 0) { session_data[i].end_time = now }
            else { session_data[i].end_time = last_date }
          }
        }
        // console.log("session_data>", session_data)

        let sessions = session_data.map((x) => {
          let times = []
          if (moment(x.start_time).format('YYYY-MM-DD') === moment(x.end_time).format('YYYY-MM-DD')) {
            let res = {}
            res.diff = GetTimeDifference(x.start_time, x.end_time)
            res.date = moment(x.start_time).format('YYYY-MM-DD')
            times.push(res)
          } else times = getMinutes(x.start_time, x.end_time)
          // console.log('times', times);
          // x.times = times
          times = times.map((y) => {
            let data = {
              /*diff: y.diff*/
              total_seconds: y.diff,
              date: y.date,
              ...x
            }
            data.screen_shotdata = data.screen_shotdata.filter((z) => moment(z.created_at).format('YYYY-MM-DD') === y.date)
            data.screen_shotdata = data.screen_shotdata.map((z) => {
              // z.keyboard = parseInt(((z.key_event || 0) / 300) * 100)
              // z.mouse = parseInt(((z.mouse_event || 0) / 200) * 100)
              // z.activity = parseInt((((z.key_event || 0) + (z.mouse_event || 0)) / 500) * 100)
              return z
            })
            // data.activity = parseInt((data.screen_shotdata.reduce((sum, val) => sum + parseInt((val && val.activity) || 0), 0) / data.screen_shotdata.length)) || 0;
            return data
          })
          // console.log('times', times);
          return times
        })
        let finalData = []
        sessions.forEach((x) => {
          x.forEach((y) => {
            delete y.screen_shotdata
            delete y.start_time
            delete y.end_time
            delete y.created_at
            delete y.updated_at
            delete y.__v
            /* y.sess_time = formatTimeToHHMMSS((y.diff || 0)) */
            y.sess_time = formatTimeToHHMMSS((y.total_seconds || 0))
            finalData.push(y)
          })
        })

        // console.log("finalData>", finalData)
        // let check_data = [];
        if (finalData) {

          var total_sec = 0;
          var total_activity = 0;

          for (i = 0; i < finalData.length; i++) {
            // total_activity = total_activity + finalData[i].activity
            /* total_sec = total_sec + finalData[i].diff */
            total_sec = total_sec + finalData[i].total_seconds

            if (new Date(finalData[i].date) < start_date || new Date(finalData[i].date) > last_date) delete finalData[i]
            else {

              let week_start = finalData[i].date
              week_start = new Date(week_start)
              let dayof_week_start = new Date(week_start).getDay()
              let week_start_date = undefined;
              if (dayof_week_start == 0) { week_start_date = addDaysToDate(week_start, -6) }
              else if (dayof_week_start == 1) { week_start_date = addDaysToDate(week_start, 0) }
              else { week_start_date = addDaysToDate(week_start, -(dayof_week_start - 1)) }
              let week_end_date = addDaysToDate(week_start_date, 6)

              week_start_date = moment(week_start_date).format("ddd, MMM DD, yyyy")
              week_end_date = moment(week_end_date).format("ddd, MMM DD, yyyy")
              finalData[i].week_date = `${week_start_date} to ${week_end_date}`

            }
          }

          // var avg_activity = (total_activity / (finalData.length || 1));
          // avg_activity = avg_activity.toFixed(2);
          // var total_time = commonController.formatTimeToHHMMSS(total_sec, isHr = true, isMin = true, isSec = true)


          for (i = 0; i < (finalData.length - 1); i++) {
            var activity = 0;
            var session_time = 0;

            if (finalData[i]) {
              var k = 1;
              for (j = i + 1; j < (finalData.length); j++) {
                if (
                  finalData[j] &&
                  (finalData[i].week_date == finalData[j].week_date) &&
                  (finalData[i].user_id.toString() == finalData[j].user_id.toString())) {
                  // k++;
                  // console.log("kkk",k)
                  // activity = activity + finalData[j].activity
                  session_time = session_time + finalData[j].total_seconds
                  delete finalData[j];
                }
              }
              // var activity_final = ((finalData[i].activity + activity) / k);
              // finalData[i].activity = activity_final;
              finalData[i].weekly_time_spent_sec = finalData[i].total_seconds + session_time;
              var sum_time = commonController.formatTimeToHHMMSS(finalData[i].weekly_time_spent_sec, isHr = true, isMin = true, isSec = true)
              finalData[i].weekly_time_spent = sum_time;
              let session_date = new Date(finalData[i].date)
              let session_date_endTime = new Date(new Date(new Date(new Date(new Date(finalData[i].date).setHours(23)).setMinutes(59))).setSeconds(59))
              let weekly_limit_find = {
                user_id: finalData[i].user_id,
                org_id: ObjectId(org_id),
                $and: [
                  { created_at: { $gte: session_date } },
                  { created_at: { $lt: session_date_endTime } }
                ]
              }

              let find_limit = await work_limitModel.findOne(weekly_limit_find)
              // console.log("find_limit>", find_limit)
              if (find_limit) {
                let user_weekly_limit = find_limit.weekly_limit || 0;
                finalData[i].user_weekly_limit = user_weekly_limit

                if (user_weekly_limit > 0) {
                  let weekly_limit_sec = user_weekly_limit * 3600;
                  let percentage_used = (finalData[i].weekly_time_spent_sec / weekly_limit_sec) * 100;
                  finalData[i].percentage_used = percentage_used.toFixed(2)
                  let remain_sec = weekly_limit_sec - finalData[i].weekly_time_spent_sec
                  // dataBy_week[i].dataBy_member[j].percentage_used = (percentage_used < 100) ? percentage_used.toFixed(2) : "100";
                  finalData[i].remaining_sec = remain_sec
                  // finalData[i].remaining = (remain_sec > 0) ? formatTimeToHHMMSS((remain_sec)) : 0;
                  finalData[i].remaining = ((remain_sec > 0) ? "" : "-") + formatTimeToHHMMSS((remain_sec))
                  delete finalData[i].total_seconds
                  delete finalData[i].date
                  // delete finalData[i]._id
                  delete finalData[i].project_name
                  delete finalData[i].todo_title
                  delete finalData[i].client_name
                  delete finalData[i].sess_time
                } else {
                  delete finalData[i]
                }
              } else {
                delete finalData[i]
              }

            }
          }

          finalData = finalData.filter((x) => x);
        }

        if (finalData.length > 0) {
          console.log("Data get successfully")
          sendData["ReturnCode"] = 200;
          sendData["err"] = 0;
          sendData["Data"] = finalData
          sendData["ReturnMsg"] = "Data get successfully";
          callback(sendData);
        } else {
          sendData["ReturnCode"] = 200;
          sendData["err"] = 1;
          sendData["Data"] = [];
          sendData["ReturnMsg"] = "Data not found";
          callback(sendData);
        }
      } else {
        sendData["ReturnCode"] = 200;
        sendData["err"] = 1;
        sendData["Data"] = [];
        sendData["ReturnMsg"] = "Data not found";
        callback(sendData);
      }
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "You are not member of this organization";
      callback(sendData);
    }
  },
  WORK_SESSION_REPORT: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    let { user_id, org_id, project_id = [], todo_id = [], client_id = [], member_id = [] } = data || {};

    let tab_type = data.tab_type.trim().toLowerCase();
    let get_date = new Date(data.end_date);
    const start_date = new Date(data.start_date);
    const end_date1 = new Date(data.end_date);
    const end_date = new Date(end_date1.setDate(end_date1.getDate() + 1));
    const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
    const now = new Date();

    let org_member = await orgMemberModel.findOne({ user_id: ObjectId(user_id), org_id: ObjectId(org_id) })

    if (org_member) {

      var match_condition = {
        $and: [
          { org_id: ObjectId(org_id) },
          { $and: [{ $or: [{ start_time: { $gte: start_date } }, { end_time: { $gte: start_date } }] }, { start_time: { $lt: end_date } }, { end_time: { $not: { $eq: null } } }] },
          // { $and: [{ $or: [{ start_time: { $gte: start_date } }, { end_time: { $gte: start_date } }, { end_time: null }] }, { start_time: { $lt: end_date } }] },
          // { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
        ]
      }
      if (tab_type == "me") { match_condition.user_id = ObjectId(user_id) }

      if (project_id && project_id.length > 0) {
        project_id = project_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.project_id = { $in: project_id };
      }

      if (tab_type == "all" && member_id && member_id.length > 0) {
        member_id = member_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.user_id = { $in: member_id };
      }

      if (todo_id && todo_id.length > 0) {
        todo_id = todo_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.todo_id = { $in: todo_id };
      }

      console.log("match_condition>>>", match_condition)

      if (client_id && client_id.length > 0) {
        client_id = client_id.filter((x) => x).map((x) => ObjectId(x))

        var client_aggre = {};
        client_aggre.client_id = { $in: client_id };

        console.log("client_aggre>", client_aggre)
        var session_aggre = [
          {
            $match: match_condition
          },
          {
            $lookup: {
              from: "project",
              localField: "project_id",
              foreignField: "_id",
              as: "projectdata",
            }
          },
          { $unwind: "$projectdata" },
          {
            $lookup: {
              from: "client",
              localField: "projectdata.client_id",
              foreignField: "_id",
              as: "clientdata"
            }
          },
          { $unwind: { path: "$clientdata", preserveNullAndEmptyArrays: true } },
          {
            $project: {
              _id: 1,
              user_id: 1,
              org_id: 1,
              todo_id: 1,
              start_time: 1,
              created_at: 1,
              end_time: 1,
              updated_at: 1,
              client_id: "$projectdata.client_id",
              client_name: "$clientdata.name",
              project_name: "$projectdata.name",
            }
          },
          { $match: client_aggre },
          {
            $lookup: {
              from: "user",
              localField: "user_id",
              foreignField: "_id",
              as: "userdata",
            },
          },
          { $unwind: "$userdata" },
          {
            $lookup: {
              from: "to_do",
              localField: "todo_id",
              foreignField: "_id",
              as: "tododata",
            },
          },
          { $unwind: { path: "$tododata", preserveNullAndEmptyArrays: true } },
          {
            $lookup: {
              from: "screen_shot",
              localField: "_id",
              foreignField: "session_id",
              as: "screen_shotdata",
            }
          },
          {
            $project: {
              _id: 0,
              sess_id: "$_id",
              start_time: 1,
              created_at: 1,
              end_time: 1,
              updated_at: 1,
              project_name: 1,
              user_name: "$userdata.name",
              user_id: "$userdata._id",
              profile_img: "$userdata.profile_img",
              todo_title: "$tododata.title",
              client_name: 1,
              int_sec: 1,
              screen_shotdata: 1,
            }
          }
        ]
      }
      else {
        var session_aggre = [
          {
            $match: match_condition
          },

          {
            $lookup: {
              from: "project",
              localField: "project_id",
              foreignField: "_id",
              as: "projectdata",
            },
          },
          { $unwind: "$projectdata" },

          {
            $lookup: {
              from: "user",
              localField: "user_id",
              foreignField: "_id",
              as: "userdata",
            },
          },
          { $unwind: "$userdata" },

          {
            $lookup: {
              from: "to_do",
              localField: "todo_id",
              foreignField: "_id",
              as: "tododata",
            },
          },
          { $unwind: { path: "$tododata", preserveNullAndEmptyArrays: true } },

          {
            $lookup: {
              from: "client",
              localField: "projectdata.client_id",
              foreignField: "_id",
              as: "clientdata"
            }
          },
          { $unwind: { path: "$clientdata", preserveNullAndEmptyArrays: true } },
          {
            $lookup: {
              from: "screen_shot",
              localField: "_id",
              foreignField: "session_id",
              as: "screen_shotdata",
            }
          },
          {
            $project: {
              _id: 0,
              sess_id: "$_id",
              start_time: 1,
              created_at: 1,
              end_time: 1,
              updated_at: 1,
              project_name: "$projectdata.name",
              user_id: "$userdata._id",
              user_name: "$userdata.name",
              profile_img: "$userdata.profile_img",
              todo_title: "$tododata.title",
              client_name: "$clientdata.name",
              screen_shotdata: 1,
            }
          }
        ];
      }
      var session_data = await sessionModel.aggregate(session_aggre);

      // console.log("session_data>", session_data)
      for (i = 0; i < session_data.length; i++) {
        if (session_data[i].end_time == null) {
          if ((now - last_date) < 0) { session_data[i].end_time = now }
          else { session_data[i].end_time = last_date }
        }
      }
      // console.log("session_data>", session_data)

      let sessions = session_data.map((x) => {
        let times = []
        if (moment(x.start_time).format('YYYY-MM-DD') === moment(x.end_time).format('YYYY-MM-DD')) {
          let res = {}
          res.diff = GetTimeDifference(x.start_time, x.end_time)
          res.date = moment(x.start_time).format('YYYY-MM-DD')
          times.push(res)
        } else times = getMinutes(x.start_time, x.end_time)
        // console.log('times', times);
        // x.times = times
        times = times.map((y) => {
          let data = {
            /*diff: y.diff*/
            total_seconds: y.diff,
            date: y.date,
            ...x
          }
          data.screen_shotdata = data.screen_shotdata.filter((z) => moment(z.created_at).format('YYYY-MM-DD') === y.date)
          data.screen_shotdata = data.screen_shotdata.map((z) => {
            // z.keyboard = parseInt(((z.key_event || 0) / 300) * 100)
            // z.mouse = parseInt(((z.mouse_event || 0) / 200) * 100)
            z.activity = parseInt((((z.key_event || 0) + (z.mouse_event || 0)) / 500) * 100)
            return z
          })
          data.activity = parseInt((data.screen_shotdata.reduce((sum, val) => sum + parseInt((val && val.activity) || 0), 0) / data.screen_shotdata.length)) || 0;
          return data
        })
        // console.log('times', times);
        return times
      })
      let finalData = []
      sessions.forEach((x) => {
        x.forEach((y) => {
          delete y.screen_shotdata
          delete y.created_at
          delete y.updated_at
          delete y.__v
          /* y.sess_time = formatTimeToHHMMSS((y.diff || 0)) */
          y.sess_time = formatTimeToHHMMSS((y.total_seconds || 0))
          finalData.push(y)
        })
      })

      if (finalData) {
        var total_sec = 0;
        var total_activity = 0;

        for (i = 0; i < finalData.length; i++) {
          if (new Date(finalData[i].date) < start_date || new Date(finalData[i].date) > last_date) delete finalData[i]
          else {
            total_activity = total_activity + finalData[i].activity
            /* total_sec = total_sec + finalData[i].diff */
            total_sec = total_sec + finalData[i].total_seconds
          }
        }

        var avg_activity = (total_activity / (finalData.length || 1));
        avg_activity = avg_activity.toFixed(2);
        var total_time = commonController.formatTimeToHHMMSS(total_sec, isHr = true, isMin = true, isSec = true)
      }

      finalData = finalData.filter((x) => x).map((x) => x);

      for (i = 0; i < finalData.length; i++) {
        if (!finalData[i].client_name) finalData[i].client_name = "No client"
        if (!finalData[i].todo_title) finalData[i].todo_title = "No to-do"

        let start_date_format = moment(finalData[i].start_time).format('YYYY-MM-DD')
        let end_date_format = moment(finalData[i].end_time).format('YYYY-MM-DD')
        if (finalData[i].date == start_date_format && finalData[i].date == end_date_format) {
          finalData[i].started = moment(finalData[i].start_time).format("hh:mm a")
          finalData[i].stopped = moment(finalData[i].end_time).format("hh:mm a")
        }
        else if (finalData[i].date == start_date_format && finalData[i].date != end_date_format) {
          finalData[i].started = moment(finalData[i].start_time).format("hh:mm a")
          finalData[i].stopped = "11:59 pm"
        }
        else if (finalData[i].date != start_date_format && finalData[i].date == end_date_format) {
          finalData[i].started = "12:00 am"
          finalData[i].stopped = moment(finalData[i].end_time).format("hh:mm a")
        }
        else {
          finalData[i].started = "12:00 am"
          finalData[i].stopped = "11:59 pm"
        }
      }

      let groupBy_Date = []
      groupBy_Date = groupBy(finalData, "date", "date", "group_data")

      for (i = 0; i < groupBy_Date.length; i++) {
        var total_diff = 0;
        for (j = 0; j < groupBy_Date[i].group_data.length; j++) {
          total_diff = total_diff + groupBy_Date[i].group_data[j].total_seconds
        }
        groupBy_Date[i].total_sec = total_diff;
        total_diff = (total_diff / 3600) || 0;
        total_diff = total_diff.toFixed(2);
        groupBy_Date[i].total_time = total_diff;
        delete groupBy_Date[i].group_data
      }

      if (finalData.length > 0) {
        const result = {
          activties: {
            total_time: total_time,
            avg_activity: avg_activity + "%"
          },
          report_data: finalData,
          chart_data: groupBy_Date,
        }
        sendData["ReturnCode"] = 200;
        sendData["err"] = 0;
        sendData["Data"] = result
        sendData["ReturnMsg"] = "Work session report generated";
        callback(sendData);
      } else {
        sendData["ReturnCode"] = 200;
        sendData["err"] = 1;
        sendData["Data"] = [];
        sendData["ReturnMsg"] = "Data not found";
        callback(sendData);
      }
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "You are not member of this organization";
      callback(sendData);
    }
  },
  DAILY_LIMIT_REPORT: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    let { user_id, org_id, project_id = [], todo_id = [], client_id = [], member_id = [], group_by = "" } = data || {};


    let tab_type = data.tab_type.trim().toLowerCase();
    if (data.groupBy) group_by = group_by.trim().toLowerCase();
    group_by = group_by.trim().toLowerCase();
    let get_date = new Date(data.end_date)
    const start_date = new Date(data.start_date);
    const end_date1 = new Date(data.end_date);
    const end_date = new Date(end_date1.setDate(end_date1.getDate() + 1));
    const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
    const now = new Date();

    let org_member = await orgMemberModel.findOne({ user_id: ObjectId(user_id), org_id: ObjectId(org_id) })

    if (org_member) {

      var match_condition = {
        $and: [
          { org_id: ObjectId(org_id) },
          { $and: [{ start_time: { $gte: start_date } }, { start_time: { $lt: end_date } }] },
          { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
        ]
      }
      if (tab_type == "me") { match_condition.user_id = ObjectId(user_id) }

      if (project_id && project_id.length > 0) {
        project_id = project_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.project_id = { $in: project_id };
      }

      if (tab_type == "all" && member_id && member_id.length > 0) {
        member_id = member_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.user_id = { $in: member_id };
      }

      console.log("match_condition>>>", match_condition)

      var session_aggre = [
        {
          $match: match_condition
        },

        {
          $lookup: {
            from: "project",
            localField: "project_id",
            foreignField: "_id",
            as: "projectdata",
          },
        },
        { $unwind: "$projectdata" },

        {
          $lookup: {
            from: "user",
            localField: "user_id",
            foreignField: "_id",
            as: "userdata",
          },
        },
        { $unwind: "$userdata" },
        {
          $lookup: {
            from: "organization_member",
            let: { "u_id": "$user_id", },
            as: "org_memberdata",
            pipeline: [
              {
                $match:
                {
                  $expr:
                  {
                    $and: [
                      { $eq: ["$user_id", "$$u_id"] },
                      { $eq: ["$org_id", ObjectId(org_id)] },
                    ]
                  }
                }
              }
            ]
          }
        },
        { $unwind: "$org_memberdata" },
        {
          $lookup: {
            from: "to_do",
            localField: "todo_id",
            foreignField: "_id",
            as: "tododata",
          },
        },
        { $unwind: { path: "$tododata", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "client",
            localField: "projectdata.client_id",
            foreignField: "_id",
            as: "clientdata"
          }
        },
        { $unwind: { path: "$clientdata", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "screen_shot",
            localField: "_id",
            foreignField: "session_id",
            as: "screen_shotdata",
          }
        },
        {
          $project: {
            _id: 1,
            start_time: 1,
            created_at: 1,
            end_time: 1,
            updated_at: 1,
            project_name: "$projectdata.name",
            user_id: "$userdata._id",
            user_name: "$userdata.name",
            user_pro_img: "$userdata.profile_img",
            todo_title: {
              $cond: {
                if: "$tododata",
                then: "$tododata.title",
                else: "No to-do",
              }
            },
            client_name: {
              $cond: {
                if: "$clientdata",
                then: "$clientdata.name",
                else: "No client",
              }
            },
            screen_shotdata: 1,
          }
        }
      ];

      var session_data = await sessionModel.aggregate(session_aggre);

      if (session_data.length > 0) {

        for (i = 0; i < session_data.length; i++) {
          if (session_data[i].end_time == null) {
            if ((now - last_date) < 0) { session_data[i].end_time = now }
            else { session_data[i].end_time = last_date }
          }
        }

        let sessions = session_data.map((x) => {
          let times = []
          if (moment(x.start_time).format('YYYY-MM-DD') === moment(x.end_time).format('YYYY-MM-DD')) {
            let res = {}
            res.diff = GetTimeDifference(x.start_time, x.end_time)
            res.date = moment(x.start_time).format('YYYY-MM-DD')
            times.push(res)
          } else times = getMinutes(x.start_time, x.end_time)
          times = times.map((y) => {
            let data = {
              total_seconds: y.diff,
              date: y.date,
              ...x
            }
            data.screen_shotdata = data.screen_shotdata.filter((z) => moment(z.created_at).format('YYYY-MM-DD') === y.date)
            data.screen_shotdata = data.screen_shotdata.map((z) => {
              return z
            })
            return data
          })
          return times
        })
        let finalData = []
        sessions.forEach((x) => {
          x.forEach((y) => {
            delete y.screen_shotdata
            delete y.start_time
            delete y.end_time
            delete y.created_at
            delete y.updated_at
            delete y.__v
            y.sess_time = formatTimeToHHMMSS((y.total_seconds || 0))
            finalData.push(y)
          })
        })




        for (i = 0; i < (finalData.length - 1); i++) {
          var activity = 0;
          var session_time = 0;

          if (finalData[i]) {
            var k = 1;
            for (j = i + 1; j < (finalData.length); j++) {
              if (
                finalData[j] &&
                (finalData[i].date == finalData[j].date) &&
                (finalData[i].user_id.toString() == finalData[j].user_id.toString())) {
                session_time = session_time + finalData[j].total_seconds
                delete finalData[j];
              }
            }

            finalData[i].daily_time_spent_sec = finalData[i].total_seconds + session_time;
            var sum_time = commonController.formatTimeToHHMMSS(finalData[i].daily_time_spent_sec, isHr = true, isMin = true, isSec = true)
            finalData[i].daily_time_spent = sum_time;
            let session_date = new Date(finalData[i].date)
            let session_date_endTime = new Date(new Date(new Date(new Date(new Date(finalData[i].date).setHours(23)).setMinutes(59))).setSeconds(59))
            let daily_limit_find = {
              user_id: finalData[i].user_id,
              org_id: ObjectId(org_id),
              $and: [
                { created_at: { $gte: session_date } },
                { created_at: { $lt: session_date_endTime } }
              ]
            }
            let find_limit = await work_limitModel.findOne(daily_limit_find)
            if (find_limit) {
              let user_daily_limit = find_limit.daily_limit || 0;
              finalData[i].user_daily_limit = user_daily_limit

              if (user_daily_limit > 0) {
                let daily_limit_sec = user_daily_limit * 3600;
                let percentage_used = (finalData[i].daily_time_spent_sec / daily_limit_sec) * 100;
                finalData[i].percentage_used = percentage_used.toFixed(2)
                let remain_sec = daily_limit_sec - finalData[i].daily_time_spent_sec
                finalData[i].remaining_sec = remain_sec
                finalData[i].remaining = ((remain_sec > 0) ? "" : "-") + formatTimeToHHMMSS((remain_sec))
                delete finalData[i].total_seconds
                delete finalData[i].project_name
                delete finalData[i].todo_title
                delete finalData[i].client_name
                delete finalData[i].sess_time
              } else {
                delete finalData[i]
              }
            } else {
              delete finalData[i]
            }
          }
        }

        finalData = finalData.filter((x) => x);


        if (finalData) {
          sendData["ReturnCode"] = 200;
          sendData["err"] = 0;
          sendData["Data"] = finalData;
          sendData["ReturnMsg"] = "Data get successfully";
          callback(sendData);
        } else {
          sendData["ReturnCode"] = 200;
          sendData["err"] = 0;
          sendData["Data"] = [];
          sendData["ReturnMsg"] = "Organization not found";
          callback(sendData);
        }
      } else {
        sendData["ReturnCode"] = 200;
        sendData["err"] = 1;
        sendData["Data"] = [];
        sendData["ReturnMsg"] = "Data not found";
        callback(sendData);
      }
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 0;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "You are not member of this organization";
      callback(sendData);
    }
  },

  SEND_REPORT: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    let email = data.email;
    let file = data.file;
    let subject = data.subject;
    let message = data.message

    if (email.length > 0) {

      var messages = `${message}`
      var link = `${file}`
      var subjects = `${subject}`
      ejs.renderFile(path.join(__dirname + '/../../templates/send_report.ejs'), { link: link, messages: messages }, (err, data) => {
        console.log("err>>", err)
        console.log("data>>>", data)
        if (!err) {
          console.log(err);
          var subject = subjects
          commonController.__sendEmail(email, subject, data, link, messages);
        }
      })

      sendData['ReturnMsg'] = "Sent to " + data.email,
        callback(sendData);
    } else {
      sendData['ReturnCode'] = 201;
      sendData['err'] = 1;
      sendData['ReturnMsg'] = "Email not found";
      callback(sendData);
    }
  },

  APPS_URL_REPORT: async function (data, callback) {
    let sendData = {
      ReturnCode: 200,
      err: 0,
      Data: [],
      ReturnMsg: "",
    };

    console.log("data>", data)

    let { user_id, org_id, project_id = [], todo_id = [], client_id = [], member_id = [], search = '', item_type: itemType } = data || {};

    let item_type = itemType ? itemType.trim().toLowerCase() : "";
    let tab_type = data.tab_type.trim().toLowerCase()
    let get_date = new Date(data.end_date)
    const start_date = new Date(data.start_date);
    const end_date1 = new Date(data.end_date);
    const end_date = new Date(end_date1.setDate(end_date1.getDate() + 1));
    const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
    const now = new Date();

    let org_member = await orgMemberModel.findOne({ user_id: ObjectId(user_id), org_id: ObjectId(org_id), invite_accpeted: true })

    if (org_member) {

      var match_condition = {
        $and: [
          { org_id: ObjectId(org_id) },
          { $and: [{ $or: [{ start_time: { $gte: start_date } }, { end_time: { $gte: start_date } }, { end_time: null }] }, { start_time: { $lt: end_date } }] },
          // { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
        ]
      }
      if (data.tab_type == "me") { match_condition.user_id = ObjectId(user_id) }

      if (project_id && project_id.length > 0) {
        project_id = project_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.project_id = { $in: project_id };
      }

      if (data.tab_type == "all" && member_id && member_id.length > 0) {
        member_id = member_id.filter((x) => x).map((x) => ObjectId(x))
        match_condition.user_id = { $in: member_id };
      }

      // if (todo_id && todo_id.length > 0) {
      //   todo_id = todo_id.filter((x) => x).map((x) => ObjectId(x))
      //   match_condition.todo_id = { $in: todo_id };
      // }

      console.log("match_condition>>>", match_condition)

      const getScreenProjectFromSessions = [
        {
          $lookup: {
            from: "screen_shot",
            localField: "_id",
            foreignField: "session_id",
            as: "shots",
          },
        },
        {
          $lookup: {
            from: "project",
            let: { p_id: "$project_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$p_id"] }, }, },
              { $project: { _id: 0, name: "$name", }, },
            ],
            as: "projects",
          },
        },
        {
          $lookup: {
            from: "user",
            let: { u_id: "$user_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$u_id"] }, }, },
              { $project: { name: "$name", profile_img: "$profile_img", } },
            ],
            as: "users",
          },
        },
        {
          $lookup: {
            from: "to_do",
            let: { td_id: "$todo_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$td_id"] }, }, },
              { $project: { _id: 0, title: "$title" }, },
            ],
            as: "todos",
          },
        },
      ]

      let sessions = await sessionModel.aggregate([{ $match: match_condition }, ...getScreenProjectFromSessions])

      for (i = 0; i < sessions.length; i++) {
        if (sessions[i].end_time == null) {
          if ((now - last_date) < 0) { sessions[i].end_time = now }
          else { sessions[i].end_time = last_date }
        }
      }

      // console.log("sessions>", sessions)

      let scr_shot_data = scr_shot_rawData(sessions).filter((x) => x.task)
      // console.log("scr_shot_data>", scr_shot_data)
      let task_data = [];
      let url_data = scr_shot_data.forEach((z) => {
        let item_type_filter = [];
        if (item_type == "app") item_type_filter = z.task.filter((x) => x.app_name)
        else if (item_type == "url") item_type_filter = z.task.filter((x) => x.url)
        else item_type_filter = z.task

        if (search) {
          item_type_filter = z.task.filter((x) => {
            let match_data = (x.app_name || x.url || '').trim().toLowerCase()
            return match_data.includes(search.trim().toLowerCase())
          })
        }

        if (item_type_filter.length > 0) {
          item_type_filter.forEach((y) => {
            if (y.spent_time) {
              let task_item = {}
              // let obj_url = {}
              // obj_url.url = y.url,
              // obj_url.spent_time = y.spent_time,
              // task_item.url_page = [obj_url]
              task_item.time_in_sec = y.spent_time.split(':'),
                task_item.time_in_sec = (task_item.time_in_sec[0] * 60 * 60 + task_item.time_in_sec[1] * 60 + task_item.time_in_sec[2] * 1);
              task_item.apps_or_url = y.url ? y.url.split('/')[2] : y.app_name,
                task_item.itemType = y.url ? "url" : "app"
              task_item.project_name = z.project_name
              task_item.user_name = z.user_name
              task_item.userId = z.userId
              task_item.ss_id = z.ss_id
              // task_item.date = z.date
              task_item.date = z.hourTime
              task_item.flag = true
              // console.log("task_item>",task_item)
              task_data.push(task_item)
            }
          })
        }
        else {
          delete z
        }

      })
      // console.log("task_data>", task_data)
      if (task_data.length > 0) {
        for (i = 0; i < (task_data.length - 1); i++) {
          let total_sec = 0;
          if (task_data[i]) {
            for (j = i + 1; j < (task_data.length); j++) {
              if (
                task_data[j] &&
                (task_data[i].flag == task_data[j].flag) &&
                (task_data[i].date == task_data[j].date) &&
                (task_data[i].project_name == task_data[j].project_name) &&
                (task_data[i].userId.toString() == task_data[j].userId.toString())) {

                total_sec += task_data[j].time_in_sec
                task_data[j].flag = false
              }
            }
            task_data[i].total_sec = task_data[i].time_in_sec + total_sec;
          }
        }

        for (i = 0; i < (task_data.length); i++) {
          if (task_data[i].flag == true) {

            for (j = 0; j < (task_data.length); j++) {
              if (
                task_data[j] &&
                (task_data[i].date == task_data[j].date) &&
                (task_data[i].project_name == task_data[j].project_name) &&
                (task_data[i].userId.toString() == task_data[j].userId.toString())) {

                task_data[j].total_sec = task_data[i].total_sec
              }
            }
          }
        }

        for (i = 0; i < (task_data.length - 1); i++) {
          let url_total_sec = 0;
          if (task_data[i]) {
            for (j = i + 1; j < (task_data.length); j++) {
              if (
                task_data[j] &&
                (task_data[i].date == task_data[j].date) &&
                (task_data[i].project_name == task_data[j].project_name) &&
                (task_data[i].userId.toString() == task_data[j].userId.toString()) &&
                (task_data[i].apps_or_url == task_data[j].apps_or_url)) {

                url_total_sec += task_data[j].time_in_sec
                delete task_data[j];
              }
            }

            task_data[i].url_total_sec = task_data[i].time_in_sec + url_total_sec;
            let sum_time = commonController.formatTimeToHHMMSS(task_data[i].url_total_sec, isHr = true, isMin = true, isSec = true)
            task_data[i].url_spent_time = sum_time;
            task_data[i].percentage_used = task_data[i].total_sec > 0 ? ((task_data[i].url_total_sec / task_data[i].total_sec) * 100).toFixed(2) : 0;
            delete task_data[i].time_in_sec
            delete task_data[i].flag
          }
        }
        task_data = task_data.filter((x) => x)
      }

      if (task_data.length > 0) {
        sendData['Data'] = task_data
        sendData["ReturnMsg"] = "Apps & URLs report generated";
        callback(sendData);
      }
      else {
        sendData["err"] = 1;
        sendData["ReturnMsg"] = "Data not found";
        callback(sendData);
      }
    } else {
      sendData["err"] = 1;
      sendData["ReturnMsg"] = "Unauthorized access";
      callback(sendData);
    }
  },
}

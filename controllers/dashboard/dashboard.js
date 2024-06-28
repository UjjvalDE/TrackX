
const moment = require("moment");
const { default: mongoose } = require("mongoose");
const { times } = require("underscore");
const orgMemberModel = require("../../models/organization/organization_member");
const sessionModel = require("../../models/session/session");
const { formatTimeToHHMMSS, addDaysToDate, groupBy, GetTimeDifference, addMinsToDate, hmsToSecondsOnly, mathRound } = require("../common");


const getSSLevelRawData = (data) => {
    if (!data && data.length === 0) return []
    let ssData = []
    data.forEach((x) => {
        if (x.shots.length > 0) {
            let last_ss_time = undefined
            x.shots.forEach((y, i) => {
                let ssItem = { ...x, session_id: x._id }
                ssItem.project_name = x.projects.length > 0 && x.projects[0].name ? x.projects[0].name : "";
                ssItem.todo_name = x.todos.length > 0 && x.todos[0].title ? x.todos[0].title : "";
                ssItem.user_name = x.users.length > 0 && x.users[0].name ? x.users[0].name : "";
                ssItem.user_profile_img = x.users.length > 0 && x.users[0].profile_img ? x.users[0].profile_img : "";
                ssItem.ss_id = y._id;
                ssItem.ss_url = y.ss_url;
                ssItem.key_event = y.key_event;
                ssItem.mouse_event = y.mouse_event;
                ssItem.ss_created_at = y.created_at;
                ssItem.tracked = GetTimeDifference(last_ss_time || x.start_time, y.created_at)
                if (i === x.shots.length - 1) {
                    const extraTime = GetTimeDifference(y.created_at, x.end_time || new Date())
                    ssItem.tracked += extraTime
                }
                last_ss_time = y.created_at
                ssItem.activity = parseInt(((ssItem.key_event + ssItem.mouse_event) / 500) * 100);
                ssItem.activity = ssItem.activity > 100 ? 100 : ssItem.activity
                ssItem.date = moment(y.created_at).format('YYYY-MM-DD')
                ssItem.hourTime = moment(ssItem.ss_created_at || x.start_time).format('HH')
                delete ssItem._id
                delete ssItem.todos
                delete ssItem.shots
                delete ssItem.users
                delete ssItem.projects
                delete ssItem.__v
                ssData.push(ssItem)
            })
        } else {
            let ssItem = { ...x, session_id: x._id }
            ssItem.project_name = x.projects.length > 0 && x.projects[0].name ? x.projects[0].name : "";
            ssItem.todo_name = x.todos.length > 0 && x.todos[0].title ? x.todos[0].title : "";
            ssItem.user_name = x.users.length > 0 && x.users[0].name ? x.users[0].name : "";
            ssItem.user_profile_img = x.users.length > 0 && x.users[0].profile_img ? x.users[0].profile_img : "";
            ssItem.tracked = GetTimeDifference(x.start_time, x.end_time || new Date());
            ssItem.activity = 0;
            ssItem.date = moment(x.start_time).format('YYYY-MM-DD')
            ssItem.hourTime = moment(x.start_time).format('HH')
            delete ssItem._id
            delete ssItem.todos
            delete ssItem.shots
            delete ssItem.users
            delete ssItem.projects
            delete ssItem.__v
            ssData.push(ssItem)
        }
    })
    return ssData
}

module.exports = {

    GET_DASHBOARD: async function (data, callback) {
        var sendData = {
            ReturnCode: 200,
            err: 0,
            Data: {},
            ReturnMsg: "",
        };

        let { userData, org_id, start_date, end_date, tab_type = "Me" } = data || {}
        let { _id: user_id } = userData || {}

        let get_date = new Date(data.end_date)
        start_date = new Date(start_date);
        end_date = addDaysToDate(new Date(end_date), 1);
        org_id = ObjectId(org_id)
        user_id = ObjectId(user_id)
        tab_type = tab_type.trim().toLowerCase();
        const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
        const now = new Date();

        const orgMember = await orgMemberModel.findOne({ user_id, org_id });
        if (orgMember) {
            let sessionCond = {
                // $and: [
                //     { org_id: { $eq: org_id } },
                //     { start_time: { "$gte": start_date } },
                //     { $or: [{ end_time: null }, { end_time: { "$lt": end_date } },] }
                // ],
                $and: [
                    { org_id: ObjectId(org_id) },
                    { $and: [{ start_time: { $gte: start_date } }, { start_time: { $lt: end_date } }] },
                    { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
                ]
            }
            if (tab_type === "me") sessionCond.user_id = user_id

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

            let sessions = await sessionModel.aggregate([
                { $match: sessionCond }, ...ssCond
            ])
            let sessionShots = []

            sessions = sessions.map((x) => {
                if (x.shots.length > 0) sessionShots.push(...x.shots)
                if (x.end_time == null) {
                    if ((now - last_date) < 0) x.end_time = now
                    else x.end_time = last_date
                }
                return x
            })

            sessionCond = {
                // $and: [
                //     { org_id: { $eq: org_id } },
                //     { start_time: { "$gte": addDaysToDate(start_date, -7) } },
                //     { end_time: { "$lt": addDaysToDate(end_date, -7) } }
                // ],
                $and: [
                    { org_id: ObjectId(org_id) },
                    { $and: [{ start_time: { $gte: addDaysToDate(start_date, -7) } }, { start_time: { $lt: addDaysToDate(end_date, -7) } }] },
                    { $or: [{ end_time: null }, { end_time: { $lt: addDaysToDate(end_date, -7) } },] }
                ]
            }
            if (tab_type === "me") sessionCond.user_id = user_id

            let prevWeekSessions = await sessionModel.aggregate([
                { $match: sessionCond }, ...ssCond
            ])

            for (i = 0; i < prevWeekSessions.length; i++) {
                if (prevWeekSessions[i].end_time == null) {
                    prevWeekSessions[i].end_time = addDaysToDate(last_date, -7)
                }
            }

            // Get this week and prev week ss level data in raw format 
            let ssData = getSSLevelRawData(sessions)
            let prevSsData = getSSLevelRawData(prevWeekSessions)

            // Get all prev week data for benchmark comparison
            let prev_weekly_activity = 0
            let prev_weekly_worked = 0
            let prev_project_worked = 0
            let prev_member_worked = 0
            let prev_today_activity = 0
            let prev_today_worked = 0
            let prev_today_data
            if (prevSsData.length > 0) {
                prev_weekly_activity = parseInt(prevSsData.reduce((sum, val) => sum + (val.activity || 0), 0) / prevSsData.length)
                prev_weekly_worked = parseInt(prevSsData.reduce((sum, val) => sum + (val.tracked || 0), 0))
                prev_member_worked = groupBy(prevSsData, "user_id", "user", "data").length
                prev_project_worked = groupBy(prevSsData, "project_id", "project", "data").length
                prev_today_data = prevSsData.filter((x) => x.date === moment(addDaysToDate(new Date(), -7)).format('YYYY-MM-DD'))
                if (prev_today_data.length > 0) {
                    prev_today_activity = parseInt(prev_today_data.reduce((sum, val) => sum + (val.activity || 0), 0) / prev_today_data.length)
                    prev_today_worked = parseInt(prev_today_data.reduce((sum, val) => sum + (val.tracked || 0), 0))
                }
            }

            // Get Project wise worked time and activity 
            let project_data = groupBy(ssData, "project_id", "project", "data")
            let total_project_time = 0
            project_data = project_data.map((x) => {
                let item = {}
                item.project_id = x.project
                item.project_name = ""
                item.activity = 0
                item.worked_time = 0
                if (x.data.length > 0) {
                    item.project_name = x.data[0].project_name ? x.data[0].project_name : ""
                    item.activity = parseInt(x.data.reduce((sum, val) => sum + (val.activity || 0), 0) / x.data.length)
                    item.worked_time = parseInt(x.data.reduce((sum, val) => sum + (val.tracked || 0), 0))
                    total_project_time += item.worked_time
                }
                return item
            })
            project_data = project_data.map((x) => {
                x.worked_percentage = Number(((x.worked_time / total_project_time) * 100).toFixed(2))
                x.worked_time = formatTimeToHHMMSS(x.worked_time)
                return x
            })

            // Get To do wise worked time and activity 
            let todo_data = groupBy(ssData, "todo_id", "todo", "data")
            let total_todo_time = 0
            todo_data = todo_data.map((x) => {
                let item = {}
                item.todo_id = x.todo
                item.todo_name = ""
                item.worked_time = 0
                if (x.data.length > 0) {
                    item.todo_name = x.data[0].todo_name ? x.data[0].todo_name : ""
                    item.worked_time = parseInt(x.data.reduce((sum, val) => sum + (val.tracked || 0), 0))
                    if (item.todo_name) total_todo_time += item.worked_time
                }
                return item
            }).filter((x) => x.todo_name)
            todo_data = todo_data.map((x) => {
                x.worked_percentage = Number(((x.worked_time / total_todo_time) * 100).toFixed(2))
                x.worked_time = formatTimeToHHMMSS(x.worked_time)
                return x
            })

            // Get weekly and today data for benchmark
            let weekly_worked = 0
            let weekly_activity_chart = []
            let weekly_data = groupBy(ssData, "date", "date", "data")
            let projects_worked_chart = []
            let members_worked_chart = []
            let today_activity_chart = []
            let today_worked_chart = []
            let today_data = []
            if (weekly_data.length > 0) {
                const today_data_item = weekly_data.find((x) => x.date === moment().format('YYYY-MM-DD'))
                if (today_data_item) today_data = today_data_item.data
                if (today_data.length > 0) {
                    const getTime = (item, precision, bool) => { return Number(item.hourTime || 0) / precision }
                    const precision = 24
                    today_data = groupBy(today_data, (item) => getTime(item, precision, true), 'starts_at', 'hour_data')
                    today_data = today_data.map((x) => {
                        x.starts_at = x.starts_at * 24
                        return x
                    })
                    today_data.forEach((x) => {
                        let activity_item = {}
                        activity_item.starts_at = x.starts_at
                        activity_item.activity = 0
                        if (x.hour_data.length > 0) activity_item.activity = parseInt(x.hour_data.reduce((sum, val) => sum + (val.activity || 0), 0) / x.hour_data.length)
                        today_activity_chart.push(activity_item)

                        let worked_item = {}
                        worked_item.starts_at = x.starts_at
                        worked_item.worked_time = formatTimeToHHMMSS(0)
                        if (x.hour_data.length > 0) worked_item.worked_time = parseInt(x.hour_data.reduce((sum, val) => sum + (val.tracked || 0), 0))
                        today_worked_chart.push(worked_item)
                    })
                }
            }
            // Get weekly data for chart
            weekly_data = weekly_data.map((x) => {
                let item = {}
                item.date = x.date
                item.worked_time = 0
                if (x.data.length > 0) item.worked_time = parseInt(x.data.reduce((sum, val) => sum + (val.tracked || 0), 0))
                item.worked_seconds = item.worked_time
                weekly_worked += item.worked_time
                item.worked_time = formatTimeToHHMMSS(item.worked_time)
                let activity_chart = {}
                activity_chart.date = x.date
                activity_chart.activity = parseInt(x.data.reduce((sum, val) => sum + (val.activity || 0), 0) / x.data.length)
                weekly_activity_chart.push(activity_chart)
                let projects_worked = []
                let members_worked = []
                x.data.forEach((y) => {
                    if (!projects_worked.includes(String(y.project_id || ''))) projects_worked.push(String(y.project_id || ''))
                    if (!members_worked.includes(String(y.user_id || ''))) members_worked.push(String(y.user_id || ''))
                })
                projects_worked_chart.push({ date: x.date, projects_worked: projects_worked.length })
                members_worked_chart.push({ date: x.date, members_worked: members_worked.length })

                const today = moment().format('YYYY-MM-DD')
                if (x.date === today) { }
                return item
            })
            let today_worked = 0
            let today_activity = 0
            if (weekly_data.length > 0) {
                const today_worked_item = weekly_data.find((x) => x.date === moment().format('YYYY-MM-DD'))
                if (today_worked_item) today_worked = today_worked_item.worked_seconds
            }
            let weekly_activity = 0
            if (weekly_activity_chart.length > 0) {
                weekly_activity = parseInt(weekly_activity_chart.reduce((sum, val) => sum + (val.activity || 0), 0) / weekly_activity_chart.length)
                const today_activity_item = weekly_activity_chart.find((x) => x.date === moment().format('YYYY-MM-DD'))
                if (today_activity_item) today_activity = today_activity_item.activity
            }

            // Get member wise data
            let raw_member_data = groupBy(ssData, "user_id", "user", "data")
            // Get recent screen_shot and activity of users 
            const recent_activity = raw_member_data.map((x) => {
                const last3Data = x.data.filter((x) => x.ss_created_at).slice(-3)
                let item
                if (last3Data.length > 0) {
                    item = {}
                    item.user_data = {
                        name: last3Data[0].user_name,
                        profile_img: last3Data[0].user_profile_img,
                        user_id: last3Data[0].user_id
                    }
                    item.shots = last3Data.map((y) => {
                        let shot = {}
                        shot.ss_url = y.ss_url
                        shot.ss_id = y.ss_id
                        shot.activity = y.activity
                        shot.project_name = y.project_name
                        shot.created_at = y.ss_created_at
                        return shot
                    })
                }
                return item
            }).filter((item) => item)

            // Get Member wise data 
            const member_data = raw_member_data.map((x) => {
                let item = {}
                if (x.data.length > 0) {
                    const lastItem = x.data[x.data.length - 1]
                    const todayItems = x.data.filter((x) => x.date === moment().format('YYYY-MM-DD'))
                    item.last_worked_project_name = lastItem.project_name
                    item.last_worked_project_id = lastItem.project_id
                    item.last_worked_todo_name = lastItem.todo_name
                    item.last_worked_todo_id = lastItem.todo_id
                    item.name = x.data[0].user_name
                    item.profile_img = x.data[0].user_profile_img
                    item.user_id = x.data[0].user_id
                    item.today_activity = 0
                    item.today_worked = formatTimeToHHMMSS(0)
                    if (todayItems.length > 0) {
                        item.today_activity = parseInt(todayItems.reduce((sum, val) => sum + (val.activity || 0), 0) / todayItems.length)
                        item.today_worked = formatTimeToHHMMSS(parseInt(todayItems.reduce((sum, val) => sum + (val.tracked || 0), 0)))
                    }
                    item.this_week_activity = parseInt(x.data.reduce((sum, val) => sum + (val.activity || 0), 0) / x.data.length)
                    item.this_week_worked = formatTimeToHHMMSS(parseInt(x.data.reduce((sum, val) => sum + (val.tracked || 0), 0)))
                    item.week_chart = groupBy(x.data, "date", "date", "data")
                    item.week_chart = item.week_chart.map((x) => {
                        let item = {}
                        item.date = x.date
                        item.worked_time = 0
                        if (x.data.length > 0) item.worked_time = parseInt(x.data.reduce((sum, val) => sum + (val.tracked || 0), 0))
                        item.worked_seconds = item.worked_time
                        item.worked_time = formatTimeToHHMMSS(item.worked_time)
                        return item
                    })
                }
                return item
            })
            console.log(member_data);

            // Get App & Urls data
            let apps_n_urls = []
            let total_time_spent = 0
            sessionShots.forEach((y) => {
                if (y.task && y.task.length > 0) {
                    y.task.forEach((z) => {
                        const spentTime = hmsToSecondsOnly(z.spent_time) || 0
                        apps_n_urls.push({ app_url: z.app_name || z.url, spent_time: spentTime })
                        total_time_spent += spentTime
                    })
                }
            })
            apps_n_urls = groupBy(apps_n_urls, "app_url", "app_url", "data")
            apps_n_urls = apps_n_urls.map((x) => {
                x.spent_time = parseInt(x.data.reduce((sum, val) => sum + (val.spent_time || 0), 0))
                x.worked_percentage = mathRound(Number((x.spent_time / total_time_spent) * 100), 2)
                x.spent_time = formatTimeToHHMMSS(x.spent_time)
                delete x.data
                return x
            })

            // Get Weekly Limits Data
            let weeklyLimitCond = { org_id }
            if (tab_type === "me") weeklyLimitCond.user_id = user_id

            let limitsData = await orgMemberModel.aggregate([
                { $match: weeklyLimitCond },
                { $project: { _id: 0, weekly_limit: 1, user_id: 1 } },
            ])
            let weekly_limits = member_data
                .map((x) => {
                    let member = {}
                    member.profile_img = x.profile_img
                    member.user_id = x.user_id
                    member.name = x.name
                    member.this_week_worked = x.this_week_worked

                    let limit = 0
                    const memberLimit = limitsData.find((y) => String(y.user_id) === String(x.user_id))
                    if (memberLimit) limit = memberLimit.weekly_limit
                    member.weekly_limit = formatTimeToHHMMSS(limit * 3600)

                    if (limit > 0) member.worked_percentage = mathRound(Number(((hmsToSecondsOnly(x.this_week_worked) || 0) / (limit * 3600)) * 100), 2)
                    else member.worked_percentage = 0
                    return member
                })
                .filter((x) => x.worked_percentage !== 0)

            // Response data 
            const week_worked_comparison = weekly_worked - prev_weekly_worked
            const today_worked_comparison = today_worked - prev_today_worked

            const res = {
                benchmarks: {
                    projects_worked: {
                        this_week: project_data.length,
                        prev_week_comparison: project_data.length - prev_project_worked,
                        chart_data: projects_worked_chart
                    },
                    members_worked: {
                        this_week: member_data.length,
                        prev_week_comparison: member_data.length - prev_member_worked,
                        chart_data: members_worked_chart
                    },
                    weekly_worked: {
                        this_week: formatTimeToHHMMSS(weekly_worked),
                        prev_week_comparison: `${week_worked_comparison < 0 ? "-" : ""}${formatTimeToHHMMSS(week_worked_comparison)}`,
                        chart_data: weekly_data
                    },
                    weekly_activity: {
                        this_week: weekly_activity,
                        prev_week_comparison: weekly_activity - prev_weekly_activity,
                        chart_data: weekly_activity_chart
                    },
                    today_activity: {
                        today: today_activity,
                        prev_day_comparison: today_activity - prev_today_activity,
                        chart_data: today_activity_chart
                    },
                    today_worked: {
                        today: formatTimeToHHMMSS(today_worked),
                        prev_day_comparison: `${today_worked_comparison < 0 ? "-" : ""}${formatTimeToHHMMSS(today_worked_comparison)}`,
                        chart_data: today_worked_chart
                    },
                },
                member_data: member_data.slice(0, 3),
                project_data: project_data.sort((a, b) => b.worked_percentage - a.worked_percentage).slice(0, 3),
                todo_data: todo_data.sort((a, b) => b.worked_percentage - a.worked_percentage).slice(0, 3),
                apps_n_urls: apps_n_urls.sort((a, b) => b.spent_precentage - a.spent_precentage).slice(0, 5),
                weekly_limits: weekly_limits.sort((a, b) => b.spent_precentage - a.spent_precentage).slice(0, 5),
                weekly_data: weekly_data,
                recent_activity: recent_activity.slice(0, 3)
            }
            sendData['Data'] = res
            sendData["ReturnMsg"] = `${tab_type} dashboard`;
            callback(sendData);

        } else {
            sendData["ReturnCode"] = 201
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Data not found";
            callback(sendData);
        }

    }
}

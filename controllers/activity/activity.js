const sessionModal = require("../../models/session/session");
const toDoModal = require("../../models/to_do/to_do");
const orgMemberModal = require("../../models/organization/organization_member");
const { addDaysToDate, groupBy, sortByDate, formatTimeToHHMMSS, GetTimeDifference, addMinsToDate } = require("../common");
const screenShotModal = require("../../models/screen_shot/screen_shot");

const groupSsByHourTenMins = (sessions, sessionsForTotalTime = []) => {
    const sessionsData = sessions?.length > 0 ? sessions : sessionsForTotalTime
    let todayTotalActivities = []
    const sessionShots = sessionsData.map((x) => {
        const shots = x.shots || {};
        shots.keyboard = (parseInt(((shots.key_event || 0) / 250) * 100)) > 100 ? 100 : parseInt(((shots.key_event || 0) / 250) * 100);
        shots.mouse = (parseInt(((shots.mouse_event || 0) / 250) * 100)) > 100 ? 100 : parseInt(((shots.mouse_event || 0) / 250) * 100);
        shots.overall = (parseInt((((shots.key_event || 0) + (shots.mouse_event || 0)) / 500) * 100)) > 100 ? 100 : parseInt((((shots.key_event || 0) + (shots.mouse_event || 0)) / 500) * 100);
        shots.created_time = x.created_at
        return shots
    })

    const getTime = (item, precision, bool) => {
        return new Date(Math.floor(new Date(addMinsToDate(item.created_at || item.created_time, -30)) / precision) * precision).toISOString()
    }
    const precision = 60 * 60 * 1000
    const hourlyShots = groupBy(sessionShots, (item) => getTime(item, precision, true), 'starts_at', 'activities')
    let hours = hourlyShots.map((x) => {
        let item = {}
        item.starts_at = addMinsToDate(new Date(x.starts_at), 30)
        const precision = 10 * 60 * 1000
        item.activities = groupBy(x.activities, (item) => getTime(item, precision, false), 'time_slot', 'shots')
            .map((y) => {
                y.keyboard = 0
                y.mouse = 0
                y.overall = 0
                y.projects = []
                y.todos = []

                y.time_slot = addMinsToDate(new Date(y.time_slot), 30)
                if (y.shots.length > 0) {
                    y.keyboard = parseInt((y.shots.reduce((sum, val) => sum + parseInt(val.keyboard || 0), 0) / y.shots.length)) || 0;
                    y.mouse = parseInt((y.shots.reduce((sum, val) => sum + parseInt(val.mouse || 0), 0) / y.shots.length)) || 0;
                    y.overall = parseInt((y.shots.reduce((sum, val) => sum + parseInt(val.overall || 0), 0) / y.shots.length)) || 0;
                }
                y.shots = y.shots.map((z) => {
                    const item = {}
                    item._id = z._id
                    item.ss_url = z.ss_url
                    item.created_at = z.created_at
                    y.projects.push(z.project_name)
                    y.todos.push(z.todo_name)
                    return z.ss_url ? item : null
                }).filter((k) => k)
                y.projects = y.projects.filter((item, i, ar) => ar.indexOf(item) === i).join();
                y.todos = y.todos.filter((x) => x != "");
                y.todos = y.todos.filter((item, i, ar) => ar.indexOf(item) === i).join();
                todayTotalActivities.push(y.overall)
                return y.shots.length > 0 ? y : null
            }).filter((a) => a)

        item.activities = item.activities.sort((a, b) => sortByDate(a, b, "time_slot", 1));
        return item
    })

    hours = hours.sort((a, b) => sortByDate(a, b, "starts_at", -1));
    const allMins = [0, 10, 20, 30, 40, 50]
    hours = hours.map((x) => {
        const availableMins = []
        x.activities = x.activities.map((y) => {
            availableMins.push(addMinsToDate(new Date((y && y.time_slot) || new Date()), 30).getUTCMinutes())
            return y
        })
        allMins.forEach((z, i) => {
            if (!availableMins.includes(z)) x.activities.splice(i, 0, null)
        })
        return x
    })

    const activity_average = todayTotalActivities.reduce((sum, val) => sum + parseInt(val || 0), 0) / todayTotalActivities.length
    return {
        hours, activity_average: parseInt(activity_average || 0),
    }
}

const ss_rawData = (data) => {
    if (!data && data.length === 0) return []
    let ssData = []
    data.forEach((x) => {
        if (x.shots.length > 0) {
            let last_ss_time = undefined
            x.shots.forEach((y, i) => {
                let ssItem = { ...x, session_id: x._id }
                ssItem.project_name = x.projects.length > 0 && x.projects[0].name ? x.projects[0].name : "";
                ssItem.project = x.projects.length > 0 && x.projects[0].name ? x.projects[0].name : "";
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
                ssItem.hourTime = moment(ssItem.ss_created_at || x.start_time).format("ddd, MMM Do YYYY, h:00 a")
                ssItem.starts_at = moment(ssItem.ss_created_at || x.start_time).format("ddd, MMM Do YYYY, h:00 a")
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
    GET_SCREEN_SHOTS: async function (data, callback) {
        let sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: "",
        };

        let { org_id, userData, date, activity_level, project, user } = data || {}
        let { _id } = userData || {};

        org_id = new ObjectId(org_id)

        console.log("orgid", org_id);
        const user_id = ObjectId(user)
        const current_user_id = ObjectId(_id)
        let project_id
        if (project) project_id = ObjectId(project)

        const condition = {
            org_id,
            user_id: current_user_id,
            invite_accpeted: true
        }
        const orgMembers = await orgMemberModal.find(condition)
        if (orgMembers && orgMembers.length > 0) {
            const condition = {
                org_id,
                user_id: user_id,
                invite_accpeted: true
            }

            const orgMembers = await orgMemberModal.find(condition)
            if (orgMembers && orgMembers.length > 0) {
                const todayDateRange = {
                    "$gte": new Date(date),
                    "$lt": addDaysToDate(new Date(date), 1)
                }
                const prevDateRange = {
                    "$gte": addDaysToDate(new Date(date), -1),
                    "$lt": new Date(date)
                }

                let sessionCond = {
                    org_id,
                    user_id,
                    start_time: todayDateRange
                }

                const addDiffField = {
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
                }

                const getScreenProjectFromSessions = [
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
                            from: "to_do",
                            let: { t_id: "$todo_id" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$_id", "$$t_id"] }, }, },
                                { $project: { _id: 0, title: "$title", }, },
                            ],
                            as: "todos",
                        },
                    },
                    {
                        $lookup: {
                            from: "screen_shot",
                            let: { s_id: "$_id", project_name: "$projects.name", todo_name: "$todos.title" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$session_id", "$$s_id"] }, }, },
                                {
                                    $project: {
                                        key_event: "$key_event",
                                        mouse_event: "$mouse_event",
                                        project_name: "$$project_name",
                                        todo_name: "$$todo_name",
                                        created_at: 1,
                                        ss_url: 1
                                    },
                                },
                            ],
                            as: "shots",
                        },
                    },
                    { $unwind: "$shots" },
                ]

                if (project_id) sessionCond.project_id = project_id
                let sessions = await sessionModal.aggregate([
                    { $match: sessionCond }, ...getScreenProjectFromSessions
                ])
                const sessionsForTotalTime = await sessionModal.aggregate([
                    { $match: sessionCond }, addDiffField,
                ])

                sessionCond.start_time = prevDateRange
                const prevDaySessions = await sessionModal.aggregate([
                    { $match: sessionCond }, ...getScreenProjectFromSessions
                ])
                const prevSessionsForTotalTime = await sessionModal.aggregate([
                    { $match: sessionCond }, addDiffField,
                ])

                let todoCond = {
                    assignee_id: user_id,
                    completed: true,
                    completed_at: todayDateRange
                }
                if (project_id) todoCond.project_id = project_id
                const completedToDos = await toDoModal.aggregate([
                    { $match: todoCond },
                    {
                        $lookup: {
                            from: "project",
                            localField: "project_id",
                            foreignField: "_id",
                            as: "projectData"
                        }
                    },
                    { $unwind: "$projectData" }
                ])
                console.log("completedToDos>", completedToDos)


                // console.log("ooooo",completedToDos[0].projectData.org_id);

                var projectData = completedToDos.filter((x) => (x.projectData.org_id.toString() == org_id.toString()))

                console.log("projectData>", projectData)
                todoCond.completed_at = prevDateRange
                const prevCompletedToDos = await toDoModal.aggregate([
                    { $match: todoCond },
                    {
                        $lookup: {
                            from: "project",
                            localField: "project_id",
                            foreignField: "_id",
                            as: "projectData"
                        }
                    },
                    { $unwind: "$projectData" }
                ])
                var pre_projectData = prevCompletedToDos.filter((x) => x.projectData.org_id.toString() == org_id.toString())

                console.log("pre_projectData", pre_projectData);

                const time_total_worked = sessionsForTotalTime.reduce((sum, val) => sum + parseInt(val.difference || 0), 0)
                const time_total_worked_prev = prevSessionsForTotalTime.reduce((sum, val) => sum + parseInt(val.difference || 0), 0)
                const time_prev_day_comparison = ((time_total_worked || 0) - (time_total_worked_prev || 0)) || 0
                const tasks_completed_count = projectData.length || 0;
                const tasks_completed_count_prev = pre_projectData.length || 0;
                // const tasks_completed_count = completedToDos.length > 0 ? completedToDos[0].count || 0 : 0
                // const tasks_completed_count_prev = prevCompletedToDos.length > 0 ? prevCompletedToDos[0].count || 0 : 0
                const todayData = groupSsByHourTenMins(sessions, sessionsForTotalTime)
                const activity_average = todayData.activity_average
                const activity_average_prev = groupSsByHourTenMins(prevDaySessions).activity_average
                let hourShots = todayData.hours

                if (activity_level) hourShots = hourShots.filter((x) => {
                    x.activities = x.activities.filter((y) => {
                        if (activity_level === '>80%') return y && y.overall > 80
                        else if (activity_level === '>60%') return y && y.overall > 60
                        else if (activity_level === '<40%') return y && y.overall < 40
                        else if (activity_level === '<20%') return y && y.overall < 20
                    })
                    if (x.activities.length === 0) return false
                    return true
                })

                const result = {
                    benchmarks: {
                        time_total_worked: formatTimeToHHMMSS(time_total_worked, true, true, false),
                        time_prev_day_comparison: (time_prev_day_comparison >= 0 ? '' : '-') + formatTimeToHHMMSS(time_prev_day_comparison, true, true, false),
                        activity_average,
                        activity_prev_day_comparison: activity_average - activity_average_prev,
                        tasks_completed_count,
                        tasks_prev_day_comparison: tasks_completed_count - tasks_completed_count_prev
                    },
                    hourShots,
                    completedToDos,
                    projectData
                }
                sendData['Data'] = result
                sendData["ReturnMsg"] = "Screen shot activity";
                callback(sendData);
            }
            else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "User not found";
                callback(sendData);
            }


        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Unauthorized access";
            callback(sendData);
        }
    },



    GET_APPS: async function (data, callback) {
        let sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: "",
        };

        let { org_id, userData, date, activity_level, project, user } = data || {}
        let { _id } = userData || {};

        org_id = new ObjectId(org_id)

        console.log("orgid", org_id);
        const user_id = ObjectId(user)
        const current_user_id = ObjectId(_id)
        let get_date = new Date(data.date);
        const start_date = new Date(data.date);
        const end_date = addDaysToDate(start_date, 1);


        const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
        const now = new Date();


        let project_id
        if (project) project_id = ObjectId(project)

        const condition = {
            org_id,
            user_id: current_user_id,
            invite_accpeted: true
        }
        const orgMembers = await orgMemberModal.find(condition)
        if (orgMembers && orgMembers.length > 0) {
            const condition = {
                org_id,
                user_id: user_id,
                invite_accpeted: true
            }

            const orgMembers = await orgMemberModal.find(condition)
            if (orgMembers && orgMembers.length > 0) {
                const todayDateRange = {
                    "$gte": new Date(date),
                    "$lt": addDaysToDate(new Date(date), 1)
                }

                let sessionCond = {
                    $and: [
                        { org_id },
                        { user_id },
                        { $and: [{ $or: [{ start_time: { $gte: start_date } }, { end_time: { $gte: start_date } }, { end_time: null }] }, { start_time: { $lt: last_date } }] },
                        // { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
                    ]
                }

                const addDiffField = {
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
                }


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

                if (project_id) sessionCond.project_id = project_id
                let sessions = await sessionModal.aggregate([
                    { $match: sessionCond }, ...getScreenProjectFromSessions
                ])

                for (i = 0; i < sessions.length; i++) {
                    if (sessions[i].end_time == null) {
                        if ((now - last_date) < 0) { sessions[i].end_time = now }
                        else { sessions[i].end_time = last_date }
                    }
                }

                let scr_shot_data = ss_rawData(sessions).filter((x) => x.task)
                // console.log("sessions>", sessions)
                let task_data = [];
                let app_data = scr_shot_data.forEach((z) => {
                    if (z.task.length > 0) {
                        z.task.forEach((y) => {
                            let task_item = {}
                            let obj_app = {}
                            if (y.app_name) {
                                task_item.starts_at = z.starts_at
                                task_item.project = z.project
                                obj_app.app_name = y.app_name,
                                task_item.app_name = y.app_name
                                    obj_app.spent_time = y.spent_time,
                                    task_item.app_page = [obj_app],
                                    
                                    // task_item.sessions_count = obj_app.length
                                    task_item.time_in_sec = y.spent_time.split(':'),
                                    task_item.time_in_sec = (task_item.time_in_sec[0] * 60 * 60 + task_item.time_in_sec[1] * 60 + task_item.time_in_sec[2] * 1);
                               
                                // task_item.sessionCount = y.task_item.app_page.length
                                
                                task_item.user_name = z.user_name
                                task_item.user_name = z.ss_id
                                // task_item.date = z.date
                                
                                task_item.sessions_count = obj_app.length,
                                task_data.push(task_item)
                            } else {
                                delete y
                            }
                        })
                    }
                })


                if (task_data.length > 0) {
                    if (task_data.length > 1) {
                        for (i = 0; i < (task_data.length - 1); i++) {
                            let total_sec = 0;
                            let k = 0;
                            if (task_data[i]) {
                                for (j = i + 1; j < (task_data.length); j++) {
                                    if (
                                        task_data[j] &&
                                        (task_data[i].starts_at == task_data[j].starts_at) &&
                                        (task_data[i].project == task_data[j].project) &&
                                        (task_data[i].app_name == task_data[j].app_name)) {

                                        task_data[i].app_page.push(task_data[j].app_page[0])
                                        // k++;
                                        // console.log("kkk",k)
                                        // activity = activity + finalData[j].activity
                                        total_sec += task_data[j].time_in_sec
                                        delete task_data[j];
                                    }
                                }
                                task_data[i].total_sec = task_data[i].time_in_sec + total_sec;
                                var sum_time = commonController.formatTimeToHHMMSS(task_data[i].total_sec, isHr = true, isMin = true, isSec = true)
                                task_data[i].time_spent = sum_time;
                                task_data[i].sessions_count = task_data[i].app_page.length;
                                delete task_data[i].total_sec
                                delete task_data[i].time_in_sec
                                delete task_data[i].user_name
                                delete task_data[i].app_page
                            }
                        }
                    } else {
                        task_data[0].total_sec = task_data[0].time_in_sec;
                        var sum_time = commonController.formatTimeToHHMMSS(task_data[0].total_sec, isHr = true, isMin = true, isSec = true)
                        task_data[0].time_spent = sum_time;
                        task_data[0].sessions_count = task_data[0].app_page.length;
                        delete task_data[0].total_sec
                        delete task_data[0].time_in_sec
                        delete task_data[0].user_name
                        delete task_data[0].app_page
                    }
                }
                task_data = task_data.filter((x) => x)

                // for (i = 0; i < task_data.length; i++) {
                //     // console.log("length", task_data[i].app_page.length);
                //     task_data[i].uniqueId = (i + 1) * 1000;
                //     for (j = 0; j < task_data[i].app_page.length; j++) {
                //         task_data[i].app_page[j].u_Id = ((i + 1) * 1000) + (j + 1);
                //     }
                // }

                sendData['Data'] = task_data
                sendData["ReturnMsg"] = "APPs activity";
                callback(sendData);
            }
            else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "User not found";
                callback(sendData);
            }


        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Unauthorized access";
            callback(sendData);
        }
    },


    GET_URL: async function (data, callback) {
        let sendData = {
            ReturnCode: 200,
            err: 0,
            Data: [],
            ReturnMsg: "",
        };

        console.log("data>", data)

        let { org_id, userData, date, activity_level, project, user } = data || {}
        let { _id } = userData || {};

        org_id = ObjectId(org_id)
        const user_id = ObjectId(user)
        const current_user_id = ObjectId(_id)
        let get_date = new Date(data.date);
        const start_date = new Date(data.date);
        const end_date = addDaysToDate(start_date, 1);

        const last_date = new Date(new Date(new Date(new Date(get_date.setHours(23)).setMinutes(59))).setSeconds(59))
        const now = new Date();

        let project_id = ""
        if (project) project_id = ObjectId(project)

        const condition = {
            org_id,
            user_id: current_user_id,
            invite_accpeted: true
        }
        const orgMembers = await orgMemberModal.find(condition)
        if (orgMembers && orgMembers.length > 0) {
            const condition = {
                org_id,
                user_id: user_id,
                invite_accpeted: true
            }

            const orgMembers = await orgMemberModal.find(condition)
            if (orgMembers && orgMembers.length > 0) {

                const todayDateRange = {
                    "$gte": new Date(date),
                    "$lt": addDaysToDate(new Date(date), 1)
                }

                let sessionCond = {
                    $and: [
                        { org_id },
                        { user_id },
                        { $and: [{ $or: [{ start_time: { $gte: start_date } }, { end_time: { $gte: start_date } }, { end_time: null }] }, { start_time: { $lt: last_date } }] },
                        // { $or: [{ end_time: null }, { end_time: { $lt: end_date } },] }
                    ]
                }

                const addDiffField = {
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
                }

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
                                { $project: { name: "$name", profile_img: "$profile_img" }, },
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

                if (project_id) sessionCond.project_id = project_id
                let sessions = await sessionModal.aggregate([
                    { $match: sessionCond }, ...getScreenProjectFromSessions
                ])

                for (i = 0; i < sessions.length; i++) {
                    if (sessions[i].end_time == null) {
                        if ((now - last_date) < 0) { sessions[i].end_time = now }
                        else { sessions[i].end_time = last_date }
                    }
                }

                let scr_shot_data = ss_rawData(sessions).filter((x) => x.task)
                // console.log("sessions>", sessions)
                let task_data = [];
                let url_data = scr_shot_data.forEach((z) => {
                    if (z.task.length > 0) {
                        z.task.forEach((y) => {
                            let task_item = {}
                            let obj_url = {}
                            if (y.url) {
                                obj_url.project_name = z.project_name,
                                    obj_url.title = y.title,
                                    obj_url.url = y.url,
                                    obj_url.spent_time = y.spent_time,
                                    task_item.url_page = [obj_url]
                                task_item.time_in_sec = y.spent_time.split(':'),
                                    task_item.time_in_sec = (task_item.time_in_sec[0] * 60 * 60 + task_item.time_in_sec[1] * 60 + task_item.time_in_sec[2] * 1);
                                task_item.base_url = y.url.split('/')[2],
                                    // task_item.project_name = z.project_name
                                    task_item.userId = z.userId
                                task_item.user_name = z.user_name
                                task_item.ss_id = z.ss_id
                                // task_item.date = z.date
                                task_item.hourTime = z.hourTime
                                task_data.push(task_item)
                            } else {
                                delete y
                            }
                        })
                    }
                })

                if (task_data.length > 0) {
                    if (task_data.length > 1) {
                        for (i = 0; i < (task_data.length - 1); i++) {
                            let total_sec = 0;
                            let k = 0;
                            if (task_data[i]) {
                                for (j = i + 1; j < (task_data.length); j++) {
                                    if (
                                        task_data[j] &&
                                        (task_data[i].hourTime == task_data[j].hourTime) &&
                                        (task_data[i].project_name == task_data[j].project_name) &&
                                        (task_data[i].base_url == task_data[j].base_url)) {

                                        task_data[i].url_page.push(task_data[j].url_page[0])
                                        // k++;
                                        // console.log("kkk",k)
                                        // activity = activity + finalData[j].activity
                                        total_sec += task_data[j].time_in_sec
                                        delete task_data[j];
                                    }
                                }
                                task_data[i].total_sec = task_data[i].time_in_sec + total_sec;
                                var sum_time = commonController.formatTimeToHHMMSS(task_data[i].total_sec, isHr = true, isMin = true, isSec = true)
                                task_data[i].time_spent = sum_time;
                                delete task_data[i].total_sec
                                delete task_data[i].time_in_sec
                            }
                        }
                    } else {
                        task_data[0].total_sec = task_data[0].time_in_sec
                        console.log("task_data[0].total_sec>", task_data[0].total_sec)
                        var sum_time = commonController.formatTimeToHHMMSS(task_data[0].total_sec, isHr = true, isMin = true, isSec = true)
                        task_data[0].time_spent = sum_time;
                        delete task_data[0].total_sec
                        delete task_data[0].time_in_sec
                    }
                }
                task_data = task_data.filter((x) => x)

                for (let k = 1000, i = 0; i < task_data.length; i++) {
                    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                    let string_length = 9;
                    let randomstring = '';
                    for (let n = 0; n < string_length; n++) {
                        var rnum = Math.floor(Math.random() * chars.length);
                        randomstring += chars.substring(rnum, rnum + 1);
                    }
                    let m = 1000 * (i + 1);
                    task_data[i].uniqueId = k;
                    task_data[i].code = randomstring;
                    for (j = 0; j < task_data[i].url_page.length; j++) {
                        task_data[i].url_page[j].u_Id = m + j;
                        task_data[i].url_page[j].product_code = randomstring;
                    }
                    k++
                }

                // if (activity_level) hourShots = hourShots.filter((x) => {
                //     x.activities = x.activities.filter((y) => {
                //         if (activity_level === '>80%') return y && y.overall > 80
                //         else if (activity_level === '>60%') return y && y.overall > 60
                //         else if (activity_level === '<40%') return y && y.overall < 40
                //         else if (activity_level === '<20%') return y && y.overall < 20
                //     })
                //     if (x.activities.length === 0) return false
                //     return true
                // })

                sendData['Data'] = task_data
                sendData["ReturnMsg"] = "URL activity";
                callback(sendData);
            }
            else {
                sendData["err"] = 1;
                sendData["ReturnMsg"] = "User not found";
                callback(sendData);
            }


        } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Unauthorized access";
            callback(sendData);
        }
    },
};

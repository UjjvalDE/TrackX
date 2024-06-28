const { find } = require("underscore");
const organization_memberModal = require("../../models/organization/organization_member");
const projectModal = require("../../models/project/project");
const to_doModal = require("../../models/to_do/to_do");
const userModal = require("../../models/user/user");
const user = require("../user/user");
const project_MemberModel = require("../../models/project/project_member.js");

module.exports = {
  SAVE: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var user_id = data.userData._id;
    var project_id = data.project_id;
    var title = data.title;
    delete data["userData"];
    var condition = {
      _id: project_id,
    };
    var projectdata = await projectModal.find(condition);

    if (projectdata && projectdata.length > 0) {
      var org_id = projectdata[0].org_id;

      var condition = {
        user_id: ObjectId(user_id),
        org_id: ObjectId(org_id),
      };
      var org_member = await organization_memberModal.find(condition);

      if (org_member && org_member.length > 0) {
        var access = org_member[0].role;

        // if (title.match(/^[0-9a-fA-F]{24}$/)) {
        var todo_condition = title.match(/^[0-9a-fA-F]{24}$/) ? {
          _id: ObjectId(data.title),
          completed: false,
        } : {
          title: data.title,
          completed: false,
        }


        var todoData = await to_doModal.findOne(todo_condition);
        if (!todoData) {
          data.createdby_id = user_id;
          data.created_at = new Date();
          data.assignee_id = user_id;
          var savedata = await to_doModal.create(data);
          sendData["Data"] = savedata;
          sendData["ReturnMsg"] = "created successfully";
          callback(sendData);

        }
        else {
          sendData["err"] = 0;
          sendData["Data"] = todoData;
          sendData["ReturnMsg"] = "created successfully";
          callback(sendData);
        }
      } else {
        sendData["ReturnMsg"] = "data not found";
        sendData["ReturnCode"] = 200;
        sendData["err"] = 1;
        callback(sendData);
      }
    } else {
      sendData["ReturnMsg"] = "please enter valid project details";
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      callback(sendData);
    }
  },
  WEBSAVE: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var user_id = data.userData._id;
    var project_id = data.project_id;

    delete data["userData"];
    var condition = {
      _id: project_id,
    };
    var projectdata = await projectModal.find(condition);

    if (projectdata && projectdata.length > 0) {
      var org_id = projectdata[0].org_id;

      var condition = {
        user_id: user_id,
        org_id: org_id,
      };
      var org_member = await organization_memberModal.find(condition);

      if (org_member && org_member.length > 0) {
        var access = org_member[0].role;

        if (data.title != "") {
          if (data.assignee_id) {
            data.createdby_id = user_id;
            data.created_at = new Date();
            var savedata = await to_doModal.create(data);

            sendData["Data"] = savedata;
            sendData["ReturnMsg"] = "created successfully";
            callback(sendData);
          } else {
            data.createdby_id = user_id;
            data.assignee_id = user_id;
            data.created_at = new Date();
            var savedata = await to_doModal.create(data);

            sendData["Data"] = savedata;
            sendData["ReturnMsg"] = "created successfully";
            callback(sendData);
          }
        } else {
          sendData["ReturnMsg"] = "please enter valid title";
          sendData["ReturnCode"] = 200;
          sendData["err"] = 1;
          callback(sendData);
        }
      } else {
        sendData["ReturnMsg"] = "data not found";
        sendData["ReturnCode"] = 200;
        sendData["err"] = 1;
        callback(sendData);
      }
    } else {
      sendData["ReturnMsg"] = "please enter valid project details";
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      callback(sendData);
    }
  },
  ONELIST: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var id = data.todo_id;

    var condition = {
      _id: id,
    };

    var finddata = await to_doModal.find(condition);

    if (finddata.length > 0) {
      sendData["Data"] = finddata;
      sendData["ReturnMsg"] = "get successfully";
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 200;
      sendData["ReturnMsg"] = "no data found";
      sendData["err"] = 1;
      callback(sendData);
    }
  },

  ALL_LIST: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    console.log("data>>123", data);
    var project_id = data.project_id;
    var assignee_id = data.assignee_id;
    var org_id = data.org_id;
    var title = data.title;
    let start_date = new Date(data.start_date);
    let end_date1 = new Date(data.end_date);
    let end_date = new Date(end_date1.setDate(end_date1.getDate() + 1));
    let final_data = [];
    let finaldata = [];
    let countlist = [];

    var roleCheckCondition = {
      user_id: ObjectId(data.userData._id),
      org_id: ObjectId(org_id)
    }
    var userRoleData = await organization_memberModal.findOne(roleCheckCondition)
    console.log("userRoleData>>", userRoleData)
    var matchcondition = {}

    if (data.start_date && data.end_date) {
      matchcondition.created_at = { $gte: new Date(data.start_date), $lt: new Date(end_date) }
    }

    if (data.title) { matchcondition.title = { $regex: title || "", $options: "-i" }; }

    if (data.completed == true || data.completed == false) { matchcondition.completed = data.completed }

    if (assignee_id && assignee_id.length > 0) { matchcondition.assignee_id = ObjectId(assignee_id[0]) };

    var listcountcondition = [
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
        $match: { "project_data.org_id": ObjectId(org_id) },
      },
      {
        $lookup: {
          from: "user",
          localField: "assignee_id",
          foreignField: "_id",
          as: "user_data",
        },
      },
      { $unwind: "$user_data" },
      {
        $addFields: {
          assignee_name: String("$user_data.name"),
          profile_img: String("$user_data.profile_img"),
        },
      },
      // {
      //   $sort : {created_at : -1}
      // },
      {
        $project: {
          user_data: 0,
          project_data: 0
        },
      },
      
    ];

    if ((userRoleData.role !== 0) && (userRoleData.role !== 1) && (userRoleData.role !== 2) && (userRoleData.role !== 3)) {

      let find_condition = { "user_id": ObjectId(data.userData._id), "org_id": ObjectId(org_id) }

      if (data.project_id) find_condition.project_id = ObjectId(data.project_id)

      const project_member = await project_MemberModel.find(find_condition)
      console.log("project_member>>>", project_member)


      for (i = 0; i < project_member.length; i++) {
        if (project_member[i].role == 0) {

          matchcondition.project_id = ObjectId(project_member[i].project_id)

          var to_dolist = await to_doModal.aggregate([{ $match: matchcondition }, ...listcountcondition,]);
          console.log("to_dolist>>>>>", to_dolist)
          for (j = 0; j < to_dolist.length; j++) {
            final_data.push(to_dolist[j])
          }
          j = 0;
        }
        else {

          let match_assignee = { $or: [{ assignee_id: ObjectId(data.userData._id) }, { createdby_id: ObjectId(data.userData._id) }] }

          matchcondition.project_id = ObjectId(project_member[i].project_id)

          var to_dolist = await to_doModal.aggregate([{ $match: matchcondition }, { $match: match_assignee }, ...listcountcondition,]);

          for (j = 0; j < to_dolist.length; j++) {
            final_data.push(to_dolist[j])
          }
          j = 0;
        }
      }

      var start = (data.start != "null") ? parseInt(data.start) : 1;
      var limit = (data.limit != "null") ? parseInt(data.limit) : final_data.length || 1;
      start = (start - 1) * limit
      limit = start + limit

      finaldata = final_data.slice(start, limit)
    } else {

      if (project_id) { matchcondition.project_id = ObjectId(project_id) };

      countlist = await to_doModal.aggregate([{ $match: matchcondition }, ...listcountcondition]);

      var start = (data.start != "null") ? parseInt(data.start) : 1;
      var limit = (data.limit != "null") ? parseInt(data.limit) : countlist.length || 1;
      start = (start - 1) * limit;

      var to_dolist = await to_doModal.aggregate([{ $match: matchcondition }, ...listcountcondition, { $skip: start }, { $limit: limit } , {$sort : {created_at : -1}}]);
    }
    console.log("to_dolist>", to_dolist)

    if (to_dolist.length > 0 || final_data.length > 0) {
      sendData["Data"] = {
        count: (countlist.length > 0) ? countlist.length : final_data.length,
        list: (to_dolist.length > 0) ? to_dolist : finaldata,
      };

      sendData["ReturnMsg"] = "to_do  list";
      callback(sendData);
    } else {
      sendData["err"] = 1;
      sendData["ReturnMsg"] = "Data not found";
      callback(sendData);
    }
  },

  REMOVE: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var id = data.id;

    var condition = {
      _id: id,
    };

    var finddata = await to_doModal.find(condition);

    if (finddata.length > 0) {
      var deletedata = await to_doModal.deleteOne(condition);

      sendData["ReturnMsg"] = "deleted successfully";
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 200;
      sendData["ReturnMsg"] = "no data found";
      sendData["err"] = 1;
      callback(sendData);
    }
  },

  UPDATE: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var id = data.id;

    var condition = {
      _id: id,
    };

    var finddata = await to_doModal.find(condition);

    if (finddata && finddata.length > 0) {
      if (data.completed) data.completed_at = new Date();
      var updatedata = await to_doModal.updateOne(condition, data);

      sendData["Data"] = updatedata;
      sendData["ReturnCode"] = 200;
      sendData["ReturnMsg"] = "updated successfully";
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 200;
      sendData["ReturnMsg"] = "no data found";
      sendData["err"] = 1;
      callback(sendData);
    }
  },

  TODO_LIST_BY_PROJECT_ID: async function (data, callback) {
    let sendData = {
      ReturnCode: 200,
      err: 0,
      Data: [],
      ReturnMsg: "",
    };

    const projectId = data.projectId;
    const user_id = data.userData._id;
    const condition = {
      user_id: ObjectId(user_id),
    };
    const org_member = await organization_memberModal.find(condition);

    if (org_member.length > 0) {
      const toDoConditions = [
        {
          $match: {
            project_id: ObjectId(projectId),
            assignee_id: ObjectId(user_id),
            completed: false,
            title: { $regex: data.title || "", $options: "-i" },
          },
        },
        {
          $project: {
            title: 1,
          },
        },
      ];

      var toDoList = await to_doModal.aggregate(toDoConditions);

      if (toDoList.length > 0) {
        const data = {
          count: toDoList.length,
          list: toDoList,
        };
        sendData["Data"] = data;
        sendData["ReturnMsg"] = "To do list by project id";
        callback(sendData);
      } else {
        sendData["err"] = 1;
        sendData["ReturnMsg"] = "Data not found";
        callback(sendData);
      }
    } else {
      sendData["err"] = 1;
      sendData["ReturnMsg"] = "Data not found";
      callback(sendData);
    }
  },
};

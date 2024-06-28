const projectModal = require("../../models/project/project");
const todoModal = require("../../models/to_do/to_do");
const sessionModal = require("../../models/session/session");
const screen_shotmodel = require("../../models/screen_shot/screen_shot")
const orgMemberModel = require('../../models/organization/organization_member.js');
const { formatTimeToHHMMSS } = require("../common");

module.exports = {
  CREATE_SESSION: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };


    let { todo_id, project_id, user_id } = data || {};

    todo_id = ObjectId(todo_id)
    project_id = ObjectId(project_id)
    user_id = ObjectId(user_id)

    const conditions = {
      user_id,
      invite_accpeted: true
    }
    const org_member = await orgMemberModel.find(conditions)

    if (org_member.length > 0) {
      const projects = await projectModal.find({ _id: project_id });
      if (projects.length > 0) {
        data.org_id = projects[0].org_id
        data.created_at = new Date()
        data.start_time = new Date()
        data.end_time = ""
        const sessioncondition = {
          user_id: ObjectId(user_id),
          end_time: ""
        }
        const sessionData = await sessionModal.find(sessioncondition)
        if (sessionData.length > 0) {
          // var updatedata = {
          //   updated_at: new Date(),
          //   end_time: new Date(),
          // };
          // const respData = await sessionModal.updateMany(sessioncondition, updatedata);

          sendData["err"] = 1;
          sendData["ReturnMsg"] = "Session is runing";
          callback(sendData);
        } else {
          const session = await sessionModal.create(data);
          if (session) {
            sendData["Data"] = session;
            sendData["ReturnMsg"] = "Session created successfully";
            callback(sendData);
          } else {
            sendData["err"] = 1;
            sendData["ReturnMsg"] = "Could not create session, please try again later";
            callback(sendData);
          }
        }

      } else {
        sendData["err"] = 1;
        sendData["ReturnMsg"] = "Project does not exist";
        callback(sendData);
      }
    } else {
      sendData['err'] = 1;
      sendData['ReturnMsg'] = "Unauthorized access"
      callback(sendData);
    }
  },
  // CREATE_SESSION: async function (data, callback) {
  //   var sendData = {
  //     ReturnCode: 200,
  //     err: 0,
  //     Data: {},
  //     ReturnMsg: "",
  //   };
  //   console.log("data>>", data);

  //   let { todo_id, project_id, user_id } = data || {};

  //   todo_id = ObjectId(todo_id)
  //   project_id = ObjectId(project_id)
  //   user_id = ObjectId(user_id)

  //   const conditions = {
  //     user_id,
  //     invite_accpeted: true
  //   }
  //   const org_member = await orgMemberModel.find(conditions)

  //   if (org_member.length > 0) {
  //     const projects = await projectModal.find({ _id: project_id });
  //     if (projects.length > 0) {
  //       data.org_id = projects[0].org_id
  //       data.created_at = new Date()
  //       data.start_time = new Date()
  //       data.end_time = ""

  //       // if (sessionData.length > 0) {
  //       //   sendData["err"] = 1;
  //       //   sendData["ReturnMsg"] = "Session is runing";
  //       //   callback(sendData);
  //       // } else {
  //       const session = await sessionModal.create(data);
  //       if (session) {
  //       const sessioncondition = {
  //         user_id: ObjectId(user_id),
  //         end_time: null
  //       }
  //       const sessionData = await sessionModal.find(sessioncondition).limit(1).sort({"created_at":-1})
  //       console.log("sessionData>>>>>>",sessionData);
  //       if(sessionData > 0){
  //         const condition={
  //           "_id":sessionData[0]._id
  //         }
  //         var updatedata = {
  //           updated_at: new Date(),
  //           end_time: new Date(),
  //         };
  //         const respData = await sessionModal.updateOne(condition, updatedata);
  //         console.log("respData>>>>",respData);
  //         console.log("updatedata>>>>",updatedata);
  //         console.log("condition>>>>",condition);
  //         sendData["ReturnMsg"] ="Session is runing";
  //         sendData["err"] =1;
  //         callback(sendData);
  //       }else{
  //         sendData["Data"] = session;
  //         sendData["ReturnMsg"] ="Session created successfully";
  //         sendData["err"] = 0;
  //         callback(sendData);
  //       }
  //       } else {
  //         sendData["err"] = 1;
  //         sendData["ReturnMsg"] = "Could not create session, please try again later";
  //         callback(sendData);
  //       }
  //       // }

  //     } else {
  //       sendData["err"] = 1;
  //       sendData["ReturnMsg"] = "Project does not exist";
  //       callback(sendData);
  //     }
  //   } else {
  //     sendData['err'] = 1;
  //     sendData['ReturnMsg'] = "Unauthorized access"
  //     callback(sendData);
  //   }
  // },

  GET_ONE_SESSION: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var _id = data._id;

    var condition = {
      _id: _id,
    };

    var sessiondataa = await sessionModal.find(condition);

    if (sessiondataa && sessiondataa.length > 0) {
      sessiondataa = sessiondataa[0];

      sendData["ReturnCode"] = 200;
      sendData["err"] = 0;
      sendData["Data"] = sessiondataa;
      sendData["ReturnMsg"] = "Successfully get your Session!";
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "Something is wrong";
      callback(sendData);
    }
  },

  GET_ALL_SESSION: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var org_id = data.org_id;
    var user_id = data.user_id;
    var project_id = data.project_id;

    var condition = {
      user_id: ObjectId(user_id),
    };

    if (project_id && project_id.length > 0) {
      for (var i = 0; i < project_id.length; i++) {
        project_id[i] = ObjectId(project_id[i]);
      }
      condition.project_id = { $in: project_id };
    }

    var listcondition = [
      {
        $match: condition,
      },
    ];

    var orgdata = await projectModal.find({ org_id: org_id });

    var sessionlist = await sessionModal.aggregate(listcondition);

    if (orgdata && orgdata.length > 0) {
      sendData["Data"] = orgdata;
      sendData["ReturnMsg"] = "Org list";
      callback(sendData);
    } else if (sessionlist && sessionlist.length > 0) {
      sendData["Data"] = sessionlist;
      sendData["ReturnMsg"] = "Session list";
      callback(sendData);
    } else {
      sendData["err"] = 1;
      sendData["ReturnMsg"] = "Data not found";
      callback(sendData);
    }
  },

  UPDATE_SESSION: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };
    var _id = data._id;
    var condition = {
      _id: _id,
    };
    var todo_id = data.todo_id;



    var sessiondataa = await sessionModal.find(condition);

    if (sessiondataa && sessiondataa.length > 0) {
      sessiondataa = sessiondataa[0];

      var updatedata = {
        updated_at: new Date(),
        end_time: new Date(),
      };
      if (todo_id) { updatedata.todo_id = todo_id }

      const respData = await sessionModal.updateOne(condition, updatedata);

      sendData["ReturnCode"] = 200;
      sendData["err"] = 0;
      sendData["Data"] = respData;
      sendData["ReturnMsg"] = "Your session updated successfully!";
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "Something is wrong";
      callback(sendData);
    }
  },
  FOURCE_UPDATE_SESSION: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };


    var condition = {
      "user_id": ObjectId(data.userData._id),
      "end_time": null
    };

    var sessiondata = await sessionModal.find(condition);

    if (sessiondata && sessiondata.length > 0) {
      sessiondata = sessiondata[0];
      var screen_shotdata = await screen_shotmodel.find({ "session_id": ObjectId(sessiondata._id) }).limit(1).sort({ "created_at": -1 })

      var updatedata
      if (screen_shotdata && screen_shotdata.length > 0) {
        screen_shotdata = screen_shotdata[0];
        updatedata = {
          updated_at: screen_shotdata.created_at,
          end_time: screen_shotdata.created_at
        };
      }
      else {
        updatedata = {
          updated_at: sessiondata.created_at,
          end_time: sessiondata.created_at
        };
      }

      const respData = await sessionModal.updateOne(condition, updatedata);
      sendData["ReturnCode"] = 200;
      sendData["err"] = 0;
      sendData["Data"] = respData;
      sendData["ReturnMsg"] = "Your session updated successfully!";
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "Something is wrong";
      callback(sendData);
    }
  },
  DELETE_SESSION: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };


    var _id = data._id;

    var condition = {
      _id,
    };

    var screencondition = {
      session_id: _id,
    };

    var sessiondataa = await sessionModal.find(condition);


    if (sessiondataa && sessiondataa.length > 0) {
      sessiondataa = sessiondataa[0];

      const respData = await sessionModal.deleteOne(condition);

      const resdata = await screen_shotmodel.deleteMany(screencondition);

      sendData["ReturnCode"] = 200;
      sendData["err"] = 0;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "Your session  deleted successfully!";
      callback(sendData);
    } else {
      sendData["ReturnCode"] = 200;
      sendData["err"] = 1;
      sendData["Data"] = [];
      sendData["ReturnMsg"] = "Session is wrong";
      callback(sendData);
    }
  },

  GET_TODAY_WEEKLY_SESSION_TIME: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    const { project_id, userData } = data || {};
    const { _id: user_id } = userData || {};
    const orglimitcondition = [
      {
        $match: {
          "user_id": ObjectId(user_id),
          "invite_accpeted": true
        }
      },
      {
        $lookup: {
          from: "project",
          let: { p_id: ObjectId(project_id), org_id: "$org_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$_id", "$$p_id"] },
                    { $eq: ["$org_id", "$$org_id"] },
                  ]
                },
              },
            },
          ],
          as: "projectsData",
        },

      },
      { $unwind: "$projectsData" },
      {
        $project: {
          _id: 0,
          weekly_limit: 1
        }
      }

    ]

    const org_member = await orgMemberModel.aggregate(orglimitcondition)

    if (org_member.length > 0) {
      var startOfWeek = new Date(moment().startOf('week').add(1, 'day').toDate());
      const condition = [
        {
          $match: {
            "project_id": ObjectId(project_id),
            "user_id": ObjectId(user_id),
            // Filter by created_at to get data of last 7 days only
            "created_at": {
              $gte: startOfWeek
            }
          }
        },
        {
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
        },
      ]

      let sessionData = await sessionModal.aggregate(condition);
      // const project = await orgMemberModel.find({ _id: ObjectId(user_id), org_id: org_member})
      const projectLimit = org_member && org_member.length > 0 && org_member[0].weekly_limit ? `${org_member[0].weekly_limit}:00` : "00:00"

      if (sessionData.length > 0) {
        const WeeklySeconds = sessionData.reduce((sum, val) => sum + parseInt(val.difference || 0), 0)
        const todaySeconds = sessionData.filter((x) => {
          return new Date(x.created_at).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]
        }).reduce((sum, val) => sum + parseInt(val.difference || 0), 0)

        const result = {
          today: formatTimeToHHMMSS(todaySeconds, true, true, false),
          weekly: formatTimeToHHMMSS(WeeklySeconds, true, true, false),
          limit: projectLimit,
        }
        sendData["Data"] = result;
        sendData["ReturnMsg"] = "Today and weekly worked time by project";
        callback(sendData);
      } else {
        const result = {
          today: '00:00',
          weekly: '00:00',
          limit: projectLimit,
        }
        sendData["Data"] = result;
        sendData["ReturnMsg"] = "Today and weekly worked time by project";
        callback(sendData);
      }
    } else {
      sendData['err'] = 1;
      sendData['ReturnMsg'] = "Unauthorized access"
      callback(sendData);
    }
  },
};
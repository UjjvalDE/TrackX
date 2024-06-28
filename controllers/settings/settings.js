const organizationModal = require("../../models/organization/organization");
const organization_memberModal = require("../../models/organization/organization_member");

module.exports = {
  DEFAULT_PROJECT_ROLE: async function (data, callback) {
    var sendData = {
      ReturnCode: 200,
      err: 0,
      Data: {},
      ReturnMsg: "",
    };

    var id = data.org_id;

    var condition = {
      _id: id,
    };

    var update = {
      default_project_role: data.defaultRole,
    };

    var finddata = await organizationModal.find(condition);

    if (finddata && finddata.length > 0) {
      if (!data.userId) {
        var condition2 = {
          org_id: id,
        };

        var updatedata = await organizationModal.updateOne(condition, update);
        var updatedata = await organization_memberModal.updateMany(
          condition2,
          update
        );

        sendData["Data"] = updatedata;
        sendData["ReturnCode"] = 200;
        sendData["ReturnMsg"] = "Updated successfully";
        callback(sendData);
      } else {
        var userdata = {
          user_id: data.userId,
          org_id:id,
        };

        var updatedata = await organization_memberModal.updateOne(
          userdata,
          update
        );
        sendData["Data"] = updatedata;
        sendData["ReturnCode"] = 200;
        sendData["ReturnMsg"] = "Updated successfully";
        callback(sendData);
      }
    } else {
      sendData["ReturnCode"] = 200;
      sendData["ReturnMsg"] = "No data found";
      sendData["err"] = 1;
      callback(sendData);
    }
  },
};

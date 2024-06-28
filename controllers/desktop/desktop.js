const desktopModal = require("../../models/desktop/desktop");

module.exports={
    GET_SYSTEM: async function (data, callback) {
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
            file_extension: data.extension
        }
  
        var finddata = await desktopModal.find(condition).sort({"version":-1,"created_at" : -1}).limit(1)
    
        if (finddata.length > 0) {            
            sendData['ReturnCode'] = 200;
            sendData['err'] = 0;
            sendData['Data'] = finddata;
            sendData['ReturnMsg'] = "DATA";
            callback(sendData);
    
        } else {
            sendData['ReturnCode'] = 200;
            sendData['err'] = 1;
            sendData['Data'] = [];
            sendData['ReturnMsg'] = "No record found";
            callback(sendData);
        }
    },
}

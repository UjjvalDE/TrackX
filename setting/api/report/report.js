const { body, header, validationResult, param } = require("express-validator");
const { pdfUpload } = require("../../../uploads3");
const path = require("path");
var upload = multer({ dest: "./views" });
module.exports = {
  BindUrl: function () {

    app.post("/api/report/:org_id/weekly",
      header("authorization").not().isEmpty().trim(),
      param("org_id").not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid org_id"),
      body("start_date").not().isEmpty().trim().withMessage("please valid start_date"),
      body("end_date").not().isEmpty().trim().withMessage("please valid end_date"),
      body("tab_type").not().isEmpty().trim(),
      async (req, res) => {
        try {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            //calling controller function
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                const data = req.body;
                data.org_id = req.params.org_id;
                data.userData = respData.Data;

                reportApiController.GET_WEEK_REPORT(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                });
              }
            });
          }
        } catch (err) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );
    // Time & Activity report
    app.post("/api/report/time_activity/:org_id",
      header("authorization").not().isEmpty().trim(),
      param("org_id").not().isEmpty().trim().isLength({ min: 24 }).withMessage("please vaild organizationId"),
      body("tab_type").not().isEmpty().trim(),
      body("start_date").not().isEmpty().trim(),
      body("end_date").not().isEmpty().trim(),
      async (req, res) => {
        try {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                //calling controller function
                var data = req.body;
                var org_id = req.params.org_id;
                data["user_id"] = respData.Data._id;
                data["org_id"] = org_id;
                console.log("data>", data);
                reportApiController.TIME_ACTIVITY_REPORT(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                }
                );
              }
            });
          }
        } catch (err) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );
    // Weekly limit report
    app.post("/api/report/weekly_limit/:org_id",
      header("authorization").not().isEmpty().trim(),
      param("org_id").not().isEmpty().trim().isLength({ min: 24 }).withMessage("please vaild organizationId"),
      body("tab_type").not().isEmpty().trim(),
      body("start_date").not().isEmpty().trim(),
      body("end_date").not().isEmpty().trim(),
      async (req, res) => {
        try {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                //calling controller function
                var data = req.body;
                var org_id = req.params.org_id;
                data["user_id"] = respData.Data._id;
                data["org_id"] = org_id;
                console.log("data>", data);
                reportApiController.WEEKLY_LIMIT_REPORT(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                }
                );
              }
            });
          }
        } catch (err) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );
    // Work session report
    app.post("/api/report/work_session/:org_id",
      header("authorization").not().isEmpty().trim(),
      param("org_id").not().isEmpty().trim().isLength({ min: 24 }).withMessage("please vaild organizationId"),
      body("tab_type").not().isEmpty().trim(),
      body("start_date").not().isEmpty().trim(),
      body("end_date").not().isEmpty().trim(),
      async (req, res) => {
        try {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                //calling controller function
                var data = req.body;
                var org_id = req.params.org_id;
                data["user_id"] = respData.Data._id;
                data["org_id"] = org_id;
                console.log("data>", data);
                reportApiController.WORK_SESSION_REPORT(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                }
                );
              }
            });
          }
        } catch (err) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );


    app.post("/api/report/daily_limit/:org_id",
      header("authorization").not().isEmpty().trim(),
      param("org_id").not().isEmpty().trim().isLength({ min: 24 }).withMessage("please vaild organizationId"),
      body("tab_type").not().isEmpty().trim(),
      body("start_date").not().isEmpty().trim(),
      body("end_date").not().isEmpty().trim(),
      async (req, res) => {
        try {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                //calling controller function
                var data = req.body;
                var org_id = req.params.org_id;
                data["user_id"] = respData.Data._id;
                data["org_id"] = org_id;
                console.log("data>", data);
                reportApiController.DAILY_LIMIT_REPORT(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                }
                );
              }
            });
          }
        } catch (err) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );


    app.post("/api/report/send_report",
      header("authorization").not().isEmpty().trim(),
      async (req, res) => {
        try {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                //calling controller function
                var data = req.body;
                reportApiController.SEND_REPORT(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                }
                );
              }
            });
          }
        } catch (err) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );


    app.post('/api/report/upload',
    upload.single('file'),

    async (req, res) => {
        try {
            apiJwtController.DECODE(req, async function (respData) {
                if (respData.ReturnCode !== 200) {
                    res.status(respData.ReturnCode).send(respData);
                } else {
                    var sendData = {
                        ReturnCode: 200,
                        err: 0,
                        Data: {},
                        ReturnMsg: "",
                    };

                    const file = req.file;
                    file.name = req.body.name;
                     if (file == "" || file == undefined || file == null) {
                        sendData['ReturnMsg'] = "Please enter file"
                        sendData['err'] = "1"
                        res.status(sendData.ReturnCode).send(sendData);
                    } else {


                      pdfUpload(file, async function (result) {
                             var filepath = path.resolve(file.path) + path.extname(file.originalname);
                                console.log(filepath);
                                fs.unlinkSync(filepath)
                                sendData['Data']={
                                  URL:result.Location
                                }
                                sendData['ReturnMsg'] = "File uploaded successfully"
                                res.status(sendData.ReturnCode).send(sendData);
                              })
                    }
                }
            });
        } catch (err) {
            var respData = commonController.errorValidationResponse(err);
            res.status(respData.ReturnCode).send(respData);
        }
    });


    app.post("/api/report/apps_url/:org_id",
      header("authorization").not().isEmpty().trim(),
      param("org_id").not().isEmpty().trim().isLength({ min: 24 }).withMessage("please vaild organizationId"),
      body("tab_type").not().isEmpty().trim(),
      body("start_date").not().isEmpty().trim(),
      body("end_date").not().isEmpty().trim(),
      async (req, res) => {
        try {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                //calling controller function
                var data = req.body;
                var org_id = req.params.org_id;
                data["user_id"] = respData.Data._id;
                data["org_id"] = org_id;
                reportApiController.APPS_URL_REPORT(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                }
                );
              }
            });
          }
        } catch (err) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );
  },
};



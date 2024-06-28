const { body, header, validationResult, param } = require("express-validator");

module.exports = {
  BindUrl: function () {
    app.post(
      "/api/sessions",
      header("authorization").not().isEmpty().trim(),
      body("project_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({ min: 24 })
        .withMessage("please vaild project_id"),
      body("user_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({ min: 24 })
        .withMessage("please vaild user_id"),
      async (req, res) => {
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
              var sendData = req.body;

              sendData.userData = respData.Data;

              sessionApiController.CREATE_SESSION(
                sendData,
                function (respData) {
                  if (typeof respData.StatusCode != "undefined") {
                    res.status(respData.StatusCode).send(respData);
                  } else {
                    res.status(respData.ReturnCode).send(respData);
                  }
                }
              );
            }
          });
        }
      }
    );

    app.get(
      "/api/sessions/:_id",
      header("authorization").not().isEmpty().trim(),
      param("_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({ min: 24 })
        .withMessage("please vaild _id"),
      async (req, res) => {
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
              var sendData = req.body;

              sendData.userData = respData.Data;
              sendData["_id"] = req.params._id;

              sessionApiController.GET_ONE_SESSION(
                sendData,
                function (respData) {
                  if (typeof respData.StatusCode != "undefined") {
                    res.status(respData.StatusCode).send(respData);
                  } else {
                    res.status(respData.ReturnCode).send(respData);
                  }
                }
              );
            }
          });
        }
      }
    );

    app.post(
      "/api/session_all",
      header("authorization").not().isEmpty().trim(),
      // param('user_id').not().isEmpty().trim().isLength({ min: 24}).withMessage("please vaild user_id"),
      async (req, res) => {
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
              var sendData = req.body;
              sendData.userData = respData.Data;

              sessionApiController.GET_ALL_SESSION(
                sendData,
                function (respData) {
                  if (typeof respData.StatusCode != "undefined") {
                    res.status(respData.StatusCode).send(respData);
                  } else {
                    res.status(respData.ReturnCode).send(respData);
                  }
                }
              );
            }
          });
        }
      }
    );

    app.post(
      "/api/sessions/update",
      header("authorization").not().isEmpty().trim(),
      body("_id")

        .not()
        .isEmpty()
        .trim()
        .isLength({ min: 24 })
        .withMessage("please vaild _id"),
      async (req, res) => {
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
              var sendData = req.body;

              sendData.userData = respData.Data;

              sessionApiController.UPDATE_SESSION(
                sendData,
                function (respData) {
                  if (typeof respData.StatusCode != "undefined") {
                    res.status(respData.StatusCode).send(respData);
                  } else {
                    res.status(respData.ReturnCode).send(respData);
                  }
                }
              );
            }
          });
        }
      }
    );
    app.get(
      "/api/sessions_fource_update",
      header("authorization").not().isEmpty().trim(),

      async (req, res) => {
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
              var sendData = {};

              sendData.userData = respData.Data;

              sessionApiController.FOURCE_UPDATE_SESSION(
                sendData,
                function (respData) {
                  if (typeof respData.StatusCode != "undefined") {
                    res.status(respData.StatusCode).send(respData);
                  } else {
                    res.status(respData.ReturnCode).send(respData);
                  }
                }
              );
            }
          });
        }
      }
    );

    app.delete(
      "/api/sessions/delete/:_id",
      header("authorization").not().isEmpty().trim(),
      param("_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({ min: 24 })
        .withMessage("please vaild _id"),
      async (req, res) => {
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
              var sendData = [];
              sendData._id = req.params._id;
              sendData.userData = respData.Data;

              sessionApiController.DELETE_SESSION(
                sendData,
                function (respData) {
                  if (typeof respData.StatusCode != "undefined") {
                    res.status(respData.StatusCode).send(respData);
                  } else {
                    res.status(respData.ReturnCode).send(respData);
                  }
                }
              );
            }
          });
        }
      }
    );
    // Get Today and Weekly Total Time Worked by Project  
    app.get(
      "/api/sessions/today_weekly_time/:project_id",
      header("authorization").not().isEmpty().trim(),
      param("project_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({ min: 24 })
        .withMessage("please valid project_id"),
      async (req, res) => {
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
              var sendData = req.body;
              sendData.userData = respData.Data;
              sendData["project_id"] = req.params.project_id;

              sessionApiController.GET_TODAY_WEEKLY_SESSION_TIME(
                sendData,
                function (respData) {
                  if (typeof respData.StatusCode != "undefined") {
                    res.status(respData.StatusCode).send(respData);
                  } else {
                    res.status(respData.ReturnCode).send(respData);
                  }
                }
              );
            }
          });
        }
      }
    );
  },
};

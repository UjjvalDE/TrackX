const { body, header, validationResult, param } = require("express-validator");

module.exports = {
  BindUrl: function () {
    app.post(
      "/api/desk_to_do/create",
      header("authorization").not().isEmpty().trim(),
      body("project_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({
          min: 24,
        })
        .withMessage("please valid project_id"),
      // body("assignee_id")
      // .not()
      // .isEmpty()
      // .trim()
      // .isLength({
      //   min: 24,
      // })
      // .withMessage("please valid assignee_id"),
      body("title").not().isEmpty().trim(),

      async (req, res) => {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                var data = req.body;
                data.userData = respData.Data;

                toDoApiController.SAVE(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                });
              }
            });
          }
        } catch (error) {
          var respData = commonController.errorValidationResponse(error);
          console.log("error log", error);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );
    app.post(
      "/api/to_do/create",
      header("authorization").not().isEmpty().trim(),
      body("project_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({
          min: 24,
        })
        .withMessage("please valid project_id"),
      // body("assignee_id")
      // .not()
      // .isEmpty()
      // .trim()
      // .isLength({
      //   min: 24,
      // })
      // .withMessage("please valid assignee_id"),
      body("title").not().isEmpty().trim(),

      async (req, res) => {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                var data = req.body;
                data.userData = respData.Data;

                toDoApiController.WEBSAVE(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                });
              }
            });
          }
        } catch (error) {
          var respData = commonController.errorValidationResponse(error);
          console.log("error log", error);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );
    //single To_do
    app.get(
      "/api/to_do/get_todo_one/:todo_id",
      header("authorization").not().isEmpty().trim(),
      param("todo_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({
          min: 24,
        })
        .withMessage("please valid todo_id"),
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
                var data = {};
                data.userData = respData.Data;
                data.todo_id = req.params.todo_id;
                toDoApiController.ONELIST(data, function (respData) {
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
    //get all to_do
    app.post("/api/to_do/get_todo_all/:start/:limit",
      header("authorization").not().isEmpty().trim(),
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
                var data = req.body;
                data.start = req.params.start;
                data.limit = req.params.limit;
                data.userData = respData.Data;
                toDoApiController.ALL_LIST(data, function (respData) {
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

    //update_todo
    app.post(
      "/api/to_do/update/:id",
      header("authorization").not().isEmpty().trim(),
      param("id")
        .not()
        .isEmpty()
        .trim()
        .isLength({
          min: 24,
        })
        .withMessage("please valid id"),
      async (req, res) => {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            var respData = commonController.errorValidationResponse(errors);
            res.status(respData.ReturnCode).send(respData);
          } else {
            apiJwtController.DECODE(req, function (respData) {
              if (respData.ReturnCode !== 200) {
                res.status(respData.ReturnCode).send(respData);
              } else {
                var data = req.body;
                data.id = req.params.id;

                toDoApiController.UPDATE(data, function (respData) {
                  res.status(respData.ReturnCode).send(respData);
                });
              }
            });
          }
        } catch (error) {
          var respData = commonController.errorValidationResponse(err);
          res.status(respData.ReturnCode).send(respData);
        }
      }
    );

    //delete_todo
    app.delete(
      "/api/to_do/delete_todo/:id",
      header("authorization").not().isEmpty().trim(),
      param("id")
        .not()
        .isEmpty()
        .trim()
        .isLength({
          min: 24,
        })
        .withMessage("please vaild id"),
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
                var data = {};

                data.id = req.params.id;
                data.userData = respData.Data;
                toDoApiController.REMOVE(data, function (respData) {
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
    // project list get by user_id with last added to_do
    app.post(
      "/api/to_do/list/:project_id",
      header("authorization").not().isEmpty().trim(),
      param("project_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({
          min: 24,
        })
        .withMessage("please valid project_id"),
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
                var sendData = req.body;
                sendData.userData = respData.Data;
                sendData["projectId"] = req.params.project_id;
                toDoApiController.TODO_LIST_BY_PROJECT_ID(
                  sendData,
                  function (respData) {
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

const { body, header, validationResult, param } = require("express-validator");

module.exports = {
  BindUrl: function () {

    app.post("/api/work_limit",
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
                const data = req.body;
                data.userData = respData.Data;

                worklimitApiController.WORK_LIMIT(data, function (respData) {
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
  }
};
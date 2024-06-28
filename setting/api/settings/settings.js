const { body, header, validationResult, param } = require("express-validator");

module.exports = {
  BindUrl: function () {
    app.post(
      "/api/settings/default_role/:org_id",
      header("authorization").not().isEmpty().trim(),
      param("org_id")
        .not()
        .isEmpty()
        .trim()
        .isLength({
          min: 24,
        })
        .withMessage("please valid org id"),
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
                var org_id = req.params.org_id;
                data.org_id = org_id;

                settingsApiController.DEFAULT_PROJECT_ROLE(
                  data,
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

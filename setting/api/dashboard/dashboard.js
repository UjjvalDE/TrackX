const { body, header, validationResult, param } = require("express-validator");


module.exports = {
    BindUrl: function () {


        app.post("/api/dashboard/:org_id",
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

                                dashboardApiControlller.GET_DASHBOARD(data, function (respData) {
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
}
const { body, header, validationResult,param } = require('express-validator');

module.exports = {
    BindUrl: function () {
        app.post('/api/contact_us',
            body("name").not().isEmpty().trim().withMessage("Please enter name"),
            body("email").not().isEmpty().trim().withMessage("please valid Email"),
            body("description").not().isEmpty().withMessage("Please description"),
            async (req,res) => {
                try {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else if (!validator.validate(req.body.email)) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        //calling controller function
                        var data = await req.body;
                        contactApiController.CONTACT_US(data, function (respData) {
                            res.status(respData.ReturnCode).send(respData);
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            }
        )
    }
}
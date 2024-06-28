const { header, validationResult, param, body } = require('express-validator');

module.exports = {
    BindUrl: function () {
        // Get Screenshots list 
        app.post('/api/activity/screen_shots/:org_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid org_id"),
            body('user').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid user"),
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    const respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                }
                else {
                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            //calling controller function

                            let sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData.org_id = req.params.org_id
                            activityApiController.GET_SCREEN_SHOTS(sendData, function (respData) {
                                if (typeof respData.StatusCode != "undefined") {
                                    res.status(respData.StatusCode).send(respData);
                                } else {
                                    res.status(respData.ReturnCode).send(respData);
                                }
                            });
                        }
                    })
                }
            });

        app.post('/api/activity/apps/:org_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid org_id"),
            body('user').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid user"),
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    const respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                }
                else {
                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            //calling controller function

                            let sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData.org_id = req.params.org_id
                            activityApiController.GET_APPS(sendData, function (respData) {
                                if (typeof respData.StatusCode != "undefined") {
                                    res.status(respData.StatusCode).send(respData);
                                } else {
                                    res.status(respData.ReturnCode).send(respData);
                                }
                            });
                        }
                    })
                }
            });
        // Get URL List
        app.post('/api/activity/url/:org_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid org_id"),
            body('user').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid user"),
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    const respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                }
                else {
                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            //calling controller function

                            let sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData.org_id = req.params.org_id
                            activityApiController.GET_URL(sendData, function (respData) {
                                if (typeof respData.StatusCode != "undefined") {
                                    res.status(respData.StatusCode).send(respData);
                                } else {
                                    res.status(respData.ReturnCode).send(respData);
                                }
                            });
                        }
                    })
                }
            });
    }
}
const { body, header, validationResult, param } = require('express-validator');

module.exports = {
    BindUrl: function () {
        // Create screen shot
        app.post('/api/screen_shot',
            header('authorization').not().isEmpty().trim(),
            body('ss_url').not().isEmpty().trim().withMessage("Please valid ss_url"),
            body('session_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid session_id"),
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    var respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                }
                else {
                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            //calling controller function
                            var sendData = req.body;
                            sendData.userData = respData.Data;

                            screenShotApiController.CREATE_SCREEN_SHOT(sendData, function (respData) {
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
        // Get single screen shot item
        app.get('/api/screen_shot/:_id',
            header('authorization').not().isEmpty().trim(),
            param('_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid _id"),
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    var respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                }
                else {
                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            //calling controller function
                            var sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData['item_id'] = req.params._id

                            screenShotApiController.GET_ONE_SCREEN_SHOT(sendData, function (respData) {
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
        // get last screenshot in trackerx
        app.get('/api/lastss/:project_id',
            header('authorization').not().isEmpty().trim(),
            param('project_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid _id"),
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    var respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                }
                else {
                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            //calling controller function
                            var sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData.project_id = req.params.project_id

                            screenShotApiController.GET_LAST_SCREEN_SHOT(sendData, function (respData) {
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
        // Get single screen shot list
        app.get('/api/screen_shot/list/:session_id',
            header('authorization').not().isEmpty().trim(),
            param('session_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid session_id"),
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    var respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                }
                else {
                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            //calling controller function
                            var sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData['session_id'] = req.params.session_id

                            screenShotApiController.GET_SCREEN_SHOT_LIST_BY_SESSION(sendData, function (respData) {
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
        // Delete screen shot item    
        app.post('/api/:org_id/screen_shot',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid org_id"),
            body('ss_ids').isArray().isLength({ min: 1 }).withMessage("Please provide a screen shot id"),
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
                            const sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData.org_id = req.params.org_id;

                            screenShotApiController.DELETE_SCREEN_SHOT(sendData, function (respData) {
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
        app.delete('/api/screen_shot/:ss_id',
            header('authorization').not().isEmpty().trim(),
            param('ss_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("please valid org_id"),

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
                            const sendData = req.body;
                            sendData.userData = respData.Data;
                            sendData.ss_id = req.params.ss_id;

                            screenShotApiController.DELETE_ONE_SCREEN_SHOT(sendData, function (respData) {
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
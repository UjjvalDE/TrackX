const { body, header, validationResult, param } = require('express-validator');


module.exports = {
    BindUrl: function () {

        app.post('/api/team/create/:org_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            body('team_name').not().isEmpty().trim(),
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
                                data.userData = respData.Data;
                                data['orgId'] = req.params.org_id
                                teamApiController.SAVE(data, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            });
        app.get('/api/teams/list/:start/:limit/:org_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
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
                                var sendData = [];
                                sendData.userData = respData.Data;
                                sendData.start = req.params.start;
                                sendData.limit = req.params.limit;

                                sendData['orgId'] = req.params.org_id
                                teamApiController.TEAMSLIST(sendData, function (respData) {
                                    if (typeof respData.StatusCode != "undefined") {
                                        res.status(respData.ReturnCode).send(respData);
                                    } else {
                                        res.status(respData.ReturnCode).send(respData);
                                    }
                                })

                            }
                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            });
        app.get('/api/teams/:org_id/:team_id',
            header('authorization').not().isEmpty().trim(),
            param('team_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please valid team_id"),
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
                                var sendData = [];
                                sendData.userData = respData.Data;
                                sendData['team_id'] = req.params.team_id
                                sendData['org_id'] = req.params.org_id
                                teamApiController.TEAMSONE(sendData, function (respData) {
                                    if (typeof respData.StatusCode != "undefined") {
                                        res.status(respData.ReturnCode).send(respData);
                                    } else {
                                        res.status(respData.ReturnCode).send(respData);
                                    }
                                })

                            }
                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            });
        app.delete('/api/teams/remove/:team_id',
            header('authorization').not().isEmpty().trim(),
            param('team_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please valid team_id"),
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
                                var sendData = [];
                                sendData.userData = respData.Data;
                                sendData['team_id'] = req.params.team_id
                                teamApiController.DELETETEAM(sendData, function (respData) {
                                    if (typeof respData.StatusCode != "undefined") {
                                        res.status(respData.ReturnCode).send(respData);
                                    } else {
                                        res.status(respData.ReturnCode).send(respData);
                                    }
                                })

                            }
                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            });
        app.put('/api/teams/update/:team_id',
            header('authorization').not().isEmpty().trim(),
            param('team_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please valid team_id"),
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
                                var sendData = {};
                                sendData['updateBody'] = req.body
                                sendData.userData = respData.Data;
                                sendData['team_id'] = req.params.team_id

                                teamApiController.TEAMSUPDATE(sendData, function (respData) {
                                    if (typeof respData.StatusCode != "undefined") {
                                        res.status(respData.ReturnCode).send(respData);
                                    } else {
                                        res.status(respData.ReturnCode).send(respData);
                                    }
                                })

                            }
                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            });
        app.post('/api/teams/remove-detail/:org_id/:team_id',
            header('authorization').not().isEmpty().trim(),
            param('team_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please valid team_id"),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please valid org_id"),
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
                                sendData['team_id'] = req.params.team_id
                                sendData['org_id'] = req.params.org_id

                                teamApiController.DELETETEAM_DETAIL(sendData, function (respData) {
                                    if (typeof respData.StatusCode != "undefined") {
                                        res.status(respData.ReturnCode).send(respData);
                                    } else {
                                        res.status(respData.ReturnCode).send(respData);
                                    }
                                })

                            }
                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            });
    }
}
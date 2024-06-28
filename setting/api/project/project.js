const { body, header, validationResult, param } = require('express-validator');

module.exports = {
    BindUrl: function () {
        app.post('/api/projects/create/:org_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            body('name').not().isEmpty().trim(),
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
                                data['org_id'] = req.params.org_id
                                projectApiController.SAVE(data, function (respData) {
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
        // get all project
        app.get('/api/projects/list/:org_id/:start/:limit',
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
                                var sendData = req.body;
                                const { start, limit } = req.params;
                                sendData.start = start;
                                sendData.limit = limit;
                                sendData.userData = respData.Data;
                                sendData['orgId'] = req.params.org_id
                                projectApiController.LIST(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        //project update 
        app.patch('/api/project/update/:org_id/:project_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("Please vaild org_id"),
            param('project_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("Please valid project_id"),
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
                                data['org_id'] = req.params.org_id;
                                data['project_id'] = req.params.project_id
                                projectApiController.PROJECT_UPDATE(data, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // project delete
        app.delete('/api/projects/delete/:org_id/:projectId',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            param('projectId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild UserId"),
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
                                data['orgId'] = req.params.org_id;
                                data['projectId'] = req.params.projectId;
                                projectApiController.PROJECT_DELETE(data, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // Create duplicate project
        app.post('/api/project/duplicate/:org_id/:userId',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            param('userId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild UserId"),
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
                                data['orgId'] = req.params.org_id;
                                data['userId'] = req.params.userId
                                projectApiController.DUPLICATE_PROJECT(data, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        app.patch('/api/project/status/update/:org_id',
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
                                var data = req.body;
                                data.userData = respData.Data;
                                data['orgId'] = req.params.org_id;
                                projectApiController.PROJECT_STATUS_UPDATE(data, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // project get by status with the search query by name
        app.post('/api/project_status/list/:org_id/:start/:limit',
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
                                var sendData = req.body;
                                var status = req.query.status
                                const { start, limit } = req.params;
                                sendData.start = start;
                                sendData.limit = limit;
                                sendData.status = status;
                                sendData.userData = respData.Data;
                                sendData['orgId'] = req.params.org_id
                                projectApiController.PROJECT_STATUS_LIST(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // project member list
        app.get('/api/project_member/list/:org_id/:projectId',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            param('projectId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid projectId"),
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
                                sendData['orgId'] = req.params.org_id
                                sendData['projectId'] = req.params.projectId
                                projectApiController.PROJECTS_ONE(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        app.patch('/api/project_member/update/:org_id/:projectId',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            param('projectId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid projectId"),
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
                                sendData['orgId'] = req.params.org_id
                                sendData['projectId'] = req.params.projectId
                                projectApiController.PROJECT_MEMBER_UPDATE(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // project member delete
        app.delete('/api/project_member/delete/:org_id/:project_id/:user_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            param('project_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid project_id"),
            param('user_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid user_id"),
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
                                var sendData = { "userId": req.params.user_id };
                                sendData.userData = respData.Data;
                                sendData['orgId'] = req.params.org_id
                                sendData['projectId'] = req.params.project_id
                                projectApiController.PROJECT_MEMBER_DELETE(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // Project Team Delete
        app.delete('/api/team/delete/:org_id/:projectId',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            param('projectId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid projectId"),
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
                                sendData['orgId'] = req.params.org_id
                                sendData['projectId'] = req.params.projectId
                                projectApiController.PROJECT_TEAM_DELETE(sendData, function (respData) {
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
        )
        // project Leave
        app.delete('/api/project/leave/:org_id/:projectId',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild org_id"),
            param('projectId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid projectId"),
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
                                sendData['orgId'] = req.params.org_id
                                sendData['projectId'] = req.params.projectId
                                projectApiController.LEAVE_PROJECT(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // project list get by user_id with last added to_do 
        app.post('/api/project_client/list',
            header('authorization').not().isEmpty().trim(),
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
                                projectApiController.PROJECT_LIST_BY_USER_ID(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            })
        app.get('/api/project_client/:projectId',
            header('authorization').not().isEmpty().trim(),
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
                                sendData.projectId = req.params.projectId;
                                projectApiController.PROJECT_CLIENT(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            })
        app.get('/api/projectStatus/:projectId/:sessionId',
            header('authorization').not().isEmpty().trim(),
            param('projectId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid projectId"),
            param('sessionId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaid sessionId"),
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
                                sendData.userData = respData.Data;
                                sendData.projectId = req.params.projectId;
                                sendData.sessionId = req.params.sessionId;
                                projectApiController.PROJECTSTATUS(sendData, function (respData) {
                                    res.status(respData.ReturnCode).send(respData);
                                });
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            })
        // Project details
        app.post('/api/project_details/:org_id/:projectId',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({ min: 24 }).withMessage("Please vaild org_id"),
            param('projectId').not().isEmpty().trim().isLength({ min: 24 }).withMessage("Please vaid projectId"),
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
                                sendData['orgId'] = req.params.org_id
                                sendData['projectId'] = req.params.projectId
                                projectApiController.PROJECT_DETAIL(sendData, function (respData) {
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


            app.post('/api/project/remove-detail/:org_id/:project_id',
            header('authorization').not().isEmpty().trim(),
            param('project_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please valid project_id"),
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
                                sendData['project_id'] = req.params.project_id
                                sendData['org_id'] = req.params.org_id

                                projectApiController.DELETEPROJECT_DETAIL(sendData, function (respData) {
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

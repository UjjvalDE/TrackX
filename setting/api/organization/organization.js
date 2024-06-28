const { body, header, validationResult, param } = require('express-validator');

module.exports = {
    BindUrl: function () {

        app.get('/api/organizations/:start/:limit/:status',
            header('authorization').not().isEmpty().trim(),
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
                            var sendData = [];
                            const { start, limit, status } = req.params;
                            sendData.start = start;
                            sendData.limit = limit;
                            sendData.status = status;
                            sendData.userData = respData.Data;

                            organizationApiController.ORGANIZATION(sendData, function (respData) {
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
        app.get('/api/organizations/:org_id',
            header('authorization').not().isEmpty().trim(),
            param('org_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild organizationId"),
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
                            var sendData = [];
                            const { org_id } = req.params;
                            sendData.org_id = org_id;
                            sendData.userData = respData.Data;

                            organizationApiController.GET_ONE_ORG(sendData, function (respData) {
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
        app.post('/api/organization',
            body('organization_type').not().isEmpty().trim(),
            body('organization_name').not().isEmpty().trim(),
            body('team_size').not().isEmpty().trim(),
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
                                organizationApiController.ADD_ORGANIZATION(data, function (respData) {
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
        app.post('/api/verify-invite-manager',
            body('token').not().isEmpty().trim(),
            async (req, res) => {
                try {

                    // Finds the validation errors in this request and wraps them in an object with handy functions
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {


                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.status).send(respData);
                    } else {
                        //calling controller function
                        var data = req.body;
                        organizationApiController.VERIFY_INVITE_MANAGER(data, function (respData) {

                            if (typeof respData.status != "undefined") {
                                res.status(respData.status).send(respData);
                            } else {
                                res.status(respData.status).send(respData);
                            }
                        });
                    }

                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.status).send(respData);
                }
            });
        app.post('/api/exist-organization',
            body('email').not().isEmpty().trim(),
            async function (req, res) {
                try {
                    // Finds the validation errors in this request and wraps them in an object with handy functions
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        apiJwtController.DECODE(req, function (respData) {
                            if (respData.ReturnCode !== 200) {
                                res.status(respData.ReturnCode).send(respData)
                            } else {
                                //calling controller function
                                var data = req.body
                                data['userData'] = respData.Data;
                                organizationApiController.EXIST_ORGANIZATION_INVITE(data, function (respData) {
                                    if (typeof respData.StatusCode != "undefined") {
                                        res.status(respData.StatusCode).send(respData);
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
            })
        app.post('/api/verify-existing-organization',
            body('token').not().isEmpty().trim(), // emapty email validation
            (req, res) => {
                try {
                    //Find the validation errors in this request and wraps them in an object with handy functions
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        //calling controller function
                        var data = req.body;
                        organizationApiController.VERIFY_EXISTORG_JOIN(data, function (respData) {
                            if (typeof respData.StatusCode != "undefined") {
                                res.status(respData.StatusCode).send(respData);
                            } else {
                                res.status(respData.ReturnCode).send(respData);
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData)
                }
            });
        app.post('/api/invite-member/:organizationId',
            body('email').not().isEmpty().trim(),
            body('role').not().isEmpty().trim(),
            async function (req, res) {
                try {
                    // Finds the validation errors in this request and wraps them in an object with handy functions
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        apiJwtController.DECODE(req, function (respData) {
                            if (respData.ReturnCode !== 200) {
                                res.status(respData.ReturnCode).send(respData)
                            } else {
                                //calling controller function

                                var data = req.body
                                data['userData'] = respData.Data;
                                var organizationId = req.params.organizationId
                                data['organizationId'] = organizationId;
                                if (organizationId.length === 24) {
                                    organizationApiController.INVITE_PEOPLE(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.StatusCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }

                                    })

                                } else {
                                    const errors = "Please Enter Valid Id"
                                    var sendData = {
                                        ReturnCode: 406,
                                        err: 1,
                                        Data: "",
                                        ReturnMsg: errors
                                    }
                                    res.status(sendData.ReturnCode).send(sendData);

                                }
                            }

                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            })
        app.get('/api/invite/:invite_id',
            header('authorization').not().isEmpty().trim(),
            param('invite_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild invite_id"), (req, res) => {
                try {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        apiJwtController.DECODE(req, function (respData) {
                            if (respData.ReturnCode !== 200) {
                                res.status(respData.ReturnCode).send(respData)
                            } else {
                                //calling controller function

                                var data = {}
                                data['userData'] = respData.Data;
                                var invite_id = req.params.invite_id
                                data['invite_id'] = invite_id;
                                if (invite_id.length === 24) {
                                    organizationApiController.GET_INVITE_PEOPLE(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.StatusCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }

                                    })

                                } else {
                                    const errors = "Please Enter Valid Id"
                                    var sendData = {
                                        ReturnCode: 406,
                                        err: 1,
                                        Data: "",
                                        ReturnMsg: errors
                                    }
                                    res.status(sendData.ReturnCode).send(sendData);

                                }
                            }

                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData)
                }
            })
        app.post('/api/reinvite/:invite_id',
            header('authorization').not().isEmpty().trim(),
            param('invite_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild invite_id"), (req, res) => {
                try {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        apiJwtController.DECODE(req, function (respData) {
                            if (respData.ReturnCode !== 200) {
                                res.status(respData.ReturnCode).send(respData)
                            } else {
                                //calling controller function

                                var data = req.body
                                data['userData'] = respData.Data;
                                var invite_id = req.params.invite_id
                                data['invite_id'] = invite_id;
                                if (invite_id.length === 24) {
                                    organizationApiController.REINVITE_PEOPLE(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.StatusCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }

                                    })

                                } else {
                                    const errors = "Please Enter Valid Id"
                                    var sendData = {
                                        ReturnCode: 406,
                                        err: 1,
                                        Data: "",
                                        ReturnMsg: errors
                                    }
                                    res.status(sendData.ReturnCode).send(sendData);

                                }
                            }

                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData)
                }
            })
        app.delete('/api/invite/:invite_id',
            header('authorization').not().isEmpty().trim(),
            param('invite_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild invite_id"), (req, res) => {
                try {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        apiJwtController.DECODE(req, function (respData) {
                            if (respData.ReturnCode !== 200) {
                                res.status(respData.ReturnCode).send(respData)
                            } else {
                                //calling controller function

                                var data = {}
                                data['userData'] = respData.Data;
                                var invite_id = req.params.invite_id
                                data['invite_id'] = invite_id;
                                if (invite_id.length === 24) {
                                    organizationApiController.DELETE_INVITE_PEOPLE(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.StatusCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }

                                    })

                                } else {
                                    const errors = "Please Enter Valid Id"
                                    var sendData = {
                                        ReturnCode: 406,
                                        err: 1,
                                        Data: "",
                                        ReturnMsg: errors
                                    }
                                    res.status(sendData.ReturnCode).send(sendData);

                                }
                            }

                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData)
                }
            })
        app.put('/api/invite/:invite_id',
            header('authorization').not().isEmpty().trim(),
            body().not().isEmpty(),
            param('invite_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild invite_id"), (req, res) => {
                try {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        apiJwtController.DECODE(req, function (respData) {
                            if (respData.ReturnCode !== 200) {
                                res.status(respData.ReturnCode).send(respData)
                            } else {
                                //calling controller function

                                var data = {}
                                data['updateData'] = req.body;
                                data['userData'] = respData.Data;
                                var invite_id = req.params.invite_id
                                data['invite_id'] = invite_id;
                                if (invite_id.length === 24) {
                                    organizationApiController.UPDATE_INVITE_PEOPLE(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.StatusCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }

                                    })

                                } else {
                                    const errors = "Please Enter Valid Id"
                                    var sendData = {
                                        ReturnCode: 406,
                                        err: 1,
                                        Data: "",
                                        ReturnMsg: errors
                                    }
                                    res.status(sendData.ReturnCode).send(sendData);

                                }
                            }

                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData)
                }
            })
        app.post('/api/verify-invite-member',
            body('token').not().isEmpty().trim(), // emapty email validation
            (req, res) => {
                try {
                    //Find the validation errors in this request and wraps them in an object with handy functions
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        var respData = commonController.errorValidationResponse(errors);
                        res.status(respData.ReturnCode).send(respData);
                    } else {
                        //calling controller function
                        var data = req.body;
                        organizationApiController.VERIFY_INVITE_MEMBER(data, function (respData) {
                            if (typeof respData.StatusCode != "undefined") {
                                res.status(respData.StatusCode).send(respData);
                            } else {
                                res.status(respData.ReturnCode).send(respData);
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData)
                }
            });
        app.patch("/api/organization/:_id",
            header('authorization').not().isEmpty().trim(),
            async function (req, res) {
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
                                const updateId = req.params._id
                                if (updateId.length === 24) {
                                    data['updateId'] = updateId;

                                    data.userData = respData.Data;
                                    organizationApiController.UPDATE_ORGANIZATION(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.ReturnCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }
                                    });
                                } else {
                                    const errors = "Please Enter Valid Id"
                                    var sendData = {
                                        ReturnCode: 406,
                                        err: 1,
                                        Data: "",
                                        ReturnMsg: errors
                                    }
                                    res.status(sendData.ReturnCode).send(sendData);
                                }
                            }
                        });
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })
        app.delete("/api/organization/:organizationId",
            header('authorization').not().isEmpty().trim(),
            async function (req, res) {
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
                                const deleteId = req.params.organizationId
                                console.log("deleteId>>", deleteId)
                                if (deleteId.length === 24) {
                                    data['deleteId'] = deleteId;
                                    console.log("data>>", data)
                                    data.userData = respData.Data;
                                    organizationApiController.DELETE_ORGANIZATION_DATA(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.ReturnCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }
                                    })
                                } else {
                                    const errors = "Please Enter Valid Id"
                                    var sendData = {
                                        ReturnCode: 406,
                                        err: 1,
                                        Data: "",
                                        ReturnMsg: errors
                                    }
                                    res.status(sendData.ReturnCode).send(sendData);
                                }
                            }
                        })
                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            });
        // get organization member list with the filter by name, role and time_track
        app.post('/api/organization/member/list/:status/:organizationId/:start/:limit',
            header('authorization').not().isEmpty().trim(),
            param('organizationId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild organizationId"),
            async function (req, res) {
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
                                const orgId = req.params.organizationId
                                var sendData = req.body;
                                const { start, limit, status } = req.params;

                                sendData.start = start;
                                sendData.limit = limit;
                                sendData.status = status;
                                sendData.userData = respData.Data;
                                sendData.orgId = orgId
                                organizationApiController.ORGANIZATION_MEMBER_LIST(sendData, function (respData) {
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
            })
        app.put("/api/organization/memberUpdate/:member_id",
            header('authorization').not().isEmpty().trim(),
            param('member_id').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild member_id"),
            async function (req, res) {
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
                                const member_id = req.params.member_id
                                var sendData = [];
                                sendData.userData = respData.Data;
                                sendData.member_id = member_id
                                organizationApiController.ORGANIZATION_ONE_MEMBER_LIST(sendData, function (respData) {
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
            }
        )
        // get organization one member list
        app.get('/api/organization/one/member/list/:user_id/:org_id',
        header('authorization').not().isEmpty().trim(),
        param('user_id').not().isEmpty().trim().isLength({
            min: 24
        }).withMessage("please vaild member_id"),
        async function (req, res) {
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
                            const user_id = req.params.user_id
                            var sendData = [];
                            sendData.org_id= req.params.org_id
                            sendData.userData = respData.Data;
                            sendData.user_id = user_id
                            organizationApiController.ORGANIZATION_ONE_MEMBER_LIST(sendData, function (respData) {
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
        })
        app.patch('/api/member/update/:organizationId',
            header('authorization').not().isEmpty().trim(),
            param('organizationId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild organizationId"),
            async function (req, res) {
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

                                const orgId = req.params.organizationId

                                var sendData = req.body;
                                sendData.userData = respData.Data;
                                sendData.orgId = orgId
                                console.log("org_id>>>", orgId);

                                organizationApiController.ORGANIZATION_MEMBER_UPDATE(sendData, function (respData) {
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
            })
        app.post('/api/member/delete/:organizationId',
            header('authorization').not().isEmpty().trim(),
            param('organizationId').not().isEmpty().trim().isLength({
                min: 24
            }).withMessage("please vaild organizationId"),
            body("userId").not().isEmpty(),
            async function (req, res) {
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

                                const orgId = req.params.organizationId

                                var sendData = req.body;
                                sendData.userData = respData.Data;
                                sendData.orgId = orgId


                                organizationApiController.ORGANIZATION_MEMBER_DELETE(sendData, function (respData) {
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
            })
        app.get('/api/organization/invite-pending',
            header('authorization').not().isEmpty().trim(),
            async function (req, res) {
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
                                var sendData = [];
                                sendData.userData = respData.Data;
                                organizationApiController.INVITE_PENDING(sendData, function (respData) {
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
            })

    }
}
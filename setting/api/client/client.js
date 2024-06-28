const { body, header, validationResult,param } = require('express-validator');

module.exports = {
    BindUrl: function () {
        app.post('/api/organization/client/:organizationId',
        header('authorization').not().isEmpty().trim(),
        body('name').not().isEmpty().trim(),
        async (req, res) => {
            try {
                // Finds the validation errors in this request and wraps them in an object with handy functions
                const errors = validationResult(req);
                console.log(errors);
                if (!errors.isEmpty()) {
                    var respData = commonController.errorValidationResponse(errors);
                    res.status(respData.ReturnCode).send(respData);
                } else {
                    //calling controller function

                    var data = await req.body;


                    apiJwtController.DECODE(req, function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            var data = req.body;
                            console.log(respData);
                            data.userData = respData.Data;
                            const organizationId = req.params.organizationId
                            data['organizationId'] = organizationId
                            if (organizationId.length == 24) {
                                clientApiController.SAVE(data, function (respData) {
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
                console.log("err>>>>>",err);
                var respData = commonController.errorValidationResponse(err);

                res.status(respData.ReturnCode).send(respData);
            }
        });

        app.post("/api/organization/client",
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
                                // const org_id = req.params._id

                                // if (org_id.length === 24) {
                                //     data['org_id'] = org_id;

                                    data.userData = respData.Data;
                                    clientApiController.UPDATE_CLIENT_DATA(data, function (respData) {
                                        if (typeof respData.StatusCode != "undefined") {
                                            res.status(respData.ReturnCode).send(respData);
                                        } else {
                                            res.status(respData.ReturnCode).send(respData);
                                        }
                                    });
                                // } else {
                                //     const errors = "Please Enter Valid Id"
                                //     var sendData = {
                                //         ReturnCode: 406,
                                //         err: 1,
                                //         Data: "",
                                //         ReturnMsg: errors
                                //     }
                                //     res.status(sendData.ReturnCode).send(sendData);
                                // }

                            }
                        });

                    }
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);

                    res.status(respData.ReturnCode).send(respData);
                }
            })


        app.delete("/api/organization/client/:_id",
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
                                const deleteId = req.params._id
                                console.log("deleteId>>", deleteId)

                                if (deleteId.length === 24) {
                                    data['deleteId'] = deleteId;
                                    console.log("data>>", data)
                                    data.userData = respData.Data;

                                    clientApiController.DELETE_CLIENT_DATA(data, function (respData) {
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
            })

        app.patch("/api/client/archive/:clientId",
            header('authorization').not().isEmpty().trim(),
            async function (req, res) {
                try {

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
                                const clientId = req.params.clientId
                                if (clientId.length == 24) {
                                    data['clientId'] = clientId
                                    clientApiController.ARCHIVE_CLIENT(data, function (respData) {
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

        app.patch("/api/client/restore/:clientId",
            header('authorization').not().isEmpty().trim(),
             async function (req, res) {
                try {

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
                                const clientId = req.params.clientId
                                if (clientId.length == 24) {
                                    data['clientId'] = clientId
                                    clientApiController.RESTORE_CLIENT(data, function (respData) {
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

            
        // app.get("/api/client/archive/:organizationId",
        //     header('authorization').not().isEmpty().trim()
        //     , async function (req, res) {
        //         try {

        //             const errors = validationResult(req);
        //             if (!errors.isEmpty()) {
        //                 var respData = commonController.errorValidationResponse(errors);
        //                 res.status(respData.ReturnCode).send(respData);
        //             } else {

        //                 //calling controller function

        //                 apiJwtController.DECODE(req, function (respData) {
        //                     if (respData.ReturnCode !== 200) {
        //                         res.status(respData.ReturnCode).send(respData);
        //                     } else {

        //                         var data = req.body;
        //                         data.userData = respData.Data;
        //                         const organizationId = req.params.organizationId
        //                         if (organizationId.length == 24) {
        //                             data['organizationId'] = organizationId
        //                             clientApiController.ARCHIVE_CLIENT_LIST(data, function (respData) {
        //                                 if (typeof respData.StatusCode != "undefined") {
        //                                     res.status(respData.ReturnCode).send(respData);
        //                                 } else {
        //                                     res.status(respData.ReturnCode).send(respData);
        //                                 }
        //                             });
        //                         } else {
        //                             const errors = "Please Enter Valid Id"
        //                             var sendData = {
        //                                 ReturnCode: 406,
        //                                 err: 1,
        //                                 Data: "",
        //                                 ReturnMsg: errors
        //                             }
        //                             res.status(sendData.ReturnCode).send(sendData);
        //                         }
        //                     }
        //                 });
        //             }
        //         } catch (err) {
        //             var respData = commonController.errorValidationResponse(err);

        //             res.status(respData.ReturnCode).send(respData);
        //         }
        //     })

        // app.get("/api/client/active/:organizationId",
        //     header('authorization').not().isEmpty().trim()
        //     , async function (req, res) {
        //         try {

        //             const errors = validationResult(req);
        //             if (!errors.isEmpty()) {
        //                 var respData = commonController.errorValidationResponse(errors);
        //                 res.status(respData.ReturnCode).send(respData);
        //             } else {

        //                 //calling controller function

        //                 apiJwtController.DECODE(req, function (respData) {
        //                     if (respData.ReturnCode !== 200) {
        //                         res.status(respData.ReturnCode).send(respData);
        //                     } else {

        //                         var data = req.body;
        //                         data.userData = respData.Data;
        //                         const organizationId = req.params.organizationId
        //                         if (organizationId.length == 24) {
        //                             data['organizationId'] = organizationId
        //                             clientApiController.ACTIVE_CLIENT_LIST(data, function (respData) {
        //                                 if (typeof respData.StatusCode != "undefined") {
        //                                     res.status(respData.ReturnCode).send(respData);
        //                                 } else {
        //                                     res.status(respData.ReturnCode).send(respData);
        //                                 }
        //                             });
        //                         } else {
        //                             const errors = "Please Enter Valid Id"
        //                             var sendData = {
        //                                 ReturnCode: 406,
        //                                 err: 1,
        //                                 Data: "",
        //                                 ReturnMsg: errors
        //                             }
        //                             res.status(sendData.ReturnCode).send(sendData);
        //                         }
        //                     }
        //                 });
        //             }
        //         } catch (err) {
        //             var respData = commonController.errorValidationResponse(err);

        //             res.status(respData.ReturnCode).send(respData);
        //         }
        //     })
        app.get('/api/clients/list/:orgid/:start/:limit/:status/',
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
                            const { orgid,start, limit, status } = req.params;
                            sendData.orgid= orgid;
                            sendData.start = start;
                            sendData.limit = limit;
                            sendData.status = status;
                            sendData.userData = respData.Data;
                            console.log('userData>>>',sendData.userData);
                            clientApiController.CLIENT(sendData, function (respData) {
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

            app.get('/api/clients/:client_id',
            header('authorization').not().isEmpty().trim(),
            param('client_id').not().isEmpty().trim().isLength({ min: 24}).withMessage("please vaild client_id"),
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
                                sendData['client_id'] = req.params.client_id
                                clientApiController.CLIENTONE(sendData, function (respData) {
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

//org_id
//start
//limit
//status


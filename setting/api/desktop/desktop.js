var upload = multer({ dest: "./views" });
const { log } = require("console");
const { header } = require("express-validator");
const path = require("path");
const desktopModal = require("../../../models/desktop/desktop");
const { extuploadFile } = require("../../../uploads3");
// const desktopModal = require("../../models/desktop/desktop");
const { body, validationResult, param } = require("express-validator");

module.exports = {
    BindUrl: function () {
        app.post('/api/desktop/upload',
            upload.single('file'),

            async (req, res) => {
                try {
                    apiJwtController.DECODE(req, async function (respData) {
                        if (respData.ReturnCode !== 200) {
                            res.status(respData.ReturnCode).send(respData);
                        } else {
                            var sendData = {
                                ReturnCode: 200,
                                err: 0,
                                Data: {},
                                ReturnMsg: "",
                            };

                            const file = req.file;
                            file.name = req.body.name
                            var savedata = {
                                name: req.body.name,
                                // file:req.file,
                                file_extension: req.body.file_extension,
                                version: req.body.version,
                                created_at: new Date()

                            }

                            if (file == "" || file == undefined || file == null) {
                                sendData['ReturnMsg'] = "Please enter file"
                                sendData['err'] = "1"
                                res.status(sendData.ReturnCode).send(sendData);
                            } else {


                                extuploadFile(file, async function (result) {
                                    savedata.file = result.Location;

                                    var exttt = path.extname(result.Location)
                                    var ext_name = exttt.replace('.', '')

                                    if ((ext_name == req.body.file_extension) && ((ext_name == "dmg") || (ext_name == "exe") || (ext_name == "app"))) {
                                        var filepath = path.resolve(file.path) + path.extname(file.originalname);

                                        fs.unlinkSync(filepath)

                                        var resk = await desktopModal.create(savedata)
                                        sendData.Data = resk

                                        sendData['ReturnMsg'] = "File uploaded successfully"
                                        res.status(sendData.ReturnCode).send(sendData);

                                    }
                                    else {
                                        sendData['ReturnMsg'] = "please enter valid file or file extension"
                                        res.status(sendData.ReturnCode).send(sendData);

                                    }
                                })
                            }
                        }
                    });
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            });


        app.post("/api/get_desktop_system",
            async (req, res) => {
                try {
                    // Finds the validation errors in this request and wraps them in an object with handy functions
                    // const errors = validationResult(req);

                    //     //calling controller function
                    //     apiJwtController.DECODE(req, function (respData) {
                    //         if (respData.ReturnCode !== 200) {
                    //             res.status(respData.ReturnCode).send(respData);
                    //         } 
                    const data = req.body;
                    desktopApiController.GET_SYSTEM(data, function (respData) {
                        res.status(respData.ReturnCode).send(respData);
                    });

                    // });

                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);

                }
            }
        );
    }
}

var upload = multer({ dest: "./views" });
const { header } = require("express-validator");
const path = require("path");
const { uploadFile } = require("../../../uploads3")

module.exports = {
    BindUrl: function () {
        app.post('/api/upload',
            upload.single('file'),
            header('authorization').not().isEmpty().trim(),
            async (req, res) => {
                try {
                    apiJwtController.DECODE(req, function (respData) {
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
                            if (file == "" || file == undefined || file == null) {
                                sendData['ReturnMsg'] = "Please enter file"
                                sendData['err'] = "1"
                                res.status(sendData.ReturnCode).send(sendData);
                            } else {
                                uploadFile(file, async function (result) {
                                    var filepath = path.resolve(file.path) + path.extname(file.originalname);
                                    console.log(filepath);
                                    fs.unlinkSync(filepath)
                                    sendData.Data['file'] = result.Location
                                    sendData['ReturnMsg'] = "File uploaded successfully"
                                    res.status(sendData.ReturnCode).send(sendData);
                                })
                            }

                        }
                    });
                } catch (err) {
                    var respData = commonController.errorValidationResponse(err);
                    res.status(respData.ReturnCode).send(respData);
                }
            })
    }
}
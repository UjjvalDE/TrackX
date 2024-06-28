const S3 = require('aws-sdk/clients/s3')
require('dotenv').config()
const fs = require('fs')
const path = require('path')



const bucketName = process.env.AWS_BUCKET_NAME
const bucketname = process.env.AWS_BUCKET_NAMEE
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey

})
function uploadFile(file, callback) {
  console.log(file);
  const mv = require('mv');
  const file_path = file.path + path.extname(file.originalname);
  mv(file.path, file_path, function (err) {
    const fileStream = fs.createReadStream(file_path)
    const uploadParams = {
      ACL: 'public-read',
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename + path.extname(file.originalname),
    }
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        console.log(err);
      }
      callback(data);
    });
  });
}

function extuploadFile(file, callback) {
  console.log(file);
  const mv = require('mv');
  const file_path = file.path + path.extname(file.originalname);
  mv(file.path, file_path, function (err) {
    const fileStream = fs.createReadStream(file_path)
    const uploadParams = {
      ACL: 'public-read',
      Bucket: bucketname,
      Body: fileStream,
      Key: file.name + path.extname(file.originalname),
    }
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        console.log(err);
      }
      callback(data);
    });
  });
}
function pdfUpload(file, callback) {
  console.log(file);
  const mv = require('mv');
  const file_path = file.path + path.extname(file.originalname);
  mv(file.path, file_path, function (err) {
    const fileStream = fs.createReadStream(file_path)
    const uploadParams = {
      ACL: 'public-read',
      Bucket: bucketname,
      Body: fileStream,
      Key: file.name + path.extname(file.originalname),
    }
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        console.log(err);
      }
      callback(data);
    });
  });
}
exports.uploadFile = uploadFile
exports.extuploadFile= extuploadFile
exports.pdfUpload= pdfUpload
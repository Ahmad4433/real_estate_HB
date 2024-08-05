const checkImageMime = require("./checkImageMine");
const checkImagePresent = require("./checkImagePresent");
const chekcImageSize = require("./checkImageSize");
const uploadFile = require("./uploadFile");
const unlinkFile = require('./unlinkFile')

module.exports = {
  checkImageMime,
  checkImagePresent,
  chekcImageSize,
  uploadFile,
  unlinkFile
};

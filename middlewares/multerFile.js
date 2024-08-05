const multer = require("multer");

const multerFile = () => {
  const upload = multer({ storage: multer.memoryStorage() });
  return upload;
};

module.exports = multerFile;

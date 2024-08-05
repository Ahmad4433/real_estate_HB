const Galary = require("../../models/Galary");

const {
  checkImageMime,
  chekcImageSize,
} = require("../../utils/index");
const { uploadFile } = require("../../utils/index");
const addImages = async (req, res, next) => {
  try {
    checkImageMime(req.files);
    chekcImageSize(req.files);

    const result = await uploadFile(req.files);
    const newGalary = new Galary({
      image: result?.map((file) => file.secure_url),
    });

    const savedGalary = await newGalary.save();
    res.status(200).json({ message: "success", status: true, savedGalary });
  } catch (error) {
    next(error);
  }
};

module.exports = addImages;

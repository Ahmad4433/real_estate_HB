const Amenty = require("../../models/Amenty");

const addAmenty = async (req, res, next) => {
  const { title } = req.body;
  try {
    const findedAmenity = await Amenty.findOne({ title });
    if (findedAmenity) {
      const error = new Error("this amenty already exist");
      error.statusCode = 400;
      throw error;
    }

    const newAmenty = new Amenty({
      title,
    });

    const savedAmenty = await newAmenty.save();

    res
      .status(200)
      .json({ message: "amenity added", status: true, amenty: savedAmenty });
  } catch (error) {
    next(error);
  }
};

module.exports = addAmenty;

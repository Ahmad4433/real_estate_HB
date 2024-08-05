const Listing = require("../../models/Listing");

const getArea = async (req, res, next) => {
  try {
    const list = await Listing.find();

    let single = [];
    const units = list.map((item) => {
      return {
        title:
          item.data.area + " " + item?.data?.unit,
      };
    });

    for (let i = 0; i < units.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < single.length; j++) {
        if (single[j].title === units[i].title) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        single.push(units[i]);
      }
    }

    res.status(200).json({ message: "success", status: true, list: single });
  } catch (error) {
    next(error);
  }
};
module.exports = getArea;

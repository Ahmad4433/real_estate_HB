const Branch = require("../../models/Branch");

const getBranchList = async (req, res, next) => {
  try {
    const list = await Branch.find().sort({ _id: -1 });

    res.status(200).json({ message: "success", status: true, list });
  } catch (error) {
    next(error);
  }
};

module.exports = getBranchList;

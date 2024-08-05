const Branch = require("../../models/Branch");

const addBranch = async (req, res, next) => {
  const { data } = req.body;
  try {
    const newBranch = new Branch({ data });
    const savedBranch = await newBranch.save();
    res
      .status(200)
      .json({
        message: "branch added successfully",
        status: true,
        branch: savedBranch,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = addBranch;

const express = require("express");
const getConnection = require("./utils/getConnection");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();
const listingRoutes = require("./routes/listings");
const galaryRoutes = require("./routes/galary");
const cors = require("cors");
const userRoutes = require("./routes/user");
const dropdownRoutes = require("./routes/dropdown");
const amentyRoutes = require("./routes/amenty");
const reviewRoutes = require("./routes/review");
const branchRoutes = require("./routes/branch");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/listing", listingRoutes);
app.use("/galary", galaryRoutes);
app.use("/user", userRoutes);
app.use("/dropdown", dropdownRoutes);
app.use("/amenty", amentyRoutes);
app.use("/review", reviewRoutes);
app.use("/branch", branchRoutes);

app.use(errorHandler);

getConnection();
app.listen(process.env.PORT || 5252, () =>
  console.log(`server is listening on post:${process.env.PORT || 5252}`)
);

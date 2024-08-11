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

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true })); 

app.get("/", (req, res, next) => {
  res.send("server is running");
});

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

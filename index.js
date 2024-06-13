const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
require("dotenv").config();
const userRoutes = require("./routes/user");
const getConnection = require("./utils/getConnection");
const chatRoutes = require("./routes/chat");
const authRoutes = require("./routes/auth");
const Conversion = require("./models/Conversion");
const Message = require("./models/Message");
const User = require("./models/User");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
getConnection();

app.use("/user", userRoutes);
app.use("/chat/user", chatRoutes);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "internal server error";
  res.status(statusCode).json({ message: message });
});

const server = app.listen(process.env.PORT, () =>
  console.log(`server is listening on port: ${process.env.PORT}`)
);

const io = socket(server, {
  cors: {
    origin: "*",
  },
});

const userData = new Map();

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  userData.set(userId, socket.id);

  socket.on("message", async (message) => {
    const receiver = userData.get(message.receiverId); // receiver socket id
    const sender = userData.get(message.senderId); // sender socket id

    const newMessage = new Message({
      sender: message?.senderId,
      receiver: message?.receiverId,
      message: message?.message,
    });

    const savedMessage = await newMessage.save();

    let findedConversion = await Conversion.findOne({
      parties: { $all: [message?.senderId, message?.receiverId] },
    });

    if (!findedConversion) {
      findedConversion = new Conversion({
        message: [savedMessage._id],
        parties: [message.receiverId, message.senderId],
      });
    } else {
      findedConversion.message.push(savedMessage._id);
    }
    await findedConversion.save();
  });

  socket.on("onSelect", async (user) => {
    const senderId = user.senderId;
    const receiverId = user.receiverId;
    const isOnline = userData.get(receiverId);

    if (isOnline) {
      socket.emit("online", true);
    } else {
      socket.emit("online", false);
    }

    const findedConversion = await Conversion.find({
      parties: { $all: [senderId, receiverId] },
    })
      .populate([
        {
          path: "message",
        },
      ])
      .select("message")
      .sort({ _id: -1 });

    socket.emit("conversion", findedConversion);
  });

  socket.on("disconnect", () => {
    userData.delete(userId);
  });
});

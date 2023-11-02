const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers
const postRouter = require("./routes/Post");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comment");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(8082, () => {
    console.log("server rnning on 8082");
  });
});

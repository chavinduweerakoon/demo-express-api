const express = require("express");
const port = process.env.port || 3000;
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("we are home");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to database");
  }
);

//listen to server
app.listen(port, () => console.log(`listening on port ${port}..`));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const route = require("./routes/route");

app.use(cors());




app.use(express.json());



mongoose
  .connect(
    "mongodb+srv://hemrajdeshmukh0906:29FJPgYjdZRCoS31@cluster0.hpk8upk.mongodb.net/BloggApp"
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3005, function () {
  console.log(`Express app running on port ${process.env.PORT || 3005}`);
});
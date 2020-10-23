const express = require("express");
const mongoose = require("mongoose");
const workoutController = require("./controllers/workoutController");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(workoutController);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/fitness-trackerDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

mongoose.connection.on("error", (error) => {
  console.log("Mongoose connection error " + error);
});
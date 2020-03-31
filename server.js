const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const PORT = 3000;
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://<user1>:<password1>@ds145694.mlab.com:45694/heroku_9fq55nmx"
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
mongoose.connect(MONGODB_URI, options);
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
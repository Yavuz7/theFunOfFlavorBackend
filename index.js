require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3001;

const cors = require("cors");
const bodyParser = require("body-parser");
const { connect } = require("./db.js");

const recipeSearchRouter = require("./routes/recipeSearch.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

connect()
  .then((connection) => {
    console.log("Connected To Database");
  })
  .catch((error) => {
    console.log("Couldn't Connect To Database");
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/recipes", recipeSearchRouter);

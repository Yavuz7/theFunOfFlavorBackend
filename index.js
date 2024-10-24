require("dotenv").config();
const express = require("express");
const { sql } = require("./db.js");
const app = express();
const PORT = 3001;

const cors = require("cors");
const bodyParser = require("body-parser");

const recipesRouter = require("./routes/recipes.js");
const stepsRouter = require("./routes/steps.js");
const suggestionsRouter = require("./routes/suggestions.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/recipes", recipesRouter);
app.use("/api/steps", stepsRouter);
app.use("/api/suggestions", suggestionsRouter);

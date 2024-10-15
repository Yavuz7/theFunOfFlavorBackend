require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3001;

const cors = require("cors");

let notes = ["1", "2"];
console.log(process.env.TEST_KEY);

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const { sql } = require("../db.js");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  //To do, fix Getting body
  const { StepID, UserID, SuggestionText } = req.body;
  console.log(StepID);
  const query = `
    INSERT INTO Suggestions (
    StepID, 
    UserID, 
    SuggestionText
    )
    VALUES (
    ${StepID}, 
    ${UserID}, 
    ${SuggestionText}
    );`;
  try {
    const result = await sql.query(query);
    res.send(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

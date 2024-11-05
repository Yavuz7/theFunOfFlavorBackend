const express = require("express");
const { sql } = require("../db.js");

const router = express.Router();

const {
  bodyIntValidation,
  bodyTextValidation,
  validate,
} = require("../validators.js");

router.post(
  "/",
  [
    ...bodyIntValidation(["StepID"]),
    ...bodyIntValidation(["UserID"]),
    ...bodyTextValidation(["SuggestionText"]),
  ],
  validate,
  async (req, res) => {
    console.log(req.body);
    const { StepID, UserID, SuggestionText } = req.body;
    console.log(SuggestionText);
    const query = `
    INSERT INTO Suggestions (
    StepID, 
    UserID, 
    SuggestionText
    )
    VALUES (
    @StepID, 
    @UserID, 
    @SuggestionText
    );`;
    try {
      const pool = await sql.connect();

      const result = await pool
        .request()
        .input("StepID", sql.Int, StepID)
        .input("UserID", sql.Int, UserID)
        .input("SuggestionText", sql.NVarChar, SuggestionText)
        .query(query);

      res.send(result.recordset);
      console.log(result.rowsAffected);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;

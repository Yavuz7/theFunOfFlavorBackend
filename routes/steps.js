const express = require("express");
const { sql } = require("../db.js");

const router = express.Router();

//Get Steps Of Recipe
router.get("/:id", async (req, res) => {
  //Get Recipe Steps
  const stepsQuery = `
    SELECT 
        StepID, 
        StepNumber, 
        Mainstep,
        SubStep1,
        SubStep2,
        SubStep3  
    FROM Steps 
    WHERE RecipeID = ${req.params.id}
    ORDER BY StepNumber;`;
  //Get all suggestions here
  //To do, handle suggestion splitting on Users end
  const suggestionsQuery = `
    SELECT 
        StepID,
        SuggestionID,
        Votes
    FROM SUGGESTIONS
    WHERE StepID IN
    (
        SELECT StepID
        FROM Steps
        WHERE RecipeID = ${req.params.id}
    )
    ORDER BY 
        Votes DESC, 
        SuggestionID`;
  try {
    const [stepsResult, suggestionsResult] = await Promise.all([
      sql.query(stepsQuery),
      sql.query(suggestionsQuery),
    ]);

    const finalResults = [stepsResult.recordset, suggestionsResult.recordset];

    res.send(finalResults);
    console.log(finalResults);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

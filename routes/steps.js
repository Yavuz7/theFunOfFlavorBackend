const express = require("express");
const { sql } = require("../db.js");

const router = express.Router();

//Get Steps Of Recipe
router.get("/:id", async (req, res) => {
  const query = `
    SELECT StepID, StepNumber, 
        Mainstep,
        SubStep1,
        SubStep2,
        SubStep3  
    FROM Steps 
    WHERE RecipeID = ${req.params.id}
    ORDER BY StepNumber`;
  try {
    const result = await sql.query(query);
    res.send(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

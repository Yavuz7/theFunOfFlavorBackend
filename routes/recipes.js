const express = require("express");
const { sql } = require("../db.js");

const router = express.Router();

//Retrieve Recipes
router.get("/", async (req, res) => {
  const offSet = req.body.offSet ? parseInt(req.offSet) : 0;
  const query = `
  SELECT * FROM Recipes 
  ORDER BY Votes DESC,
  RecipeID OFFSET ${offSet} 
  ROWS FETCH NEXT 10 ROWS ONLY`;
  try {
    const result = await sql.query(query);
    res.send(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.log(error);
  }
});

//Get Singular recipe
router.get("/:id", async (req, res) => {
  const query = `
  SELECT * FROM Recipes 
  WHERE RecipeID=${req.params.id}`;
  try {
    const result = await sql.query(query);
    res.send(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

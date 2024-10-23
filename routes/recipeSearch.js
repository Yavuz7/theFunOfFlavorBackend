const express = require("express");
const { sql } = require("../db.js");

const router = express.Router();

//Retrieve Recipes
router.get("/", async (req, res) => {
  const offSet = req.offSet ? req.offSet : 0;
  const newQuery = `SELECT * FROM Recipes ORDER BY Votes OFFSET ${offSet} ROWS FETCH NEXT 10 ROWS ONLY`;
  try {
    const result = await sql.query(newQuery);
    res.send(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.log(error);
  }
});

//Get singular recipe
router.get("/:id", async (req, res) => {
  const newQuery = `SELECT * FROM RECIPE_SEARCH_INDEX WHERE id=${req.params.id}`;
  try {
    const result = await sql.query(newQuery);
    res.send(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.log(error);
  }
  // const result = await
});

module.exports = router;

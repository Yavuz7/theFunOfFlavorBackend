const express = require("express");
const { sql } = require("../db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  //Learn mssql requests
  const newQuery = "SELECT * FROM RECIPE_SEARCH_INDEX";
  try {
    const result = await sql.query(newQuery);
    res.send(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.log(error);
  }
  // const result = await
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

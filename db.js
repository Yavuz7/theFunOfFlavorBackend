const sql = require("mssql");

const config = {
  server: process.env.SERVER_NAME,
  database: process.env.DATABASE_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};
//Connect to Db on start
sql
  .connect(config)
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.error("Error connecting to database", err));

module.exports = {
  sql,
};

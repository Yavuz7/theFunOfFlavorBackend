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

module.exports = {
  connect: () => sql.connect(config),
  sql,
};

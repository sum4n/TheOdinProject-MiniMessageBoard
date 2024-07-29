require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/${process.env.DB_DATABASE}`,
});

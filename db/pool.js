require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString:
    "postgresql://sdas:process.env.DB_PASS@localhost:5432/mini_messageboard",
});

#! /usr/bin/env node

// Get arguments passed on command line.
const userArgs = process.argv.slice(2);
const connectionString = userArgs[0];

if (connectionString == undefined) {
  return;
}

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ) UNIQUE NOT NULL,
  message VARCHAR ( 255 ) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages(username, message)
VALUES
  ('User 1', 'User 1 Message 1'),
  ('User 2', 'User 2 Message 2'),
  ('User 3', 'User 3 Message 3'),
  ('User 4', 'User 4 Message 4'),
  ('User 5', 'User 5 Message 5');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

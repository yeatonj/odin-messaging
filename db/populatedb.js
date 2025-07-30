#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

// Note that inserted users will not be able to log in due to hash/salting
const SQL = `
CREATE TABLE IF NOT EXISTS users (
    id          INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username    VARCHAR (255) UNIQUE,
    password    VARCHAR (255),
    first       VARCHAR (255),
    last        VARCHAR (255),
    isMember    BOOLEAN,
    isAdmin     BOOLEAN
);

CREATE TABLE IF NOT EXISTS messages (
  id            INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message       VARCHAR (511),
  user_id       INTEGER references users(id),
  date          TIMESTAMP
);

INSERT INTO users (username, password, first, last, isMember, isAdmin) 
VALUES
  ('fake_admin@admin.com', 'fake_ad', 'John', 'Admin', true, true),
  ('fake_non_member@admin.com', 'fake_non', 'Jack', 'Anon', false, false),
  ('fake_member@member.com', 'fake_mem', 'Joe', 'Member', true, false);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://" + process.env.POST_USER + "@" + process.env.POST_HOST + ":" + process.env.POST_PORT + "/" + process.env.POST_DATABASE,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

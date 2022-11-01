const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "nodejs_basics";

async function connect() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  return db;
}

module.exports = connect;

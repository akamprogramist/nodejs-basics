const { ObjectId } = require("mongodb");
const connect = require("./../database/db");

exports.index = async (req, res) => {
  const db = await connect();
  const book = await db.collection("book").find().toArray();
  res.json(book);
};

exports.store = async (req, res) => {
  const db = await connect();
  await db.collection("book").insertOne(req.body);
  res.status(201).json({ data: "Book is stored" });
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  const book = await db.collection("book").find({ _id }).toArray();
  res.json(book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  await db.collection("book").updateOne({ $set: req.body });
  res.json({ data: "Book is updated" });
};

exports.delete = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  await db.collection("book").deleteOne({ _id });
  res.status(204).json();
};

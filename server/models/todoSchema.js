const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  content: String,
  date: {type: Date, default: Date.now},
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  task_name: String,
  date: Date,
});

module.exports = mongoose.model("User", userSchema);

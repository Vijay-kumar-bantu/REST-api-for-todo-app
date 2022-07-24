const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  task_name: String,
});

module.exports = mongoose.model("User", userSchema);

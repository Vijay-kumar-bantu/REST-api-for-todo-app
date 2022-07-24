const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./User");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.connect(process.env.SERVER_ADDRESS, () => {
  console.log("db connected");
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

/*Important functions */

const get_details = async () => {
  const users = await User.find();

  return users;
};

const create_detail = async (name) => {
  const users = await User.create({ task_name: name });
  return users;
};

const delete_details = async (id) => {
  const delete_one = { _id: id };
  const users = await User.deleteOne(delete_one);

  return users;
};

app.get("/", (req, res) => {
  get_details().then((data) => {
    res.send(data);
  });
});

app.post("/", (req, res) => {
  try {
    const process = create_detail(req.body.task);
    process.then((data) => {
      res.send(data);
    });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

app.delete("/", (req, res) => {
  try {
    const process = delete_details(req.body.id);
    process.then((data) => {
      res.send(data);
    });
  } catch (e) {
    res.send(e);
  }
});

app.listen(process.env.PORT, () => console.log("server started"));

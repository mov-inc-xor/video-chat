// const mongoose = require("mongoose");
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  token: {
    type: String,
    required: true,
    match: /[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}/
  },
});

const Room = mongoose.model("Room", roomSchema);

// module.exports = Room;
export default Room;
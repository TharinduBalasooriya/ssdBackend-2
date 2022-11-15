const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const messageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  
  },
});
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
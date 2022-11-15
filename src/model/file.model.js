const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const fileSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  
  },
});
const File = mongoose.model("File", fileSchema);
module.exports = File;
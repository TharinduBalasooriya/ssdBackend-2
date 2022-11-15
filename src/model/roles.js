const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const roleSchema = new Schema({
 userID:String,
 role:String
});
const Roles = mongoose.model("roles", roleSchema);
module.exports = Roles;
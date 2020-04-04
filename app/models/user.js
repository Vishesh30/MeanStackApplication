var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, lowercase: true, required: true, unique: true }
});

UserSchema.pre("save", function() {
  var user = this;
  var hash = bcrypt.hashSync(user.password, null);
  user.password = hash;
});

module.exports = mongoose.model("User", UserSchema);

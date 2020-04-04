var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
  title: { type: String, lowercase: true, required: true, unique: true },
  description: { type: String, required: true },
  details: { type: String, lowercase: true, required: false, unique: false },
  questions: [
    {
      questiontitle: String,
      options: {
        op1: { type: String, required: true },
        op2: { type: String, required: true },
        op3: { type: String, required: true },
        op4: { type: String, required: true }
      }
    }
  ]
});

module.exports = mongoose.model("Quiz", QuizSchema);

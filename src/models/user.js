const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: true, index: { unique: true } },
  phone: { type: Number, required: true, index: { unique: true } },
  dob: { type: Date, default: null, required: true, index: { unique: false } },
  is_active: { type: Boolean, default: true },
});

userSchema.plugin(timestamps, {
  createdAt: "created_at",
  updatedAt: "updated_at",
});

const User = mongoose.model("User", userSchema);

module.exports = User;

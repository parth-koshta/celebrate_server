const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const { Schema } = mongoose;

const celebrationSchema = new Schema({
  title: { type: String, required: true },
  message: { type: String },
  date: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  contact: { type: Schema.Types.ObjectId, ref: "Contact" },
});

celebrationSchema.plugin(timestamps, {
  createdAt: "created_at",
  updatedAt: "updated_at",
});

const Celebration = mongoose.model("Celebration", celebrationSchema);

module.exports = Celebration;

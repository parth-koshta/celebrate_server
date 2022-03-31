const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  phone1: { type: Number, required: true },
  phone2: { type: Number },
  phone3: { type: Number },
  dob: { type: Date },
  anniversary: { type: Date },
  other_celebrations: { type: Object },
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

contactSchema.plugin(timestamps, {
  createdAt: "created_at",
  updatedAt: "updated_at",
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

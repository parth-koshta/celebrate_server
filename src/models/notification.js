const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const { Schema } = mongoose;

const notificationSchema = new Schema({
  title: { type: String, required: true },
  time: { type: Date, required: true },
  is_active: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  celebration: {type: Schema.Types.ObjectId, ref: 'Celebration'}
});

notificationSchema.plugin(timestamps, {
  createdAt: "created_at",
  updatedAt: "updated_at",
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;

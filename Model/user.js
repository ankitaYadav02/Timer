import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    owner: String,
    duration: String,
    startTime: String,
    password: String,
    roomMates: Array,
    url: String,
    roomId: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model(DbCollections.Users, userSchema);

export default User;

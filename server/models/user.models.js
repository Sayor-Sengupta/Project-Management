import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    groups: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
      },
    ],
  },
  { timeseries: true }
)
 const User = mongoose.model("User", userSchema);
export default User
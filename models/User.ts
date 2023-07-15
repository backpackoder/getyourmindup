import { IUser } from "../interfaces/user";
import mongoose, { Schema, model, type Model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    sex: {
      type: String, enum: {
        values: ["male", "famale"],
        message: "{VALUE} not a valid sex",
        default: "male",
        required: true,
      }
    },
    profession: {
      type: String
    },
    liveWith: {
      type: String, enum: {
        values: ["family", "friends", "spouse", "alone"],
        message: "{VALUE} not a valid character",
      }
    },
    passions: { type: String},
    hasPet: { type: Boolean, default: false},
    role: {
      type: String,
      enum: {
        values: ["admin", "client"],
        message: "{VALUE} not a valid role",
        default: "client",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || model('User', userSchema)

export default User
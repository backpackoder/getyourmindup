import mongoose, { Schema, model, type Model } from "mongoose";
import { IActionsByUser } from "../interfaces";

const actionsByUserSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    actionsDone: {
      type: [
        {
          actionDone: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "ActionOfTheDay",
          },
          story: {
            type: String,
            required: true
          }
        }
      ],
      required: true
    },
    createdAt: Number,
    updatedAt: Number,
  },
  {
    // timestamps: true,
    timestamps: { currentTime: () => Date.now() },
  }
);

const ActionsByUser: Model<IActionsByUser> = mongoose.models.ActionsByUser || model('ActionsByUser', actionsByUserSchema)

export default ActionsByUser
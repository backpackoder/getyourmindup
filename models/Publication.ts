import { IPublication } from "../interfaces/publication";
import { IUser } from "../interfaces/user";
import mongoose, { Schema, model, type Model } from "mongoose";

const publicationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    body: { type: String, required: true },
    isPrivate: { type: Boolean, default: true, required: true },
    type: {
      type: String, enum: {
        values: ["gratitude", "article"],
        message: "{VALUE} not a valid type",
        default: "gratitude",
        required: true,
      }
    },
    createdAt: Number,
    updatedAt: Number,
  },
  {
    // timestamps: true,
    timestamps: { currentTime: () => Date.now() },
  }
);

const Publication: Model<IPublication> = mongoose.models.Publication || model('Publication', publicationSchema)

export default Publication
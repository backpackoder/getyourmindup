import mongoose, { Schema, model, type Model } from "mongoose";
import { IActionsOfTheDay } from "../interfaces";

const actionsOfTheDaySchema = new Schema(
  {
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ActionsOfTheDay: Model<IActionsOfTheDay> = mongoose.models.ActionsOfTheDay || model('ActionsOfTheDay', actionsOfTheDaySchema)

export default ActionsOfTheDay
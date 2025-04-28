import { Schema, model } from "mongoose";
import type { Schemas, Models } from "../types";

const AccountSchema = new Schema<Schemas.Account, Models.Account>(
  {
    username: {
      type: String,
      min: [8, "Username must be at least 8 characters."],
      max: [15, "Username must be less than 15 characters."],
      required: [true, "Username is required."],
    },
    password: {
      type: String,
      min: [8, "Password must be at least 8 characters."],
      max: [15, "Password must be less than 15 characters."],
      required: [true, "Password is required."],
    },
    clearance: {
      type: Number,
      enum: {
        values: [0, 1, 2],
        message: "Clearance level not found.",
      },
      required: [true, "Clearance level required."],
    },
  },
  {
    timestamps: true,
  }
);

const Account = model<Schemas.Account>("Account", AccountSchema);
export default Account;

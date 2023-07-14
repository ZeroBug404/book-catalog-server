import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    // },
  }
);

export const User = model<IUser>("User", UserSchema);

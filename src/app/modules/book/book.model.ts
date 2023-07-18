import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const BookSchema = new Schema<IBook>(
  {
    // id: {
    //   type: String,
    //   unique: true,
    // },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    reviews: {
      type: [String],
      default: [],
    },
    userEmail: {
      type: String,
      required: true,
    },
    wishlist: {
      type: Boolean,
      default: false,
    },
    readinglist: {
      type: Boolean,
      default: false,
    },
    finished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    // },
  }
);

export const Book = model<IBook>("Book", BookSchema);

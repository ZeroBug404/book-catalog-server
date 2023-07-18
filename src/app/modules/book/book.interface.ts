import { Types } from "mongoose";
import { IUser } from "../user/user.interface";

export type IBook = {
  // id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
  userEmail: string;
};

export type IBookFilters = {
  searchTerm?: string;
}
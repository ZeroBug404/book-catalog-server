import mongoose from "mongoose";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { bookSearchableFields } from "./book.constant";
import { IBook, IBookFilters } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook): Promise<IBook | null> => {
  const createBook = await Book.create(book);
  if (!createBook) {
    throw new Error(`Faild to create book`);
  }
  return createBook;
};

const createReviews = async (
  review: string,
  bookId: string
): Promise<any> => {
  const createReview = await Book.updateOne(
    { _id: new mongoose.Types.ObjectId(bookId) },
    { $push: { reviews: review } }
  );
  if (!createReview) {
    throw new Error(`Faild to create book`);
  }
  return createReview;
};

const getAllBooks = async (
  filters: IBookFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const addConditions = [];

  if (searchTerm) {
    addConditions.push({
      $or: bookSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    addConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const whereCondition = addConditions.length ? { $and: addConditions } : {};

  const result = await Book.find(whereCondition).skip(skip).limit(limit);

  const total = await Book.countDocuments(whereCondition);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne({ _id: id });

  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const updateFeature = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOneAndDelete({ _id: id });

  return result;
};

const getLatestBooks = async (): Promise<IBook[]> => {
  const result = await Book.find().sort({ createdAt: -1 }).limit(10);

  return result;
};

export const BookService = {
  createBook,
  createReviews,
  getAllBooks,
  getSingleBook,
  updateBook,
  updateFeature,
  deleteBook,
  getLatestBooks,
};

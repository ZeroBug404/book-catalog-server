import { NextFunction, Request, Response } from "express";
import pick from "../../../shared/pick";
import { bookFilterableFields } from "./book.constant";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = req.body;

    const result = await BookService.createBook(book);

    res.status(200).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.id
    const review = req.body.reviews;

    const result = await BookService.createReviews(review, bookId);

    res.status(200).json({
      success: true,
      message: "Review created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  const paginationFields = ["page", "limit", "sortBy", "sortOrder"];

  const filters = pick(req.query, bookFilterableFields);

  const paginationOptions = pick(req.query, paginationFields);

  try {
    const result = await BookService.getAllBooks(filters, paginationOptions);

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

  const getSingleBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;

      const result = await BookService.getSingleBook(id);

      res.status(200).json({
        success: true,
        message: 'Book retrieved successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const updatedData = req.body;

      const result = await BookService.updateBook(id, updatedData);

      res.status(200).json({
        success: true,
        message: 'Book updated successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const result = await BookService.deleteBook(id);

      res.status(200).json({
        success: true,
        message: 'Book deleted successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const getLatestBooks = async (req: Request, res: Response, next: NextFunction) => {  
    try {
      const result = await BookService.getLatestBooks();

      res.status(200).json({
        success: true,
        message: "latest 10 Books retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

export const BookController = {
  createBook,
  createReviews,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  getLatestBooks
};

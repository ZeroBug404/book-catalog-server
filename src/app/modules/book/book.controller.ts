import { NextFunction, Request, Response } from "express";
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

// const getAllCows = async (req: Request, res: Response, next: NextFunction) => {
//     const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder'];

//     const filters = pick(req.query, cowFilterableFields);

//     const paginationOptions = pick(req.query, paginationFields);

//     try {
//       const result = await CowService.getAllCows(filters, paginationOptions);

//       res.status(200).json({
//         success: true,
//         message: 'Cows retrieved successfully',
//         data: result,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };

//   const getSingleCow = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     try {
//       const id = req.params.id;

//       const result = await CowService.getSingleCow(id);

//       res.status(200).json({
//         success: true,
//         message: 'Cow retrieved successfully',
//         data: result,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };

//   const updateCow = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const id = req.params.id;

//       const updatedData = req.body;

//       const result = await CowService.updateCow(id, updatedData);

//       res.status(200).json({
//         success: true,
//         message: 'Cow updated successfully',
//         data: result,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };

//   const deleteCow = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const id = req.params.id;

//       const result = await CowService.deleteCow(id);

//       res.status(200).json({
//         success: true,
//         message: 'Cow deleted successfully',
//         data: result,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };

export const BookController = {
  createBook,
};

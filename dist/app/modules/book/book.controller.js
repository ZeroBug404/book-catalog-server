"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const pick_1 = __importDefault(require("../../../shared/pick"));
const book_constant_1 = require("./book.constant");
const book_service_1 = require("./book.service");
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = req.body;
        const result = yield book_service_1.BookService.createBook(book);
        res.status(200).json({
            success: true,
            message: "Book created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const createReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const review = req.body.reviews;
        const result = yield book_service_1.BookService.createReviews(review, bookId);
        res.status(200).json({
            success: true,
            message: "Review created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationFields = ["page", "limit", "sortBy", "sortOrder"];
    const filters = (0, pick_1.default)(req.query, book_constant_1.bookFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, paginationFields);
    try {
        const result = yield book_service_1.BookService.getAllBooks(filters, paginationOptions);
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.BookService.getSingleBook(id);
        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = yield book_service_1.BookService.updateBook(id, updatedData);
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateFeature = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = yield book_service_1.BookService.updateFeature(id, updatedData);
        res.status(200).json({
            success: true,
            message: 'Feature updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.BookService.deleteBook(id);
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getLatestBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.getLatestBooks();
        res.status(200).json({
            success: true,
            message: "latest 10 Books retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BookController = {
    createBook,
    createReviews,
    getAllBooks,
    getSingleBook,
    updateBook,
    updateFeature,
    deleteBook,
    getLatestBooks
};

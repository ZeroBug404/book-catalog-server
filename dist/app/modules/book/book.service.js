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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const book_constant_1 = require("./book.constant");
const book_model_1 = require("./book.model");
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const createBook = yield book_model_1.Book.create(book);
    if (!createBook) {
        throw new Error(`Faild to create book`);
    }
    return createBook;
});
const createReviews = (review, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const createReview = yield book_model_1.Book.updateOne({ _id: new mongoose_1.default.Types.ObjectId(bookId) }, { $push: { reviews: review } });
    if (!createReview) {
        throw new Error(`Faild to create book`);
    }
    return createReview;
});
const getAllBooks = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const addConditions = [];
    if (searchTerm) {
        addConditions.push({
            $or: book_constant_1.bookSearchableFields.map((field) => ({
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
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const whereCondition = addConditions.length ? { $and: addConditions } : {};
    const result = yield book_model_1.Book.find(whereCondition).skip(skip).limit(limit);
    const total = yield book_model_1.Book.countDocuments(whereCondition);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOne({ _id: id });
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const updateFeature = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOneAndDelete({ _id: id });
    return result;
});
const getLatestBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.find().sort({ createdAt: -1 }).limit(10);
    return result;
});
exports.BookService = {
    createBook,
    createReviews,
    getAllBooks,
    getSingleBook,
    updateBook,
    updateFeature,
    deleteBook,
    getLatestBooks,
};

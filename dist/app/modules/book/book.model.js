"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    // },
});
exports.Book = (0, mongoose_1.model)("Book", BookSchema);

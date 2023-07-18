"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/create-book", book_controller_1.BookController.createBook);
router.get("/get-latest", book_controller_1.BookController.getLatestBooks);
router.get("/:id", book_controller_1.BookController.getSingleBook);
router.patch("/:id", book_controller_1.BookController.updateBook);
router.delete("/:id", book_controller_1.BookController.deleteBook);
router.post("/post-reviews/:id", book_controller_1.BookController.createReviews);
router.patch("/feature-update/:id", book_controller_1.BookController.updateFeature);
router.get("/", book_controller_1.BookController.getAllBooks);
exports.BookRoutes = router;

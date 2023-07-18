import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/create-book", BookController.createBook);

router.get("/get-latest", BookController.getLatestBooks);

router.get("/:id", BookController.getSingleBook);

router.patch("/:id", BookController.updateBook);

router.delete("/:id", BookController.deleteBook);

router.post("/post-reviews/:id", BookController.createReviews);

router.patch("/feature-update/:id", BookController.updateFeature);

router.get("/", BookController.getAllBooks);

export const BookRoutes = router;

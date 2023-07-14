import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/create-book", BookController.createBook);

// router.get("/:id", BookController.getSingleStudent);

// router.patch("/:id", BookController.updateStudent);

// router.delete("/:id", BookController.deleteStudent);

// router.get("/", BookController.getAllStudents);

export const BookRoutes = router;

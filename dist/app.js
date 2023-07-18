"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// import cookieParser from 'cookie-parser';
const index_1 = __importDefault(require("./app/routes/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use("/api/v1/", index_1.default);
// test api
// app.get("/", (req: Request, res: Response) => {
//   throw new Error('New error occurred')
// });
exports.default = app;

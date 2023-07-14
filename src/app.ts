import cors from "cors";
import express, { Application, Request, Response } from "express";
// import routes from './app/routes';
// import cookieParser from 'cookie-parser';
import routes from "./app/routes/index";

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use("/api/v1/", routes);

// test api
// app.get("/", (req: Request, res: Response) => {
//   throw new Error('New error occurred')
// });

export default app;

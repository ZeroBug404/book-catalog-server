import cors from "cors";
import express, { Application } from "express";
// import routes from './app/routes';
// import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use('/api/v1/', routes);

// test api
// app.get("/", (req: Request, res: Response) => {
//   throw new ApiError(400, 'New error occurred')
// });

export default app;

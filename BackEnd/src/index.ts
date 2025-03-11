import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import connectToDatabase from "./config/db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import { OK } from "./constants/http";
import authRoutes from "./routes/auth.route";

const app = express();

// Mock implementation of catchErrors function
const catchErrors = (
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    handler(req, res, next).catch(next);
  };
};

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);

app.use("/auth", authRoutes)

app.use(cookieParser());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(OK).json({
    status: "healthy",
  });
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} environment.`);
  await connectToDatabase();
});

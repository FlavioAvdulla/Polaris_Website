// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import connectToDatabase from "./config/db";
// import errorHandler from "./middleware/errorHandler";
// import authenticate from "./middleware/authenticate";
// import authRoutes from "./routes/auth.route";
// import userRoutes from "./routes/user.route";
// import sessionRoutes from "./routes/session.route";
// import productRoutes from "./routes/product.route"; // Added this line
// import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";

// import path from "path";

// const app = express();

// // Middleware setup
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: APP_ORIGIN, credentials: true }));
// app.use(cookieParser());

// // Health check
// app.get("/", (_, res) => res.status(200).json({ status: "healthy" }));

// // Routes
// app.use("/auth", authRoutes);
// app.use("/user", authenticate, userRoutes);
// app.use("/sessions", authenticate, sessionRoutes);
// app.use("/api/products", productRoutes); // Ensuring this is included
// app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

// // Error handling middleware
// app.use(errorHandler);

// // Start server & connect to DB
// app.listen(PORT, async () => {
//   console.log(`Server running on port ${PORT} in ${NODE_ENV} environment`);
//   await connectToDatabase();
// });


import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/db";
import errorHandler from "./middleware/errorHandler";
import authenticate from "./middleware/authenticate";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import sessionRoutes from "./routes/session.route";
import productRoutes from "./routes/product.route";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import path from "path";

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: APP_ORIGIN, credentials: true }));
app.use(cookieParser());

// Health check
app.get("/", (_, res) => res.status(200).json({ status: "healthy" }));

// Routes
app.use("/auth", authRoutes);
app.use("/user", authenticate, userRoutes);
app.use("/sessions", authenticate, sessionRoutes);
app.use("/api/products", productRoutes);
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

// Error handling middleware
app.use(errorHandler);

// Connect to database on cold start
connectToDatabase().then(() => {
  console.log(`Database connected (${NODE_ENV} environment)`);
}).catch(console.error);

// Export the Express app for Vercel serverless functions
export default app;
// If using CommonJS, use: module.exports = app;
import express, { Request, Response, NextFunction } from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController";
import authMiddleware from "../middleware/auth";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, (req: Request, res: Response, next: NextFunction) => addToCart(req, res, next));
cartRouter.post("/remove", authMiddleware, (req: Request, res: Response, next: NextFunction) => removeFromCart(req, res, next));
cartRouter.post("/get", authMiddleware, (req: Request, res: Response, next: NextFunction) => getCart(req, res, next));

export default cartRouter;

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
    body: {
        userId?: string;
    };
    headers: {
        token?: string;
    };
}

const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "Not authorized, Login Again." });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export default authMiddleware;
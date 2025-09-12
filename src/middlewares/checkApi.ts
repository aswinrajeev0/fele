import { NextFunction, Request, Response } from "express";
import { ERROR_MESSAGES, HTTP_STATUS } from "../utils/constants";

export const checkApi = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers["x-api-key"];
    const API_KEY = process.env.API_KEY;
    if (!apiKey || apiKey !== API_KEY) {
        res.status(HTTP_STATUS.FORBIDDEN).json({
            message: ERROR_MESSAGES.INVALID_API
        });
        return;
    }
    next();
}
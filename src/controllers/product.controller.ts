import { NextFunction, Request, Response } from "express";
import { createProductSchema } from "../utils/validations";
import { ProductModel } from "../models/product.schema";
import { ERROR_MESSAGES, HTTP_STATUS, SUCCESS_MESSAGES } from "../utils/constants";
import { Category, CategoryModel } from "../models/category.schema";

export const addProduct = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = createProductSchema.parse(req.body);
        await ProductModel.create(productData);
        res.status(HTTP_STATUS.CREATED).json({
            message: SUCCESS_MESSAGES.PRODUCT_SAVED
        })
    } catch (error) {
        next(error)
    }
}

export const getCategories = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await CategoryModel.find().select("_id name");

        res.status(HTTP_STATUS.SUCCESS).json({
            totalCategories: categories.length,
            categories
        })
    } catch (error) {
        next(error)
    }
}

export const getProducts = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {categoryId} = req.query;
        if(!categoryId){
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                success: false,
                message: ERROR_MESSAGES.CATEGORY_ID_REQUIRED
            })
            return;
        }

        const category = await CategoryModel.findById(categoryId);
        if(!category){
            res.status(HTTP_STATUS.NOT_FOUND).json({
                success: false,
                message: ERROR_MESSAGES.CATEGORY_NOT_FOUND
            })
            return;
        }

        const products = await ProductModel.find({categoryId}).select(
            "productId productName price productImage brand"
        );

        res.status(HTTP_STATUS.SUCCESS).json({
            categoryId,
            categoryName: category.name,
            products
        })
    } catch (error) {
        next(error)
    }
}
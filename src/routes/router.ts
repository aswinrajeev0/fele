import { Router } from "express";
import { addProduct, getCategories, getProducts } from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/save", addProduct);
productRouter.get("/categories", getCategories);
productRouter.get("/list", getProducts);

export default productRouter;
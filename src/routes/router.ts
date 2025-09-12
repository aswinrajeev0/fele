import { Router } from "express";
import { addProduct, getCategories, getProducts } from "../controllers/product.controller";
import { checkApi } from "../middlewares/checkApi";

const productRouter = Router();

productRouter.use(checkApi)
productRouter.post("/save", addProduct);
productRouter.get("/categories", getCategories);
productRouter.get("/list", getProducts);

export default productRouter;
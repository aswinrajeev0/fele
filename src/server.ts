import express, { json } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db';
import productRouter from './routes/router';
import { errorHandler } from './middlewares/error.middleware';
dotenv.config();

const app = express();
connectDB();

app.use(morgan("dev"))
app.use(json())

app.use("/api/product", productRouter);

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
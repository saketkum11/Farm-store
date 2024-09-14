import { Hono } from "hono";
import verifyUser from "../middleware/auth.middleware";
import { addProduct, getAllProduct } from "../controllers/product.controller";
import { v2 as cloudinary } from 'cloudinary';

export const productRoute = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_TOKEN: string;
      CLOUDNARY_NAME:string;
      CLOUDNARY_KEY:string;
      CLOUDNARY_SECRET:string
    },
    Variable:{
      productImage:string
    }
  }>();


productRoute.use(verifyUser)



productRoute.get("/",getAllProduct)
productRoute.post("/createProduct", addProduct)

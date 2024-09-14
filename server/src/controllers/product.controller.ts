import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
export const getAllProduct = async(c:any)=>{
    try {
        console.log("hello product kids")
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate());
       
          console.log("from product page")
        return c.text("hello my all product")
    } catch (error:any) {
        c.status(500)
        return c.text(error.message)
    }
}

export const addProduct = async(c:any)=>{
    const body = await c.req.parseBody()
    console.log(body["image"].name)
    const fileName = body["image"].name

    return c.text("hello world")
}
export const removeProduct = async(c)=>{}
export const updateProductDetailList = async(c)=>{}
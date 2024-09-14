import { getCookie } from "hono/cookie"
import { verify } from "hono/jwt"
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
export default async function verifyUser(c:any,next:any){
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate());
          
        const cookies = getCookie(c,"accessToken")
        const headers = await c.req.header("authorization")?.replace("Bearer "," ")  
        const token = cookies || headers
        if(!token){
            return c.json({message:"Invalid Token"})
        }
        const decodeToken = await verify(token,c.env.JWT_TOKEN)
        if(!decodeToken){
            return c.json({message:"Invalid secret token"})
        }
        const user = await prisma.user.findFirst({
            where:{
                id: Number(decodeToken.id)
            },select:{
                id:true,
                email:true,
                fullName:true
            }
        })
        if (!user) {
            c.status(403)
            return c.json({message:"user not found"})
          }
          c.req.user = user
       await next()
    } catch (error:any) {
        c.status(500)
        return c.text(error.message)
    }
}
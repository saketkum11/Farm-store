import { z } from "zod";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { hashPassword } from "../../utils/hashPassword";
import { comparePassword } from "../../utils/comparePassword";
import { jwt, sign, verify, decode } from "hono/jwt";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
const verifyRegisterUser = z.object({
  email: z.string().email(),
  fullName: z.string(),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(5)
    .max(10),
});
const validateLoginData = z.object({
  email: z.string().email({ message: "must  content @" }),
  password: z.string().max(10, { message: "Must not exceed 10 alphbate" }),
});

export const registerUser = async (c: any): Promise<Response> => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    console.log("line 40", await c.env.JWT_TOKEN);
    const body = await c.req.json();

    const validateBody = verifyRegisterUser.safeParse(body);
    if (!validateBody.success) {
      c.status(409);
      return c.json(validateBody.error);
    }
    const hashedPassword = await hashPassword(body.password);
    const alreadyUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (alreadyUser) {
      c.status(411);
      return c.text("User Already created");
    }
    await prisma.user.create({
      data: {
        email: body.email,
        fullName: body.fullName,
        password: hashedPassword,
      },
    });
    c.status(201);
    return c.text("User Successfully Created");
  } catch (error: any) {
    c.status(500);
    return c.json(error.message);
  }
};
export const login = async (c: any) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    const validateBody = validateLoginData.safeParse(body);
    if (!validateBody.success) {
      c.status(409);
      return c.json(validateBody.error);
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    const compare = await comparePassword(body.password, user?.password || " ");
    if (!compare) {
      c.status(403);
      return c.text("Password is invalid");
    }
    const jwt = await sign(
      {
        id: user?.id,
        fullName: user?.fullName,
      },
      c.env.JWT_TOKEN
    );
    const option = {
      httpOnly: true,
      secure: true,
    };
    setCookie(c, "accessToken", jwt, option);
    return c.json({
      success: "Logged In",
      accessToken: jwt,
    });
  } catch (error: any) {
    c.status(500);
    return c.json(error.message);
  }
};
export const logout = async (c: any) => {
  try {
    const cookies = getCookie(c, "accessToken");
    if (cookies) deleteCookie(c, "accessToken");
    return c.json("Successfully Logged out");
  } catch (error: any) {
    c.status(500);
    return c.json(error.message);
  }
};

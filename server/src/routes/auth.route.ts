import { Hono } from "hono";
import { registerUser ,login, logout} from "../controllers/auth.controller";
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_TOKEN: string;
    };
  }>();

userRouter.get("/register", registerUser)
userRouter.post("/login", login)
userRouter.post("/logout", logout)

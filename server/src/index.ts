import { Hono } from "hono"
import { userRouter } from "./routes/auth.route"
import { productRoute } from "./routes/product.route"

const app = new Hono()


app.route("/api/v1/user", userRouter)
app.route("/api/v1/product", productRoute)
export default app

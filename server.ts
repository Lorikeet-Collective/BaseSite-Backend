import type { Express } from "express";
import "dotenv/config.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/base.routes";

const app: Express = express();
const port: number = Number(process.env.PORT) || 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
  express.json(),
  cookieParser(),
  express.urlencoded({ extended: true })
);

routes(app);

app.listen(port, (err) =>
  console.log(err ? err : `Server live on port: ${port}`)
);

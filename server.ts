import type { Express } from "express";
import "dotenv/config.js";
import connectToDB from "./config/mongodb.connection";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/base.routes";

const app: Express = express();
const port: number = Number(process.env.PORT) || 8000;

// Connection to DB must be before any configuration
connectToDB();

// Middleware for server setup
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
  express.json(),
  cookieParser(),
  express.urlencoded({ extended: true })
);

// Route imports
routes(app);

// Server startup
app.listen(port, (err) =>
  console.log(err ? err : `Server live on port: ${port}`)
);

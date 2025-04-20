import type { Express } from "express";
import "dotenv/config.js";
import express from "express";
import connectToDB from "./config/mongodb.connection";
import cors from "cors";
import cookieParser from "cookie-parser";
import { default as routes } from "./routes/base.routes";
import { default as adminRoutes } from "./routes/admin.routes";

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

// Route imports, All routes are prefixed with /api
app.use("/api", routes, adminRoutes);

// Server startup
app.listen(port, (err) =>
  console.log(err ? err : `Server live on port: ${port}`)
);

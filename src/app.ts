import express from "express";
import cors from "cors";
import helmet from "helmet";
import { healthRouter } from "./routes/health.routes.js";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware.js";

export const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/health", healthRouter);
app.use(notFoundHandler);
app.use(errorHandler);

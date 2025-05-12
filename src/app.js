import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(express.json({ limit: "64kb" }));
app.use(
    express.urlencoded({
        extended: true,
        limit: "64kb",
    }),
);
app.use(morgan("dev"));
app.use(helmet());

export default app;

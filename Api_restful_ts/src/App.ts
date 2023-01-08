//ENV
require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";

//DB
import db from "../config/db";

// LOGGER
import Logger from "../config/logger";

// Morgan Middleware

import morganMiddleware from "./middleware/morganMiddleware";

// =========================== //

const app = express();

// JSON MIDDLEWARE
app.use(express.json());

// ROUTES

app.use(morganMiddleware);
app.use("/api/", router);


// LOGGER



// APP PORT
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();
    Logger.info("Funcionando na porta: " + port);
});



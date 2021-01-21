import express from "express";
import router from "body-parser";
import router from "./api/router";

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(router);

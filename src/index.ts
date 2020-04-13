import express from "express";
import config from "./config";
import dbConnect from "./db";
import setMiddlewares from "./middlewares";

const app = express();

const port = process.env.PORT || config.PORT;

dbConnect(config.MONGO_DB_URL);
setMiddlewares(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

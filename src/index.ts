import express from "express";
import config from "./config";
import dbConnect from "./db";
import setMiddlewares from "./middlewares";

const app = express();

dbConnect(config.MONGO_DB_URL);
setMiddlewares(app);

app.listen(config.PORT, () => {
  console.log(`Servidor rodando na porta ${config.PORT}`);
});

import express, { Express } from "express";
import cors from "cors";
import pokemonCtrl from "../routes";

const initLibs = (app: Express) => {
  app.use(express.json());
  app.use(cors());
};

const initRoutes = (app: Express) => {
  app.use("/pokemon", pokemonCtrl);
};

export default (app: Express) => {
  initLibs(app);
  initRoutes(app);
};

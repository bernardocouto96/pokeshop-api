import express, { Express } from "express";
import cors from "cors";
import pokemonRoutes from "../routes/pokemon";
import cartRoutes from "../routes/cart";

const initLibs = (app: Express) => {
  app.use(express.json());
  app.use(cors());
};

const initRoutes = (app: Express) => {
  app.use("/pokemon", pokemonRoutes);
  app.use("/cart", cartRoutes);
};

export default (app: Express) => {
  initLibs(app);
  initRoutes(app);
};

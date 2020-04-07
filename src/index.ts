import express from "express";
import axios from "axios";
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const app = express();
app.use(express.json());
const port = 3000;

const pokemonSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, default: "" },
  price: { type: Number, default: 0 },
  type: { type: String, default: "" }
});

const pokemonModel = model("Pokemon", pokemonSchema);

type PokemonTypes =
  | "fire"
  | "water"
  | "grass"
  | "fairy"
  | "dragon"
  | "bug"
  | "ghost"
  | "steel"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "electric"
  | "psychic"
  | "ice"
  | "dark"
  | "normal";

type Pokemon = {
  number: number;
  name: string;
  image: string;
  price: number;
  type: PokemonTypes;
};

app.post("/pokemon", async (req, res) => {
  const pokemon: Pokemon = req.body;

  try {
    const dbResponse = await pokemonModel.create(pokemon);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/pokemon", async (req, res) => {
  const { query } = req;
  const dbResponse = await pokemonModel.find(query);

  res.send(dbResponse);
});

app.get("/pokemon/:name", async (req, res) => {
  const { name } = req.params;

  const dbResponse = await pokemonModel.find({ name });

  res.send(dbResponse);
});

mongoose.connect(
  "mongodb://admin:admin123@ds139067.mlab.com:39067/pokeshop-db",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.once("connected", () => {
  console.log("Conectado com MongoDB.");
});

mongoose.connection.on("error", err => {
  console.error(`Deu erro ${err}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

import { Schema, model } from "mongoose";

const pokemonSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, default: "" },
  price: { type: Number, default: 0 },
  type: { type: String, default: "" }
});

const pokemonModel = model("Pokemon", pokemonSchema);

export default pokemonModel;

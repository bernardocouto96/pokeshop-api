import express from "express";
import {
  createPokemon,
  listAllPokemon,
  getPokemonByName,
  deletePokemonById,
  deletePokemonByName,
  editPokemonById,
  editPokemonByName
} from "../services/pokemon";

const router = express.Router();

router.post("/", createPokemon);

router.get("/", listAllPokemon);

router.get("/:name", getPokemonByName);

router.put("/:id", editPokemonById);

router.delete("/:id", deletePokemonById);

router.delete("/", deletePokemonByName);

router.put("/", editPokemonByName);

export default router;

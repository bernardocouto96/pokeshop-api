import express from "express";
import {
  createPokemon,
  listAllPokemon,
  getPokemonByName,
  deletePokemonById,
  editPokemonById
} from "../services/pokemon";

const router = express.Router();

router.post("/", createPokemon);

router.get("/", listAllPokemon);

router.get("/:name", getPokemonByName);

router.put("/:id", editPokemonById);

router.delete("/:id", deletePokemonById);

export default router;

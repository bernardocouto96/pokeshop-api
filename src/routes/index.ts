import express from "express";
import {
  createPokemon,
  listAllPokemon,
  getPokemonByName,
  deletePokemon,
  editPokemon
} from "../services/pokemon";

const router = express.Router();

router.post("/", createPokemon);

router.get("/", listAllPokemon);

router.get("/:name", getPokemonByName);

router.put("/:id", editPokemon);

router.delete("/:id", deletePokemon);

export default router;

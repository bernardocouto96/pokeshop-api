import { Pokemon } from "../types/pokemon";
import pokemonModel from "../model/pokemon";
import { Request, Response } from "express";
import config from "../config";
import axios from "axios";

export const createPokemon = async (req: Request, res: Response) => {
  const pokemon: Pokemon = req.body;
  const url = config.API_URL;

  try {
    const { data } = await axios.get(`${url}/pokemon/${pokemon.name}`);
    const { id } = data;
    const pokemonDB = { ...pokemon, number: id };

    const dbResponse = await pokemonModel.create(pokemonDB);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPokemonByName = async (req: Request, res: Response) => {
  const { name } = req.params;
  const dbResponse = await pokemonModel.findOne({ name });

  return res.send(dbResponse);
};

export const listAllPokemon = async (req: Request, res: Response) => {
  const { query } = req;

  const dbQuery = { ...query, page: undefined, limit: undefined };

  const page = parseInt(query.page, 10) || 0;
  const limit = parseInt(query.limit, 10) || 10;

  try {
    const dbResponse = await pokemonModel
      .find(dbQuery)
      .skip(page * limit)
      .limit(limit)
      .sort({ number: "ascending" });

    res.send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deletePokemonById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const dbResponse = await pokemonModel.findByIdAndRemove(id);
  res.send(dbResponse);
};

export const editPokemonById = async (req: Request, res: Response) => {
  const { body, params } = req;

  await pokemonModel.findByIdAndUpdate(params.id, body);
  const dbResponse = await pokemonModel.findById(params.id);
  res.send(dbResponse);
};

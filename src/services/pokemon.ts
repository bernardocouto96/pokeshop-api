import { Pokemon } from "../types/pokemon";
import pokemonModel from "../model/pokemon";
import { Request, Response } from "express";

export const createPokemon = async (req: Request, res: Response) => {
  const pokemon: Pokemon = req.body;
  try {
    const dbResponse = await pokemonModel.create(pokemon);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPokemonByName = async (req: Request, res: Response) => {
  const { name } = req.params;
  const dbResponse = await pokemonModel.find({ name });
  res.send(dbResponse);
};

export const listAllPokemon = async (req: Request, res: Response) => {
  const { query } = req;
  const dbResponse = await pokemonModel.find(query);
  res.send(dbResponse);
};

export const deletePokemon = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dbResponse = await pokemonModel.findByIdAndRemove(id);
  res.send(dbResponse);
};

export const editPokemon = async (req: Request, res: Response) => {
  const { body, params } = req;
  await pokemonModel.findByIdAndUpdate(params.id, body);
  const dbResponse = await pokemonModel.findById(params.id);
  res.send(dbResponse);
};

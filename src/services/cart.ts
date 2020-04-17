import cartModel from "../model/cart";
import { Request, Response } from "express";

export const createCart = async (req: Request, res: Response) => {
  try {
    const dbResponse = await cartModel.create({ lines: [] });
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getCart = async (req: Request, res: Response) => {
  const { cartId } = req.params;

  try {
    const dbResponse = await cartModel.findById(cartId);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCart = async (req: Request, res: Response) => {
  const { body, params } = req;

  try {
    await cartModel.findByIdAndUpdate(params.cartId, body);
    getCart(req, res);
  } catch (error) {
    res.status(500).send(error);
  }
};

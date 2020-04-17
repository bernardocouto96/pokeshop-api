import express from "express";
import { createCart, getCart, updateCart } from "../services/cart";

const router = express.Router();

router.post("/", createCart);

router.get("/:cartId", getCart);

router.put("/:cartId", updateCart);

export default router;

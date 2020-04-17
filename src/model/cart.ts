import { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    lines: { type: Array, default: [] }
  },
  {
    versionKey: false
  }
);

const cartModel = model("Cart", cartSchema);

export default cartModel;

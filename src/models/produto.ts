import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: [true, "nome obrigatorio"] },
    description: { type: String, required: [true, "Descrição obrigatoria"] },
  },
)

const ProductModel = mongoose.model("produtos", ProductSchema)

export default ProductModel;
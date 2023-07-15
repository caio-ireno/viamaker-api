import express from "express";
import ProductController from "../controllers/produtoController";

const product = express.Router();

product
  .get("/produto", ProductController.listarProdutos)
  .get("/produto/:id", ProductController.listarProductPorId)
  .post("/produto", ProductController.cadastrarProduct)
  .put("/produto/:id", ProductController.atualizarProduct)
  .delete("/produto/:id", ProductController.excluirProduto)
export default product;
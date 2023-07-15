import { Request, Response } from "express";
import ProductModel from "../models/produto";

class ProductController {

  static listarProdutos = async (req: Request, res: Response) => {
    try {
      const Products = await ProductModel.find()
      res.status(200).json(Products)
    } catch (err) {
      console.log(err)
    }
  }
  static listarProductPorId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const product = await ProductModel.findById(id).exec();
      if (!product) {
        console.log("produto nao encontrado")
      } else {
        res.status(200).send(product);
      }
    } catch (err) {
      console.log(err)

    }
  }

  static cadastrarProduct = async (req: Request, res: Response) => {
    try {
      const product = new ProductModel(req.body);
      const productResultado = await product.save();
      res.status(201).send(productResultado.toJSON());
    } catch (err) {
      console.log(err)

    }
  };

  static atualizarProduct = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await ProductModel.findByIdAndUpdate(id, { $set: req.body })
      if (!id) {
        console.log("produto nao encontrado")
      } else {
        res.status(200).send({ message: 'Produto atualizado com sucesso' });
      }
    } catch (err) {
      console.log(err)

    }
  }

  static excluirProduto = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const product = await ProductModel.findByIdAndDelete(id).exec();
      if (!product) {
        console.log("produto nao encontrado")
      } else {
        res.status(200).send({ message: 'Produto removido com sucesso' });
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export default ProductController
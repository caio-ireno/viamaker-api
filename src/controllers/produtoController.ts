import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/produto";
import erro404 from "../erros/erro404";

class ProductController {

  static listarProdutos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const Products = await ProductModel.find()
      res.status(200).json(Products)
    } catch (err) {
      next(err)
    }
  }
  static listarProductPorId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const product = await ProductModel.findById(id).exec();
      if (!product) {
        next(new erro404("Id do produto não localizado"))
      } else {
        res.status(200).send(product);
      }
    } catch (err) {
      next(err)

    }
  }

  static cadastrarProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = new ProductModel(req.body);
      const productResultado = await product.save();
      res.status(201).send(productResultado.toJSON());
    } catch (err) {
      next(err)
    }
  };

  static atualizarProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await ProductModel.findByIdAndUpdate(id, { $set: req.body })
      if (!id) {
        next(new erro404("produto nao encontrado"))
      } else {
        res.status(200).send({ message: 'Produto atualizado com sucesso' });
      }
    } catch (err) {
      next(err)
    }
  }

  static excluirProduto = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const product = await ProductModel.findByIdAndDelete(id).exec();
      if (!product) {
        next(new erro404("produto nao encontrado"))
      } else {
        res.status(200).send({ message: 'Produto removido com sucesso' });
      }
    } catch (err) {
      next(err)
    }
  }
}

export default ProductController
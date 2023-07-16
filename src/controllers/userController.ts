import { NextFunction, Request, Response } from "express";
import UserModel from "../models/usuario";
import erro404 from "../erros/erro404";

class UserController {

  static listarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const Products = await UserModel.find()
      res.status(200).json(Products)
    } catch (err) {
      next(err)
    }
  }
  static listarUsuarioPorId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const product = await UserModel.findById(id).exec();
      if (!product) {
        next(new erro404("usuário não encontrado"))
      } else {
        res.status(200).send(product);
      }
    } catch (err) {
      next(err)
    }
  }

  static cadastrarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = new UserModel(req.body);
      const productResultado = await product.save();
      res.status(201).send(productResultado.toJSON());
    } catch (err) {
      next(err)

    }
  };

  static atualizarUsuario = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await UserModel.findByIdAndUpdate(id, { $set: req.body })
      if (!id) {
        next(new erro404("usuário não encontrado"))
      } else {
        res.status(200).send({ message: 'usuário atualizado com sucesso' });
      }
    } catch (err) {
      next(err)

    }
  }

  static excluirUsuario = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const product = await UserModel.findByIdAndDelete(id).exec();
      if (!product) {
        next(new erro404("usuário não encontrado"))
      } else {
        res.status(200).send({ message: 'usuário removido com sucesso' });
      }
    } catch (err) {
      next(err)
    }
  }
}

export default UserController
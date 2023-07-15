import { Request, Response } from "express";
import UserModel from "../models/usuario";

class UserController {

  static listarUsuario = async (req: Request, res: Response) => {
    try {
      const Products = await UserModel.find()
      res.status(200).json(Products)
    } catch (err) {
      console.log(err)
    }
  }
  static listarUsuarioPorId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const product = await UserModel.findById(id).exec();
      if (!product) {
        console.log("usuário não encontrado")
      } else {
        res.status(200).send(product);
      }
    } catch (err) {
      console.log(err)

    }
  }

  static cadastrarUsuario = async (req: Request, res: Response) => {
    try {
      const product = new UserModel(req.body);
      const productResultado = await product.save();
      res.status(201).send(productResultado.toJSON());
    } catch (err) {
      console.log(err)

    }
  };

  static atualizarUsuario = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await UserModel.findByIdAndUpdate(id, { $set: req.body })
      if (!id) {
        console.log("usuário não encontrado")
      } else {
        res.status(200).send({ message: 'usuário não atualizado com sucesso' });
      }
    } catch (err) {
      console.log(err)

    }
  }

  static excluirUsuario = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const product = await UserModel.findByIdAndDelete(id).exec();
      if (!product) {
        console.log("usuário nãoencontrado")
      } else {
        res.status(200).send({ message: 'usuário removido com sucesso' });
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export default UserController
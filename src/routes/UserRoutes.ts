import express from "express";
import UserController from "../controllers/userController";

const user = express.Router();

user
  .get("/usuario", UserController.listarUsuario)
  .get("/usuario/:id", UserController.listarUsuarioPorId)
  .post("/usuario", UserController.cadastrarUsuario)
  .put("/usuario/:id", UserController.atualizarUsuario)
  .delete("/usuario/:id", UserController.excluirUsuario)
export default user;
import express, { Application, Request, Response } from "express";
import product from "./ProductsRoutes";
import user from "./UserRoutes";


const routes = (app: Application) => {
  app.route('/').get((req: Request, res: Response) => {
    res.status(200).send({ titulo: "Api Viamaker" })
  })

  app.use(
    express.json(),
    product,
    user

  )
}

export default routes
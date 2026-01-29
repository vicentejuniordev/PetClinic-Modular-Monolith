import Router from "koa-router";
import { registrarVetRoutes } from "./veterinarios";

const mainRouter = new Router();
registrarVetRoutes(mainRouter);

export default mainRouter

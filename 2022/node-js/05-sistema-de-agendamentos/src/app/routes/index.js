import { Router } from "express";
import UserController from "../controllers/UserController";
import SessionController from "../controllers/SessionController";

const routes = Router();

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

export default routes;

import { Router } from "express";
import UserController from "../controllers/UserController";
import SessionController from "../controllers/SessionController";
import authMiddleware from "../middlewares/auth";

const routes = Router();

routes.post("/users", UserController.store);
routes.put("/users", authMiddleware, UserController.update);
routes.post("/session", SessionController.store);

export default routes;

import { Router } from "express";
import CustomerController from "../controller/CustomerController";

const customerRouter = Router();

customerRouter.get("/", CustomerController.index);
customerRouter.post("/", CustomerController.store);
customerRouter.post("/:id", CustomerController.update);
customerRouter.get("/:id", CustomerController.destroy);

export default customerRouter;

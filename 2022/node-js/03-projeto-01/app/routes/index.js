import { Router } from "express";
import LoadCustomersService from "../services/LoadCustomersService";
import customerRouter from "./customerRouter";

const routes = Router();

routes.use("/customers", customerRouter);

routes.get("/update/:id", async (req, res) => {
  const customers = await LoadCustomersService.execute();
  const { id } = req.params;
  const customerId = customers.findIndex((customer) => customer.id == id);
  res.render("update", { customer: customers[customerId] });
});

routes.use("/", (req, res) => res.render("index"));

export default routes;

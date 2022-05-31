import LoadCustomersService from "../services/LoadCustomersService";
import CreateCustomerService from "../services/CreateCustomerService";
import UpdateCustomerService from "../services/UpdateCustomerService";
import DeleteCustomerService from "../services/DeleteCustomerService";

class CustomerController {
  async index(req, res) {
    try {
      const customers = await LoadCustomersService.execute();
      res.render("customers", { customers });
    } catch (error) {
      res.send("error loading data");
    }
  }

  async store(req, res) {
    try {
      const customers = await LoadCustomersService.execute();
      await CreateCustomerService.execute(req.body, customers);
      res.render("success", { message: "The customer was saved" });
    } catch (error) {
      res.send("an error has occurred");
    }
  }

  async update(req, res) {
    try {
      const customers = await LoadCustomersService.execute();
      await UpdateCustomerService.execute(req.params.id, req.body, customers);
      res.render("success", { message: "the user has been updated" });
    } catch (error) {
      res.send("an error has occurred");
    }
  }
  async destroy(req, res) {
    try {
      const customers = await LoadCustomersService.execute();
      await DeleteCustomerService.execute(req.params.id, customers);
      res.render("success", { message: "the user has been deleted" });
    } catch (error) {
      res.send("an error has occurred");
    }
  }
}

export default new CustomerController();

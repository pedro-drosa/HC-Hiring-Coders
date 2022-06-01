import { Request, Response } from 'express';
import FindAllCustomersService from '../services/FindAllCustomersService';
import CreateCustomerService from '../services/CreateCustomerService';
import ArrayRepository from '../../data/repositories/ArrayRepository';
import UpdateCustomerService from '../services/UpdateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';

const findAllCustomersService = new FindAllCustomersService(ArrayRepository);
const createCustomerService = new CreateCustomerService(ArrayRepository);
const updateCustomerService = new UpdateCustomerService(ArrayRepository);
const deleteCustomerService = new DeleteCustomerService(ArrayRepository);

class CustomerController {
  async index(request: Request, response: Response) {
    const customers = await findAllCustomersService.execute();
    response.json(customers);
  }

  async store(request: Request, response: Response) {
    const { name, email } = request.body;
    const customer = await createCustomerService.execute({ name, email });
    response.json(customer);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email } = request.body;
    const customer = await updateCustomerService.execute(+id, { name, email });
    response.json(customer);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const excluded = await deleteCustomerService.execute(+id);
    response.json({ message: excluded });
  }
}

export default new CustomerController();

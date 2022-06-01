import { ICustomersRepository } from '../../data/interfaces/ICustomersRepository';
import { ICustomer } from '../interfaces/ICustomer';

class UpdateCustomerService {
  private customersRepository: ICustomersRepository;

  constructor(customersRepository: ICustomersRepository) {
    this.customersRepository = customersRepository;
  }

  async execute(id: number, data: ICustomer) {
    const customer = await this.customersRepository.update(id, data);
    return customer;
  }
}

export default UpdateCustomerService;

import { ICustomersRepository } from '../../data/interfaces/ICustomersRepository';
import { ICustomer } from '../interfaces/ICustomer';

class CreateCustomerService {
  private customersRepository: ICustomersRepository;

  constructor(customersRepository: ICustomersRepository) {
    this.customersRepository = customersRepository;
  }

  async execute(data: ICustomer) {
    const customer = await this.customersRepository.create(data);
    return customer;
  }
}

export default CreateCustomerService;

import { ICustomersRepository } from '../../data/interfaces/ICustomersRepository';

class DeleteCustomerService {
  private customersRepository: ICustomersRepository;

  constructor(customerRepository: ICustomersRepository) {
    this.customersRepository = customerRepository;
  }

  async execute(id: number) {
    const customer = await this.customersRepository.delete(id);
    return customer;
  }
}

export default DeleteCustomerService;

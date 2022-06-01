import { ICustomersRepository } from '../../data/interfaces/ICustomersRepository';

class LoadCustomerService {
  private customersRepository: ICustomersRepository;

  constructor(customersRepository: ICustomersRepository) {
    this.customersRepository = customersRepository;
  }

  async execute() {
    return this.customersRepository.findAll();
  }
}

export default LoadCustomerService;

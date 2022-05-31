import CustomersRepository from "../repositories/CustomersRepository";

class LoadCustomersService {
  static execute() {
    return CustomersRepository.find();
  }
}

export default LoadCustomersService;

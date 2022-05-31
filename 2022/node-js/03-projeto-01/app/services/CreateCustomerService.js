import CustomersRepository from "../repositories/CustomersRepository";

export default class CreateCustomerService {
  static async execute(userData, customers) {
    const { customer, email } = userData;
    customers.push({ id: customers.length + 1, name: customer, email });
    CustomersRepository.create(JSON.stringify(customers));
  }
}

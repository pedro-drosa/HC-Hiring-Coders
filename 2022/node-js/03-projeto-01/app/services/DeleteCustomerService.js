import CustomersRepository from "../repositories/CustomersRepository";

export default class DeleteCustomerService {
  static async execute(id, customers) {
    const customerId = customers.findIndex((customer) => customer.id == id);
    customers.splice(customerId, 1);
    console.log(customers);
    CustomersRepository.create(JSON.stringify(customers));
  }
}

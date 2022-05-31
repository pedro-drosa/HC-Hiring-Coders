import CustomersRepository from "../repositories/CustomersRepository";

export default class UpdateCustomerService {
  static async execute(id, userData, customers) {
    const { customer, email } = userData;
    const customerId = customers.findIndex((customer) => customer.id == id);

    customers.splice(customerId, 1, {
      ...customers[customerId],
      name: customer,
      email,
    });

    CustomersRepository.create(JSON.stringify(customers));
  }
}

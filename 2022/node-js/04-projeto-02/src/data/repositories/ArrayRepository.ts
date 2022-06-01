import { ICustomer } from '../../core/interfaces/ICustomer';
import { ICustomersRepository } from '../interfaces/ICustomersRepository';

class ArrayRepository implements ICustomersRepository {
  private customers: ICustomer[];

  constructor() {
    this.customers = [];
  }

  async findAll(): Promise<ICustomer[]> {
    return this.customers;
  }

  async create(data: ICustomer): Promise<ICustomer> {
    const { name, email } = data;
    this.customers.push({ id: this.customers.length + 1, name, email });
    return this.customers[this.customers.length - 1];
  }

  async update(id: number, data: ICustomer): Promise<ICustomer> {
    const customerId = this.customers.findIndex(
      (customer) => customer.id === id
    );
    this.customers.splice(customerId, 1, {
      ...this.customers[customerId],
      name: data.name,
      email: data.email,
    });
    return this.customers[customerId];
  }

  async delete(id: number): Promise<boolean> {
    const customerId = this.customers.findIndex(
      (customer) => customer.id === id
    );
    if (customerId < 0) return !customerId;
    return !!this.customers.splice(customerId, 1);
  }
}

export default new ArrayRepository();

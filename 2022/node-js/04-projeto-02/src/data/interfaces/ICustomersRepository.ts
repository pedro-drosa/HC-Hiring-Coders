/* eslint-disable no-unused-vars */
import { ICustomer } from '../../core/interfaces/ICustomer';

export interface ICustomersRepository {
  create(data: ICustomer): Promise<ICustomer>;
  findAll(): Promise<ICustomer[]>;
  update(id: number, data: ICustomer): Promise<ICustomer>;
  delete(id: number): Promise<boolean>;
}

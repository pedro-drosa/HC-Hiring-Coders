import { read, write } from "../../utils/helpers";
import { resolve } from "path";

class CustomersRepository {
  constructor() {
    this.path = resolve(__dirname, "..", "data", "customers.json");
    this.repositories = this.find();
  }

  find() {
    return read(this.path);
  }

  create(data) {
    return write(this.path, data);
  }
}

export default new CustomersRepository();

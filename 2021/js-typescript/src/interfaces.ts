interface IEmployee {
  code: number;
  name: string;
  salary: number;
  getSalary() : number;
}

class Emplayee implements IEmployee {
  code: number;
  name: string;
  salary: number;

  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
    this.salary = 1800;
  }

  getSalary() {
    return this.salary * 0.5;
  }
}

const emplayee = new Emplayee(1, 'steve Smith');
emplayee.salary = 1100;
console.log(emplayee);
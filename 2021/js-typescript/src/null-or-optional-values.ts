//null or optional values

let day: number | null = 11;
day = null;

type ContactType = {
  name: string;
  phone: string;
  primary_phone?: boolean; //opcional
}

const contatoOne: ContactType = {
  name: 'Pedro Mascarenhas',
  phone: '123456',
}

const contactTwo: ContactType = {
  name: 'John Doe',
  phone: '654321',
  primary_phone: true,
}

function sayHello(person?: ContactType) {
  return person ? `Hello ${person.name}` : 'Hello Guest';
}

console.log(sayHello());
console.log(sayHello(contatoOne));
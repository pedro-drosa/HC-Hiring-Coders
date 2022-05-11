const txt = "Meu CPF é 123.456.789-22";

const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");

console.log(regex.test(txt.match(regex)[0]));

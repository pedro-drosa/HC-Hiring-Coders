/* Never type
  Usados em casos específicos.
  Em funções que nunca retornam nada
  Ex: loops, exeptions
*/

function infiniteLoop(): never {
  while (true) { console.count()}
}

infiniteLoop();

function ErrorHandler(message: string):never {
  throw new Error(message);
}

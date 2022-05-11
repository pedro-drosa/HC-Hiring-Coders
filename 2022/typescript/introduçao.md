## Como o javascript é executado?

O javascript pode ser executado em ambientes distintos:
em navegadores, em servidores(Node), cada ambiente tem funções e recursos distintos.

## "Problemas" em uma aplicação Javascript

- Não é compilada.
- É fracamente tipada (podem tornar a aplicação sucetiva a erros).

## O que é o typescript

O typescript é uma "camada" ou superset para o javascript.
O deno é um interpretador typescript

## Quais problemas o TS resolve

- Podemos aplicar validações estáticas de nossa tipagem e garantir que parâmetros, definiçoes e retornos seguem uma determinada regra.

```
// sum.js
// não existe um tipo implícito para os argumentos da função

function sum(a, b) {
  return a + b;
}

// O usuário poderia utilizar string ao invés de números

console.log(sum(1 + 1)) // 2
console.log(sum("1" + "1")) // 11
```

```
//sum.ts
function sum(a:number, b:number) {
  return a + b;
}

console.log(sum(1 + 1)); // 2
console.log(sum("1" + "1")); // Error
```

## "Problemas" ao utilizar typescript

- Necessidade de um processador de build/compilação.
- Uma certa burocratização do desenvolvimento.
- Mensagens de erros nem sempre muito claras.
- Falta de embasamento em JS dependendo de como é estudado.

## Devo sair typando tudo? ...Não

O typescript aplica o conceito de **inferencia** de tipos.

### O que é **inferencia ?**

**Inferir** significa "deduzir" ou "concluir". E o próprio compilador do **TS** é capa de deduzir muitos tipos, que permitem que o trabalho fique mais prático.

No exemplo anterior, não deixamos explícito o tipo de retorno da função `sum` (apenas de seus parâmetros). Mesmo assim, o retorno é deduzido (ou inferido) pelo próprio compilador.

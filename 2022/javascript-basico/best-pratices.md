# Boas Práticas

- Nomes de variáveis devem usar _camelCase_.

```
✅ const myVariableIs = "Javascript"
❌ const myvariableis = "Javascript"
```

- Todas as variáveis devem começar com uma letra.

```
✅ const myName = "Jhon Doe"
❌ const 1name = "Jhon Doe"
```

- Sempre colocar espaço entre os operadores e depois da virgula.

```
✅ console.log(1 + 1, 2 + 2);
❌ console.log(1+1,2+2);
```

- Para identação use sempre dois espaços.

```
✅ if(10 < 100) {
  console.log("hacker-man");
}

❌ if(10 < 100) {
      console.log("hacker-man");
}
```

- Sempre termine uma instrução simples com ponto e virgula.

```
✅ console.log("Best Pratices is Js");
❌ console.log("Best Pratices is Js")

```

- Sempre coloque a "abertura de chave" na mesma linha da função ou de um objeto.

  - Use um espaço entre a declaração da função e a "abertura de chave".
  - Coloque a "chave final" da função em uma nova linha isolada.

```
✅ function sum (a, b) {
  return a + b;
}

❌ function sum(a, b){ return a + b}
```

- Cada linha de código não deve ultrapassar 80 caracteres.
- Sempre utilize _arquivos externos_ para sua página HTML invocar. Javascript.
- Nomes de arquivos devem ser sempre com caracteres minúsculos.

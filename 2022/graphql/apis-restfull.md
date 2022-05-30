# Como funciona o RESTfull

- Recebe parâmetros e envia dados usando JSON como formato.

- Todas as operações são abstraidas dentro dos métodos HTTP(GET, POST PUT,DELETE e OPTIONS).

- As rotas, ou _endpoints_, são baseados nas entidades das aplicações.

```
/users/:userId
```

## Problemas

APIS Restfull são limitadas pelos protocolos que a definem. Pois não é possível lidar com as relações entre entidades sendo necessária a implementação manual delas.

- Cascata de requisições (request waterfall)
- Dados insuficientes nas APIs (under-fetching)
- Dados mais que suficientes nas APIs (over-fetching)

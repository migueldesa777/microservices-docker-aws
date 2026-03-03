# Microsserviços com Docker

Projeto feito durante curso para aprender **microsserviços independentes** com **Node.js** e **Docker**.

## Estrutura

- **auth-service** → autenticação de usuários  
- **products-service** → lista de produtos  
- **orders-service** → cria pedidos consultando products-service  
- **nginx** → API Gateway roteando as requisições

## Como rodar

1. Instale [Docker](https://www.docker.com/get-started)  
2. Clone o repositório:

```bash
git clone https://github.com/migueldesa777/microservices-docker-aws.git
cd microservices-docker-aws

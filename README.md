# 🥭 iFruta API

API RESTful desenvolvida com [NestJS](https://nestjs.com/) para o projeto no figma **iFruta**, inspirado no iFood, voltado para feiras e hortifrutis.

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [nanoid](https://github.com/ai/nanoid)
- [class-validator](https://github.com/typestack/class-validator)
- [class-transformer](https://github.com/typestack/class-transformer)
- [REST Client (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/iFruta-api.git
cd iFruta-api
```

2. Instale as dependências:

```bash
npm install
npm install nanoid@3 sqlite3 typeorm @nestjs/typeorm class-validator class-transformer
```

3. Execute a aplicação em modo de desenvolvimento:

```bash
npm run start:dev
```

A API estará disponível em: http://localhost:3000

## 🧩 Recursos Disponíveis

O sistema conta com os seguintes módulos:

  🖊️ Assinatura

  💳 Cartão

  👤 Cliente

  🎟️ Cupons

  🏠 Endereço

  🚚 Entregador

  🏪 Loja

  📦 Pedidos

  🍎 Produtos

  🧾 ProdutosPedido
  
<br>Cada recurso possui um arquivo .http com exemplos de requisições para facilitar os testes via REST Client.

## 🛠️ Scripts úteis

```bash
npm run start:dev – Inicia o servidor com hot reload
```
```bash
npm run build – Compila o projeto
```
```bash
npm run start – Inicia o projeto compilado
```
```bash
npm run lint – Analisa o código com ESLint
```
## 📌 Notas

- O banco de dados utilizado é o SQLite, ideal para desenvolvimento e testes locais.

- Os identificadores dos registros são gerados com o pacote nanoid.

- Os módulos foram criados usando o comando nest g resource <nome> --type rest.

## 📫 Contato

Em caso de dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato.

# API Adopets

## Introdução

API implementada usando:

- body-parser;
- cookie-parser;
- dotenv-safe;
- express;
- http;
- jsonwebtoken;
- JWT;
- ts-node;
- typescript;

Serviços externos:

- [Git](https://git-scm.com/downloads)
- [MySQL](https://www.mysql.com/downloads/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Primeiros passos

Baixe o projeto:

    git clone https://github.com/mbressan06/adopets-backend.git

Após clonar o projeto, é necessário instalar todas as dependências.

- Use o comando `npm i` para instalar.

        cd backend

        npm i

Em seguida é necessário criar um banco de dados MariaDB/MySQL.

- Use o comando `source` do myqsl para rodar o `./create_db.sql` .

        $ mysql -u [user] -p --default-character-set=utf8
        Enter password: [password]
        [mysql]> source ./db/create_db.sql

- Para semear alguns dados de demonstração no banco de dados, use `.\seed_db.sql` .

        [mysql]> source ./db/seed_db.sql

Para rodar a aplicação em desenvolvimento:

    npm run dev

## Swagger

Acesse <http://localhost:5000/ui> que a página do Swagger será exibida.

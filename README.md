# API Soller Digital

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

 <!-- TODO: Docker creation steps for MySql and Mongo DB -->
 - [MariaDB](https://hub.docker.com/_/mariadb) ou [MySQL](https://hub.docker.com/_/mysql)

`docker run --name mysql -e MYSQL_ROOT_PASSWORD=xxx#123 -d mysql`

## Primeiros passos

Após baixar o projeto, é necessário instalar todas as bibliotecas pendentes: 

<!-- TODO: All steps for running development application -->
- Use o comando `npm i` para instalar.

Após a instalação, é necessário criar um banco de dados. 
- Use o comando `.\database_reload.ps1` (Windows) ou `.\database_reload.sh` (Mac ou Linux).

Para rodar a aplicação em desenvolvimento, use: `npm run dev`.

Para criar um usuário, edite o arquivo `/commands/database.sql`, colocando um usuário, ou ainda usando o que esteja lá.

Para semear alguns dados de demonstração no banco de dados, use `.\sample_database.ps1` (Windows) ou `.\sample_database.sh` (Mac ou Linux).

## Swagger

Acesse http://localhost:5000/ui que a página do Swagger será exibida.

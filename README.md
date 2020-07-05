# Node/Express Backend API Boilerplate

## Features

- TypeScript language
- Airbnb's JavaScript (ES6) style guide.
- TSlint for TypeScript
- MySQL for structure data (Users, Products)
- Logs structure with MongoDB
- Token generating with RSA PEM Private Key

## Components

- [MySQL](https://www.mysql.com/downloads/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs) for hash solution.
- [Body-Parser](https://www.npmjs.com/package/body-parser) for parse incoming request bodies, as middleware before the handlers.
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser) for parse Cookie header and populate requisitions used by other middleware.
- [Cors](https://www.npmjs.com/package/cors) as middleware to enable CORS.
- [Dotenv-Safe](https://www.npmjs.com/package/dotenv-safe) for environment variables defined in .env file.
- [Express](http://expressjs.com/) as web framework for API.
- [JWT](https://jwt.io/) for securely transmitting information.
- [Mongoose](https://mongoosejs.com/) as schema-based solution to model NoSQL data.
- [Mongoose-Morgan](https://www.npmjs.com/package/mongoose-morgan) in use to log data into MongoDB.
- [Supertest](https://www.npmjs.com/package/supertest) as as test framework.
- [TS-Node](https://www.npmjs.com/package/ts-node) to ensure everything is ok, and then transpiles the code.
- [TSlint](https://palantir.github.io/tslint/) for TypeScript linting using Airbnb's JS style guide.
- [TypeScript](https://www.typescriptlang.org/) as main language.

## Getting Start

Download the project:

    git clone https://github.com/mbressan06/adopets-backend.git

Then install the dependencies.

- Use the command `npm i`.

        cd backend

        npm i

After that create the MariaDB/MySQL database.

- Mysql `source` command with the `./db/create_mysql_db.sql` file.

        $ mysql -u [user] -p --default-character-set=utf8
        Enter password: [password]
        [mysql]> source ./db/create_mysql_db.sql

- For some demo seeding, use `./db/seed_mysql_db.sql` file.

        [mysql]> source ./db/seed_mysql_db.sql

It's also necessary to create a MongoDB/NoSQL database for user and errors log.

- Mongo command with the`./db/create_mongo_collection.js` file.

        mongo adopets ./db/create_mongo_collection.js

For running development mode:

    npm run dev

Then open [http://localhost:3000/](http://localhost:3000/) on your web browser.

<!-- TODO: Steps -->

### Testing

1. Run `npm test` for test.

## Deploying

For deployment, run `npm run build` and upload `build/` to your server.

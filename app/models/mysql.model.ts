import mysql from 'mysql';
import mysqlConfig from '../config/mysql.config';

const mysqlConnection = mysql.createPool({
  host: mysqlConfig.HOST,
  user: mysqlConfig.USER,
  password: mysqlConfig.PASSWORD,
  database: mysqlConfig.DB
});

// open the MySQL connection
mysqlConnection.getConnection(() =>{
  console.log('Successfully connected to the MySQL database.');
})

export default mysqlConnection;

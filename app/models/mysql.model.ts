import mysql from 'mysql';
import mysqlConfig from '../config/mysql.config';

const mysqlConnection = mysql.createConnection({
  host: mysqlConfig.HOST,
  user: mysqlConfig.USER,
  password: mysqlConfig.PASSWORD,
  database: mysqlConfig.DB
});

// open the MySQL connection
mysqlConnection.connect((error: Error) => {
  if (error) throw error;
  // TODO: Remove after development
  console.log('Successfully connected to the MySQL database.');
});

export default mysqlConnection;

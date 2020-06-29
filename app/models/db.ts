import mysql from 'mysql';
import dbConfig from '../config/db.config';

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect((error: Error) => {
  if (error) throw error;
  // TODO: Remove after development
  // console.log('Successfully connected to the MySQL database.');
});

export default connection;

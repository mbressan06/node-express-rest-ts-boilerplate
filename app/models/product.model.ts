import sql from './db';

// constructor
const Product = function(product) {
  this.name = product.name;	
  this.description = product.description;	
  this.category = product.category;	
  this.price = product.price;	
  this.stock = product.stock;
};

Product.create = (newProduct, result) => {
  sql.query('INSERT INTO products SET ?', newProduct, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('created customer: ', { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

Product.findById = (productId, result) => {
  sql.query(`SELECT * FROM products WHERE id = ${productId}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('found product: ', res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: 'not_found' }, null);
  });
};

Product.getAll = result => {
  sql.query('SELECT * FROM products', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('products: ', res);
    result(null, res);
  });
};

Product.updateById = (id, customer, result) => {
  sql.query(
    'UPDATE products SET email = ?, name = ?, active = ? WHERE id = ?',
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('updated customer: ', { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Product.remove = (id, result) => {
  sql.query('DELETE FROM products WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('deleted product with id: ', id);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query('DELETE FROM products', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} products`);
    result(null, res);
  });
};

module.exports = Product;
import ProductCategory from './ProductCategory';

interface Product {
  id: Number;
  name: String;	
  description: String;	
  category: ProductCategory;	
  price: String;	
  stock: Number;
}

export default Product;

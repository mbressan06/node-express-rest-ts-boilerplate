USE `heroku_de48e6bb7c3cf93`;

INSERT INTO `users` (`email`, `name`, `active`) VALUES ('teste@adopets.com', 'João Silva', '1');
INSERT INTO `users` (`email`, `name`, `active`) VALUES ('teste2@adopets.com', 'Maria Souza', '1');

INSERT INTO `product_category` (`name`) VALUES ('Teste');

INSERT INTO `products` (`name`, `description`, `category`, `price`, `stock`) VALUES ('Product 1', 'Product 1 description', 1, 25.00, 1);


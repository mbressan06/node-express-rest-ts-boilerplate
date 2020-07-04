DROP DATABASE IF EXISTS `heroku_de48e6bb7c3cf93`;

CREATE DATABASE `heroku_de48e6bb7c3cf93`;
ALTER DATABASE `heroku_de48e6bb7c3cf93` CHARSET = UTF8 COLLATE = utf8_general_ci;

USE `heroku_de48e6bb7c3cf93`;

CREATE TABLE IF NOT EXISTS `users` (
  `id`          int(11)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `email`       varchar(255)  NOT NULL DEFAULT '',
  `name`        varchar(50)   NOT NULL DEFAULT '',
  `active`      boolean       NOT NULL DEFAULT false,
  `hash`        blob          NOT NULL DEFAULT '',
  `token`       blob          NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `products` (
  `id`          int(11)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name`        varchar(30)   NOT NULL,
  `description` varchar(255)  NOT NULL,
  `category`    int(11)  NOT NULL,
  `price`       decimal(10,2) NOT NULL, 
  `stock`       int(11)       NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `product_category` (
  `id`          int(11)       NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name`        varchar(30)   NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `products` ADD CONSTRAINT `category_fk` FOREIGN KEY (`category`) REFERENCES `product_category`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

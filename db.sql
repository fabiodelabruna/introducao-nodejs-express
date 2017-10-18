CREATE DATABASE `curso_node_express` DEFAULT CHARACTER SET utf8;

CREATE TABLE `curso_node_express`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`));

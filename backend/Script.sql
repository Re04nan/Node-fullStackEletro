CREATE DATABASE IF NOT EXISTS `fullstackeletro` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `fullstackeletro`;

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `quantidade` int NOT NULL,
  `valor_total` float DEFAULT NULL,
  `nome_cliente` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `telefone` int NOT NULL,
  `endereco` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_produto` int NOT NULL,
  `data_pedido` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pedido`),
  KEY `fk_produto_idx` (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

INSERT INTO `pedidos` VALUES
(53, 1, 10, 'Gui', 1111, 'Rua a', 3, '2020-12-04 20:33:22'),
(54, 2, 10, 'Gui', 1111111, 'Rua', 1, '2020-12-04 20:40:28'),
(55, 2, 10, 'A', 1111111, 'Rua', 1, '2020-12-04 20:46:37'),
(56, 2, 10, 'A', 1111111, 'Rua', 1, '2020-12-04 21:22:30'),
(57, 2, 10, 'A', 1111111, 'Rua', 1, '2020-12-04 21:22:36'),
(58, 2, 10, 'A', 1111111, 'Rua', 1, '2020-12-04 21:24:00'),
(59, 1, 5, 'Gui', 333333, 'Rua', 5, '2020-12-04 21:24:43'),
(60, 1, 10, 'Renan', 22222222, 'Rua 25', 11, '2020-12-04 21:27:17'),
(61, 3, 10, 'Renan', 78787878, 'Rua 908', 2, '2020-12-04 22:35:18');


DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `categoria` varchar(40) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `estoque` int NOT NULL,
  `preco` float NOT NULL,
  `preco_venda` float NOT NULL,
  `nome_imagem` varchar(50) NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

INSERT INTO `produtos` VALUES
(1, 'Fogão Stone Prata', 'fogao', NULL, 19, 2389, 1389, '/fogao_stone_prata.jpg'),
(2, 'Fogão Tecnogas Max', 'fogao', NULL, 12, 3259, 2489, '/fogao_tecnogas_max.jpg'),
(3, 'Lava-louças Bosch', 'lavaLoucas', NULL, 10, 3259, 2489, '/lavadora_de_louca_bosch.jpg'),
(4, 'Lava-louças Consul', 'lavaLoucas', '12 comandos', 12, 3859, 3089, '/lavadora_de_louca_consul.jpg'),
(5, 'Lavadora de Roupas EcoBubble', 'lavadora', 'Inox - 12 litros', 10, 3389, 2389, '/lavadora_EcoBubble_Inox.jpg'),
(6, 'Lavadora Colombia Moderna', 'lavadora', '20 litros', 9, 4259, 3289, '/lavadora_colombia_moderna.jpg'),
(7, 'Microondas Samsung', 'microondas', 'black 20 litros', 18, 2389, 1889, '/microondas_samsung_black20L.jpg'),
(8, 'Microondas Brastemp', 'microondas', 'Inox 38 litros', 10, 4389, 3389, '/microondas_brastemp_inox38L.jpg'),
(9, 'Microondas Consul', 'microondas', 'Inox 30 litros', 16, 3000, 2289, '/microondas_consul_inox30L.jpg'),
(10, 'Geladeira Frost Free Brastemp Side Inverse', 'geladeira', '540 litros', 15, 6389, 5019, '/geladeira_brastemp.jpg'),
(11, 'Geladeira Digital Max Inteligente', 'geladeira', NULL, 2, 9259, 7289, '/geladeira_digitalmax.jpg'),
(12, 'Geladeira Moderna Black', 'geladeira', NULL, 7, 2859, 2089, '/geladeira_mod_black.jpg');

ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_produto` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;



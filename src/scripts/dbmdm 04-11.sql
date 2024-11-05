-- Create identity document types table
CREATE TABLE type_identity_documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    abbreviation VARCHAR(5) NOT NULL,
    description VARCHAR(100) NOT NULL
);

-- Insert document types data
INSERT INTO type_identity_documents (id, abbreviation, description) VALUES
(1, 'DNI', 'DOCUMENTO NACIONAL DE IDENTIDAD'),
(2, 'CE', 'CARNET DE EXTRANJERIA');

-- Create persons table
CREATE TABLE persons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type_identity_documents_id INT NOT NULL,
    document_number VARCHAR(15) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    father_lastname VARCHAR(100) NOT NULL,
    mother_lastname VARCHAR(100) NOT NULL,
    address VARCHAR(200),
    FOREIGN KEY (type_identity_documents_id) REFERENCES type_identity_documents(id)
);

-- Insert sample person data
INSERT INTO persons (id, type_identity_documents_id, document_number, first_name, father_lastname, mother_lastname, address) VALUES
(1, 1, '72170992', 'LUIS ALFREDO', 'VALENZUELA', 'DAVILA', 'URB. MUNICIPAL MZ. F5 LT5');

ALTER TABLE persons
ADD COLUMN is_active BOOLEAN DEFAULT TRUE;

// Actualización de la base de datos (SQL)
ALTER TABLE persons
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;


-- Create companies table
CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(200) NOT NULL,
    business_type VARCHAR(50) NOT NULL,
    manager_name VARCHAR(100) NOT NULL,
    ruc VARCHAR(11) NOT NULL,
    address VARCHAR(200) NOT NULL,
    expiration_date DATE NOT NULL,
    manager_position VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Insert sample data
INSERT INTO companies (
    business_name, 
    business_type,
    manager_name, 
    ruc, 
    address, 
    expiration_date,
    manager_position
) VALUES 
(
    'EMPRESA DE TRANSPORTES & SERVICIOS MULTIPLES CIELO AZUL EIRL',
    'EIRL',
    'Asthrid Magaly Pinchi Vasquez',
    '20393796783',
    'Jr. Atahualpa N. 793',
    '1998-12-05',
    'manager'
),
(
    'EMPRESA DE TRANSPORTES DIGGINS TOURS EIRL',
    'EIRL',
    'Diggins Davila Tapanta',
    '20393878241',
    'Jr. Aguayba N. 601-A',
    '2023-04-01',
    'manager'
);


---------------------

CREATE TABLE `vehicles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `plate` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `category_vehicle_id` int NULL DEFAULT NULL,
  `brand` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `model` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `color` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `engine` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vin` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `serial_number` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `manufacture_year` int NULL DEFAULT NULL,
  `model_year` int NULL DEFAULT NULL,
  `body_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `owner` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `card_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `type_vehicle_id` int NULL DEFAULT NULL,
  `type_service_vehicle_id` int NULL DEFAULT NULL,
  `is_active` tinyint(1) NULL DEFAULT 1,
  `created_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `updated_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category_vehicle_id`(`category_vehicle_id`) USING BTREE,
  INDEX `type_vehicle_id`(`type_vehicle_id`) USING BTREE,
  INDEX `type_service_vehicle_id`(`type_service_vehicle_id`) USING BTREE,
  CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`category_vehicle_id`) REFERENCES `category_vehicles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `vehicles_ibfk_2` FOREIGN KEY (`type_vehicle_id`) REFERENCES `type_vehicles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `vehicles_ibfk_3` FOREIGN KEY (`type_service_vehicle_id`) REFERENCES `type_service_vehicles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of vehicles
-- ----------------------------
INSERT INTO `vehicles` VALUES (1, '7790BU', 3, 'HONDA', 'CB125 TWISTER', 'BLANCO', 'JA25E4566810', 'LALJA2599L3281449', 'LALJA2599L3281449', 2020, 2020, 'MOTOCICLETA', 'LUIS ALFREDO VALENZUELA DAVILA', '0005882994', 1, 2, 1, '2024-10-20 09:46:31', '2024-10-20 09:46:31');
INSERT INTO `vehicles` VALUES (2, 'W3U782', 5, 'SUSUKI', 'GN', 'NEGRO', 'W3U782', '683746DJRHS', '683746DJRHS', 2020, 2020, 'MOTOCICLETA', 'ADBEL', '000235650', 1, 1, 1, '2024-10-20 09:46:31', '2024-10-20 09:46:31');
INSERT INTO `vehicles` VALUES (3, '7790-FO', NULL, 'HONDA', 'CB125 TWISTER', 'BLANCO', 'JA25E4566810', 'LALJA2599L3281449', 'LALJA2599L3281449', 2020, 2020, 'MOTOCICLETA', 'LUIS ALFREDO VALENZUELA DAVILA', '0005882994', NULL, NULL, 1, '2024-10-20 15:42:24', '2024-10-20 15:42:24');
INSERT INTO `vehicles` VALUES (4, '7790-FO', NULL, 'HONDA', 'CB125 TWISTER', 'BLANCO', 'JA25E4566810', 'LALJA2599L3281449', 'LALJA2599L3281449', 2020, 2020, 'MOTOCICLETA', 'LUIS ALFREDO VALENZUELA DAVILA', '0005882994', NULL, NULL, 1, '2024-10-20 15:46:02', '2024-10-20 15:46:02');
INSERT INTO `vehicles` VALUES (5, '7790FO', NULL, 'HONDA', 'CB125 TWISTER', 'BLANCO', 'JA25E4566810', 'LALJA2599L3281449', 'LALJA2599L3281449', 2020, 2020, 'MOTOCICLETA', 'LUIS ALFREDO VALENZUELA DAVILA', '0005882994', NULL, NULL, 1, '2024-10-20 15:49:59', '2024-10-20 15:49:59');
INSERT INTO `vehicles` VALUES (6, '1234JU', 3, 'HONDA', 'CB125 TWISTER', 'BLANCO', 'JA25E4566810', 'LALJA2599L3281449', 'LALJA2599L3281449', 2020, 2020, 'MOTOCICLETA', 'LUIS ALFREDO VALENZUELA DAVILA', '0005882994', 1, 2, 1, '2024-10-20 22:02:50', '2024-10-20 22:02:50');

----------------------
CREATE TABLE `category_vehicles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category_vehicles
-- ----------------------------
INSERT INTO `category_vehicles` VALUES (1, 'L1', 'Vehículos de dos ruedas, de hasta 50 cm3 y velocidad máxima de 50 km/h.');
INSERT INTO `category_vehicles` VALUES (2, 'L2', 'Vehículos de tres ruedas, de hasta 50 cm3 y velocidad máxima de 50 km/h');
INSERT INTO `category_vehicles` VALUES (3, 'L3', 'Vehículos de dos ruedas, de mas de 50 cm3 o velocidad mayor a 50 km/h.');
INSERT INTO `category_vehicles` VALUES (4, 'L4', 'Vehículos de tres ruedas asimétricas al eje longitudinal del vehículo, de mas de 50 cm3 o una velocidad mayor de 50 km/h.');
INSERT INTO `category_vehicles` VALUES (5, 'L5', 'Vehículos de tres ruedas simétricas al eje longitudinal del vehículo, de mas de 50 cm3 o velocidad mayor a 50 km/h y cuyo peso bruto vehicular no exceda de una tonelada.');


--------------------------
CREATE TABLE `type_vehicles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type_vehicles
-- ----------------------------
INSERT INTO `type_vehicles` VALUES (1, 'Menor');
INSERT INTO `type_vehicles` VALUES (2, 'Mayor');
-------------------


CREATE TABLE `type_service_vehicles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type_service_vehicles
-- ----------------------------
INSERT INTO `type_service_vehicles` VALUES (1, 'Pasajero');
INSERT INTO `type_service_vehicles` VALUES (2, 'Carga');

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for profiles
-- ----------------------------
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_active` tinyint(1) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of profiles
-- ----------------------------
INSERT INTO `profiles` VALUES (1, 'Administrador', 1);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `paternal_surname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `maternal_surname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `profile_id` int NOT NULL,
  `is_active` tinyint(1) NULL DEFAULT 1,
  `last_login` datetime(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `updated_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE,
  INDEX `profile_id`(`profile_id`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('11261b4e-9813-40da-bbb1-a4a0873ea1b3', 'Juan', 'Pérez', 'García', 'juanperez123', 'juan.perez@example.com', '$2b$10$gRXmiVP/ygzmZ4J.A/Lv2emU9fWPmd5DDBFCGJQ5nkXJdQzfyD5wu', 1, 1, NULL, '2024-10-14 14:36:11', '2024-10-14 14:36:11');
INSERT INTO `users` VALUES ('149bdaed-c17d-4cec-bf2e-2e52151e8314', 'Luis', 'Valenzuela', 'Davila', 'lvalenzuela', 'lvalenzuela@gmail.com', '$2b$10$pKGnrDI5LSwrrx17wUouMuOvpGH3Q/NWHFx8i9WMJaF5QLWeoSy1K', 1, 1, NULL, '2024-10-14 14:37:23', '2024-10-14 14:37:23');
INSERT INTO `users` VALUES ('4e9aa91d-37c0-4e2c-9ac9-b855340bf516', 'Jesus', 'Falen', 'Falcon', 'jfalen', 'jfalen@gmail.com', '$2b$10$dzzxVT6HkeJ0dIPSLiWD0.EoRethfbchh7rpQHNyVY9fCoNJtku2e', 1, 1, '2024-10-14 15:24:32', '2024-10-14 14:37:03', '2024-10-14 15:24:32');

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE modules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    path VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar los datos
INSERT INTO modules (name, path) VALUES
('Usuarios', 'usuario/'),
('Transito', 'transito/');

CREATE TABLE sub_modules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    module_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    path VARCHAR(255) NOT NULL,
    FOREIGN KEY (module_id) REFERENCES modules(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar los datos
INSERT INTO sub_modules (module_id, name, path) VALUES
(1, 'Usuario', '/usuario'),
(1, 'Perfil', '/perfil'),
(2, 'Tarjetas de Circulacion', '/tarjetacirculacion'),
(2, 'Actas de Control', '/actascontrol');

-- Crear la tabla profiles_sub_modules
CREATE TABLE profiles_sub_modules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT NOT NULL,
    sub_module_id INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    `create` BOOLEAN DEFAULT FALSE,
    edit BOOLEAN DEFAULT FALSE,
    `delete` BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES profiles(id),
    FOREIGN KEY (sub_module_id) REFERENCES sub_modules(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar los datos
INSERT INTO profiles_sub_modules (profile_id, sub_module_id, is_active, `create`, edit, `delete`) VALUES
(1, 1, true, true, true, true),
(1, 2, true, true, true, true);
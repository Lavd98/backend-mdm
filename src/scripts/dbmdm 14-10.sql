/*
 Navicat Premium Data Transfer

 Source Server         : Valenzuela
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : dbmdm

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 14/10/2024 14:50:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for profiles
-- ----------------------------
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isActive` tinyint(1) NULL DEFAULT 1,
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
CREATE TABLE `users`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `paternalSurname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `maternalSurname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `profileId` int NOT NULL,
  `isActive` tinyint(1) NULL DEFAULT 1,
  `lastLogin` datetime(0) NULL DEFAULT NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE,
  INDEX `profileId`(`profileId`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`profileId`) REFERENCES `profiles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('11261b4e-9813-40da-bbb1-a4a0873ea1b3', 'Juan', 'Pérez', 'García', 'juanperez123', 'juan.perez@example.com', '$2b$10$gRXmiVP/ygzmZ4J.A/Lv2emU9fWPmd5DDBFCGJQ5nkXJdQzfyD5wu', 1, 1, NULL, '2024-10-14 14:36:11', '2024-10-14 14:36:11');
INSERT INTO `users` VALUES ('149bdaed-c17d-4cec-bf2e-2e52151e8314', 'Luis', 'Valenzuela', 'Davila', 'lvalenzuela', 'lvalenzuela@gmail.com', '$2b$10$pKGnrDI5LSwrrx17wUouMuOvpGH3Q/NWHFx8i9WMJaF5QLWeoSy1K', 1, 1, NULL, '2024-10-14 14:37:23', '2024-10-14 14:37:23');
INSERT INTO `users` VALUES ('4e9aa91d-37c0-4e2c-9ac9-b855340bf516', 'Jesus', 'Falen', 'Falcon', 'jfalen', 'jfalen@gmail.com', '$2b$10$dzzxVT6HkeJ0dIPSLiWD0.EoRethfbchh7rpQHNyVY9fCoNJtku2e', 1, 1, '2024-10-14 14:48:25', '2024-10-14 14:37:03', '2024-10-14 14:48:25');

SET FOREIGN_KEY_CHECKS = 1;

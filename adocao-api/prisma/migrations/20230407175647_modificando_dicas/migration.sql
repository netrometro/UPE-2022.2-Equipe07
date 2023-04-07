/*
  Warnings:

  - You are about to drop the `comentariodica` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoria` to the `dicas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criacao` to the `dicas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comentariodica` DROP FOREIGN KEY `ComentarioDica_dicaId_fkey`;

-- DropForeignKey
ALTER TABLE `comentariodica` DROP FOREIGN KEY `ComentarioDica_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `dicas` ADD COLUMN `categoria` ENUM('CUIDADO', 'NUTRICAO', 'TREIMANETO', 'EXERCICIO') NOT NULL,
    ADD COLUMN `criacao` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `comentariodica`;

-- CreateTable
CREATE TABLE `ComtentariosDica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `texto` VARCHAR(191) NOT NULL,
    `dicaId` INTEGER NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ComtentariosDica` ADD CONSTRAINT `ComtentariosDica_dicaId_fkey` FOREIGN KEY (`dicaId`) REFERENCES `dicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComtentariosDica` ADD CONSTRAINT `ComtentariosDica_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

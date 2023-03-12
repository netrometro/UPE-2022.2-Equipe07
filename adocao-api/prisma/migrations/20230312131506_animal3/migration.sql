/*
  Warnings:

  - You are about to drop the column `nomeDeUsuario` on the `usuarios` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `usuarios_nomeDeUsuario_key` ON `usuarios`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `nomeDeUsuario`;

-- CreateTable
CREATE TABLE `animais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_dono` INTEGER NULL,
    `nome` VARCHAR(191) NOT NULL,
    `raca` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `idade` VARCHAR(191) NULL,
    `personalidade` VARCHAR(191) NULL,
    `necessidadesMedicas` VARCHAR(191) NULL,
    `necessidadesComportamentais` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - You are about to drop the `fotos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `fotos` DROP FOREIGN KEY `fotos_animalId_fkey`;

-- AlterTable
ALTER TABLE `animais` MODIFY `idade` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `fotos`;

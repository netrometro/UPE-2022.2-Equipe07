/*
  Warnings:

  - Added the required column `pagina` to the `parceiros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `parceiros` ADD COLUMN `pagina` VARCHAR(191) NOT NULL;

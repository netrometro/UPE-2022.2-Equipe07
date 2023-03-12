/*
  Warnings:

  - A unique constraint covering the columns `[nomeDeUsuario]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nomeDeUsuario` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `nomeDeUsuario` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_nomeDeUsuario_key` ON `usuarios`(`nomeDeUsuario`);

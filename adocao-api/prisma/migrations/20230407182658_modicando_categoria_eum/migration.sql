/*
  Warnings:

  - The values [TREIMANETO] on the enum `dicas_categoria` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `dicas` MODIFY `categoria` ENUM('CUIDADO', 'NUTRICAO', 'TREINAMENTO', 'EXERCICIO') NOT NULL;

-- AlterTable
ALTER TABLE `posts` MODIFY `createAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `uptadeAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `parceiros` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageURL` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `contato` VARCHAR(191) NOT NULL,
    `posicaoX` DOUBLE NOT NULL,
    `posicaoY` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

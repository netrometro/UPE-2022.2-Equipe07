-- CreateTable
CREATE TABLE `fotos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NULL,
    `animalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_dono` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `raca` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `idade` INTEGER NULL,
    `personalidade` VARCHAR(191) NULL,
    `necessidadesMedicas` VARCHAR(191) NULL,
    `necessidadesComportamentais` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fotos` ADD CONSTRAINT `fotos_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `animais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

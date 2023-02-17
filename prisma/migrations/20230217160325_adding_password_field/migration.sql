/*
  Warnings:

  - Added the required column `imageURL` to the `Benefits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Benefits" ADD COLUMN     "imageURL" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "password" VARCHAR(60) NOT NULL DEFAULT '';

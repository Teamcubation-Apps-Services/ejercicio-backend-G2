/*
  Warnings:

  - The primary key for the `ClientBalance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[clientId,coinId]` on the table `ClientBalance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ClientBalance" DROP CONSTRAINT "ClientBalance_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ClientBalance_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ClientBalance_clientId_coinId_key" ON "ClientBalance"("clientId", "coinId");

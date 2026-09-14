/*
  Warnings:

  - You are about to drop the column `hightlights` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "hightlights",
ADD COLUMN     "highlights" TEXT;

/*
  Warnings:

  - Added the required column `title` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart" ADD COLUMN     "title" TEXT NOT NULL;

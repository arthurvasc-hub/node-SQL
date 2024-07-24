/*
  Warnings:

  - You are about to drop the column `sub_title` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "sub_title",
ADD COLUMN     "subtitle" TEXT;

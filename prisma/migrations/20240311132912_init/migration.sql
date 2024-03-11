/*
  Warnings:

  - You are about to drop the column `profileViews` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profileViews";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileViews" INTEGER NOT NULL DEFAULT 0;

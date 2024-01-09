/*
  Warnings:

  - Added the required column `userId` to the `Font` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Font" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" INTEGER,
    "chars" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Font_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Font" ("chars", "id", "name", "size") SELECT "chars", "id", "name", "size" FROM "Font";
DROP TABLE "Font";
ALTER TABLE "new_Font" RENAME TO "Font";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

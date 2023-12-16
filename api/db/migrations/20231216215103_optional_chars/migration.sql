-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Font" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" INTEGER,
    "chars" TEXT
);
INSERT INTO "new_Font" ("chars", "id", "name", "size") SELECT "chars", "id", "name", "size" FROM "Font";
DROP TABLE "Font";
ALTER TABLE "new_Font" RENAME TO "Font";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

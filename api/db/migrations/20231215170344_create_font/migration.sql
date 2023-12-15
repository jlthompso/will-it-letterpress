-- CreateTable
CREATE TABLE "Font" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" INTEGER,
    "chars" TEXT NOT NULL DEFAULT '{}'
);

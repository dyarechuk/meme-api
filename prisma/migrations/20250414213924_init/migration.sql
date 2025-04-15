-- CreateTable
CREATE TABLE "Meme" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "image" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Meme_pkey" PRIMARY KEY ("id")
);

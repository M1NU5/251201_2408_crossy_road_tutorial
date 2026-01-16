-- CreateTable
CREATE TABLE "LeaderboardEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "mode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeaderboardEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LeaderboardEntry_mode_score_createdAt_idx" ON "LeaderboardEntry"("mode", "score", "createdAt");

-- CreateIndex
CREATE INDEX "LeaderboardEntry_userId_mode_score_idx" ON "LeaderboardEntry"("userId", "mode", "score");

-- CreateIndex
CREATE UNIQUE INDEX "LeaderboardEntry_userId_mode_key" ON "LeaderboardEntry"("userId", "mode");

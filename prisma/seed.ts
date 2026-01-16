import { prisma } from './client'

const seedEntries = [
	{ userId: 'user_1', username: 'Alice', score: 1200, mode: 'arcade' },
	{ userId: 'user_2', username: 'Bob', score: 980, mode: 'arcade' },
	{ userId: 'user_3', username: 'Charlie', score: 1500, mode: 'arcade' },
	{ userId: 'user_1', username: 'Alice', score: 600, mode: 'story' },
	{ userId: 'user_4', username: 'Daisy', score: 2000, mode: 'arcade' }
] as const

async function main() {
	console.log('🌱 Seeding leaderboard (idempotent)...')

	for (const e of seedEntries) {
		await prisma.leaderboardEntry.upsert({
			where: { userId_mode: { userId: e.userId, mode: e.mode } },
			create: e,
			update: {
				username: e.username
				// keep whichever you prefer:
				// score: e.score,                      // overwrite
				// score: { max: e.score } (not valid)  // so do it manually:
			}
		})

		// If you want "keep best score", do a 2-step:
		const current = await prisma.leaderboardEntry.findUnique({
			where: { userId_mode: { userId: e.userId, mode: e.mode } },
			select: { id: true, score: true }
		})

		if (current && e.score > current.score) {
			await prisma.leaderboardEntry.update({
				where: { id: current.id },
				data: { score: e.score }
			})
		}
	}

	console.log('✅ Done')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => prisma.$disconnect())

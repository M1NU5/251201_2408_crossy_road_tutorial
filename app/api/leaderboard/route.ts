import { createRFC7807ErrorMessage } from '@/lib/rfc7807ErrorMessage'
import { prisma } from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

const modeSchema = z.string().min(1).max(32)

export async function GET(req: NextRequest) {
	try {
		const url = new URL(req.url)

		// Query params
		const mode = url.searchParams.get('mode') ?? undefined // Optional
		const limitRaw = url.searchParams.get('limit') ?? '10'

		const limit = Math.min(Math.max(parseInt(limitRaw, 10) || 10, 1), 100) // Protect against malicious values e.g. less than 1, greater than 100 or not numbers

		if (mode) modeSchema.parse(mode)

		const entries = await prisma.leaderboardEntry.findMany({
			where: {
				...(mode ? { mode } : {})
			},
			orderBy: [{ score: 'desc' }, { createdAt: 'asc' }],
			take: limit,
			select: {
				id: true,
				username: true,
				mode: true,
				score: true,
				createdAt: true
			}
		})

		return NextResponse.json(
			{ entries, meta: { mode, limit } },
			{ status: 200, headers: { 'Cache-Control': 'no-store' } }
		)
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Unknown error'
		return createRFC7807ErrorMessage('Bad Request', 400, message)
	}
}

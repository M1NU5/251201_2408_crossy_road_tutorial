import { cookies } from 'next/headers'

export interface ILeaderBoardSearchParams {
	id?: string
	username?: string
}

const getBaseURL = () => {
	if (typeof window !== 'undefined') return window.location.origin
	return process.env.NEXT_BASE_URL || 'http://localhost:3000'
}

function convertParamsToQuery(params: ILeaderBoardSearchParams) {
	const qs = new URLSearchParams()
	if (params.id) qs.set('id', params.id)
	if (params.username) qs.set('username', params.username)
	return qs.toString()
}

function buildCookieHeader(cookieStore: Awaited<ReturnType<typeof cookies>>) {
	return cookieStore
		.getAll()
		.map(c => `${c.name}=${c.value}`)
		.join('; ')
}

class LeaderBoardCRUDUseCase {
	readLeaderBoard = async (params: ILeaderBoardSearchParams = {}) => {
		const baseURL = getBaseURL()
		const query = convertParamsToQuery(params)
		const url = `${baseURL}/api/leaderboard${query ? `?${query}` : ''}`

		let cookieHeader: string | undefined

		if (typeof window === 'undefined') {
			const cookieStore = await cookies() // Needed for authentication (JWT) when calling a protected route
			const header = buildCookieHeader(cookieStore)
			cookieHeader = header.length ? header : undefined
		}

		const res = await fetch(url, {
			method: 'GET',
			headers: cookieHeader ? { cookie: cookieHeader } : undefined,
			cache: 'no-store'
		})

		if (!res.ok) {
			const text = await res.text().catch(() => '')
			throw new Error(`Failed to fetch leaderboard (${res.status}): ${text}`)
		}

		return res.json()
	}
}

export default LeaderBoardCRUDUseCase

import { NextResponse } from 'next/server'

export async function createRFC7807ErrorMessage(
	title: string,
	status: number,
	detail?: unknown
) {
	return NextResponse.json({ type: 'about:blank', title, status, detail }, { status })
}

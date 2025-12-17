import type { Row } from './types'

export const rows: Row[] = [
	{
		type: 'forest',
		trees: [
			{ tileIndex: -3, height: 50 },
			{ tileIndex: 2, height: 30 },
			{ tileIndex: 5, height: 50 }
		]
	},
	{
		type: 'car',
		direction: false,
		speed: 1, // Units per second i.e. 1 means one square per second
		vehicles: [{ initialTileIndex: 2, color: 0xff0000 }]
	}
]

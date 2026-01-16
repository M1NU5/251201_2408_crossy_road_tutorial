import { maxTileIndex, minTileIndex } from './config'
// import { rows } from './app/metaData'  ////This is used when defining a set of rows i.e. the same map every time instead of a random set as below.
import useMapStore from '../_stores/map'
import { ValidMove } from '../types'

export function calculateFinalPosition(
	currentPosition: { rowIndex: number; tileIndex: number },
	moves: ValidMove[]
) {
	return moves.reduce((position, direction) => {
		if (direction === 'forward')
			return {
				rowIndex: position.rowIndex + 1,
				tileIndex: position.tileIndex
			}
		if (direction === 'backward')
			return {
				rowIndex: position.rowIndex - 1,
				tileIndex: position.tileIndex
			}
		if (direction === 'left')
			return {
				rowIndex: position.rowIndex,
				tileIndex: position.tileIndex - 1
			}
		if (direction === 'right')
			return {
				rowIndex: position.rowIndex,
				tileIndex: position.tileIndex + 1
			}
		return position
	}, currentPosition)
}

export function endsUpInValidPosition(
	currentPosition: { rowIndex: number; tileIndex: number },
	moves: ValidMove[]
) {
	// Calculate where the player would end up after the move
	const finalPosition = calculateFinalPosition(currentPosition, moves)

	// Detect if we hit the edge of the board
	if (
		finalPosition.rowIndex === -1 ||
		finalPosition.tileIndex === minTileIndex - 1 ||
		finalPosition.tileIndex === maxTileIndex + 1
	) {
		// Invalid move, ignore move command
		return false
	}

	// Detect if we hit a tree
	const finalRow = useMapStore.getState().rows[finalPosition.rowIndex - 1]
	if (
		finalRow &&
		finalRow.type === 'forest' &&
		finalRow.trees.some(tree => tree.tileIndex === finalPosition.tileIndex)
	) {
		// Invalid move, ignore move command
		return false
	}

	return true
}

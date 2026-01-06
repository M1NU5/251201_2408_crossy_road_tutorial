'use client'
import React from 'react'
import useStore from '../_stores/game'

const Score = () => {
	const score = useStore(state => state.score)

	return (
		<div
			style={{
				position: 'absolute',
				top: '20px',
				left: '20px',
				fontFamily: `'Press Start 2P', 'VT323', 'Courier New', monospace`,
				fontSize: '6rem',
				color: '#39ff14', // neon green
				textShadow: `
					0 0 5px rgba(57, 255, 20, 0.6),
					0 0 10px rgba(57, 255, 20, 0.4),
					0 0 20px rgba(57, 255, 20, 0.2)
				`,
				letterSpacing: '0.1em',
				pointerEvents: 'none',
				userSelect: 'none'
			}}>
			{score}
		</div>
	)
}

export default Score

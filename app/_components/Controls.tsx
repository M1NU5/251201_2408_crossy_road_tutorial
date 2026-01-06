'use client'

import { queueMove } from '../_stores/player'
import useEventListeners from '../hooks/useEventListeners'

type Props = {
	scale: number
}

export function Controls({ scale }: Props) {
	useEventListeners()

	const baseButton: React.CSSProperties = {
		width: `${120 * scale}px`,
		height: `${80 * scale}px`,
		fontSize: `${48 * scale}px`,
		backgroundColor: '#e5e7eb',
		border: `${2 * scale}px solid #9ca3af`,
		boxShadow: '0 6px 10px rgba(0,0,0,0.35)',
		clipPath: 'polygon(50% 0%, 100% 35%, 85% 100%, 15% 100%, 0% 35%)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		outline: 'none',
		userSelect: 'none',
		WebkitTapHighlightColor: 'transparent'
	}

	return (
		<div
			style={{
				position: 'absolute',
				bottom: `${100 * scale}px`, // ⬅ sits higher as it scales
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: 1000,
				pointerEvents: 'auto'
			}}>
			{/* D-PAD */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `${80 * scale}px ${120 * scale}px ${80 * scale}px`,
					gridTemplateRows: `${80 * scale}px ${80 * scale}px ${80 * scale}px`,
					alignItems: 'center',
					justifyItems: 'center',
					userSelect: 'none'
				}}>
				{/* UP */}
				<button
					style={{ ...baseButton, gridColumn: 2, gridRow: 1 }}
					onClick={() => queueMove('forward')}>
					▲
				</button>

				{/* LEFT */}
				<button
					style={{
						...baseButton,
						transform: 'rotate(-90deg)',
						gridColumn: 1,
						gridRow: 2
					}}
					onClick={() => queueMove('left')}>
					▲
				</button>

				{/* DOWN */}
				<button
					style={{
						...baseButton,
						transform: 'rotate(180deg)',
						gridColumn: 2,
						gridRow: 3
					}}
					onClick={() => queueMove('backward')}>
					▲
				</button>

				{/* RIGHT */}
				<button
					style={{
						...baseButton,
						transform: 'rotate(90deg)',
						gridColumn: 3,
						gridRow: 2
					}}
					onClick={() => queueMove('right')}>
					▲
				</button>
			</div>
		</div>
	)
}

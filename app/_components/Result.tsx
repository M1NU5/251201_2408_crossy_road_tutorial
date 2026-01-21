'use client'
import useStore from '../_stores/game'

const Result = () => {
	const status = useStore(state => state.status)
	const score = useStore(state => state.score)
	const reset = useStore(state => state.reset)

	if (status === 'running') return null

	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(0,0,0,0.6)', // optional overlay
				zIndex: 10
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: '#fff',
					padding: '20px',
					gap: '16px'
				}}>
				<h1 style={{ margin: 0 }}>Game Over</h1>

				<p style={{ margin: 0 }}>Your score: {score}</p>

				<button
					onClick={reset}
					style={{
						backgroundColor: 'red',
						padding: '20px 50px',
						fontFamily: 'inherit',
						fontSize: 'inherit',
						cursor: 'pointer',
						border: 'none',
						color: 'white'
					}}>
					Retry
				</button>
			</div>
		</div>
	)
}

export default Result

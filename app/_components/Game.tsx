import React from 'react'
import Scene from './Scene'
import Player from './Player'
import Map from './Map'
import { Controls } from './Controls'
import Score from './Score'
import Result from './Result'

const Game = () => {
	return (
		<>
			{/* SCENE WRAPPER */}
			<div
				style={{
					width: '90vw',
					height: '90vh',
					margin: '0 auto', // ⬅ centers scene horizontally
					position: 'relative'
				}}>
				<Scene>
					<Player />
					<Map />
				</Scene>
				<Score />
			</div>

			{/* CONTROLS WRAPPER (same width + centering) */}
			<div
				style={{
					width: '90vw',
					margin: '0 auto', // ⬅ same horizontal alignment
					position: 'relative',
					height: '0' // ⬅ doesn’t push layout
				}}>
				<Controls scale={2.5} />
			</div>

			<Result />
		</>
	)
}

export default Game

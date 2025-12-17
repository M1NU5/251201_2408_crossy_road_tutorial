import React from 'react'
import Scene from './Scene'
import Player from './Player'
import Map from './Map'

const Game = () => {
	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				width: '100vw',
				height: '100vh',
				overflow: 'hidden'
			}}>
			<Scene>
				<Player />
				<Map />
			</Scene>
		</div>
	)
}

export default Game

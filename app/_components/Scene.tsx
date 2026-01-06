'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'

const Scene = ({ children }: { children: React.ReactNode }) => {
	return (
		<Canvas
			orthographic={true}
			shadows={true}
			camera={{
				up: [0, 0, 1], //Set which vector is up i.e. z-axis
				position: [300, -300, 300] // x, y, z
			}}>
			<ambientLight />
			{/* <directionalLight position={[-100, -100, 200]} /> */}

			{children}
		</Canvas>
	)
}

export default Scene

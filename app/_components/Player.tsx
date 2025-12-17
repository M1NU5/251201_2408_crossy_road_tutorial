'use client'

import { Bounds } from '@react-three/drei'
import React from 'react'

const Player = () => {
	return (
		<Bounds fit clip observe margin={10}>
			{/* // Margin of 10 means visiable area is 10x size of the child components  */}
			<mesh position={[0, 0, 10]}>
				<boxGeometry args={[15, 15, 20]} />
				<meshLambertMaterial color={0xffffff} flatShading />
			</mesh>
		</Bounds>
	)
}

export default Player

import React from 'react'
import { tileSize, tilesPerRow } from '../config'

type Props = {
	rowIndex: number
	children?: React.ReactNode
}
const Grass = ({ rowIndex, children }: Props) => {
	return (
		<group position-y={rowIndex * tileSize}>
			{/* group tag can hold multiple 3D elements and apply transformations to all of them */}
			<mesh>
				<boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
				<meshLambertMaterial color={0xbaf455} flatShading />
			</mesh>
			{children}
		</group>
	)
}

export default Grass

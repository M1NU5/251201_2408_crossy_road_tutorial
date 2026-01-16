import React from 'react'
import { tileSize, tilesPerRow } from '../_utilities/config'

type Props = {
	rowIndex: number
	children?: React.ReactNode
}

const Road = ({ rowIndex, children }: Props) => {
	return (
		<group position-y={rowIndex * tileSize}>
			<mesh receiveShadow>
				<planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
				<meshLambertMaterial color={0x454a59} flatShading />
			</mesh>
			{children}
		</group>
	)
}

export default Road

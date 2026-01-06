import React from 'react'
import { tileSize } from '../config'

type Props = {
	tileIndex: number
	height: number
}

const Tree = ({ tileIndex, height }: Props) => {
	return (
		<group position-x={tileIndex * tileSize}>
			<mesh position-z={height / 2 + 20} receiveShadow castShadow>
				<boxGeometry args={[30, 30, height]} />
				<meshLambertMaterial color={0x7aa21d} flatShading />
			</mesh>
			<mesh position-z={10} receiveShadow castShadow>
				<boxGeometry args={[15, 15, 20]} />
				<meshLambertMaterial color={0x4d2926} flatShading />
			</mesh>
		</group>
	)
}

export default Tree

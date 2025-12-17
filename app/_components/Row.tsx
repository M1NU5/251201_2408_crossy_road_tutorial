import React from 'react'
import type { Row } from '../types'
import Forest from './Forest'
import CarLane from './CarLane'

type Props = {
	rowIndex: number
	rowData: Row
}
const Row = ({ rowIndex, rowData }: Props) => {
	switch (rowData.type) {
		case 'forest': {
			return <Forest rowIndex={rowIndex} rowData={rowData} />
		}
		case 'car': {
			return <CarLane rowIndex={rowIndex} rowData={rowData} />
		}
	}
}

export default Row

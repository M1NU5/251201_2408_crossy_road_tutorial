import React from 'react'
import Grass from './Grass'
import { rows } from '../metaData'
import Row from './Row'

const Map = () => {
	return (
		<>
			<Grass rowIndex={0} />
			{rows.map((rowData, index) => (
				<Row key={index} rowIndex={index + 1} rowData={rowData} />
			))}{' '}
		</>
	)
}

export default Map

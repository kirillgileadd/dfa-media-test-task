import { FC, useState } from 'react'
import StructureList from '@/pages/Structure/StructureList'
import { structureData } from '@/pages/Structure/Structure.data'

const Structure: FC = () => {
	const [structureList] = useState(structureData)

	return (
		<div>
			<StructureList structureList={structureList} />
		</div>
	)
}

export default Structure

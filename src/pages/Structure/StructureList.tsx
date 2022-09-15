import { FC } from 'react'
import { IStructureItem } from '@/pages/Structure/Structure.interface'
import StructureItem from '@/pages/Structure/StructureItem'

import styles from './Structure.module.scss'

interface IStructureList {
	structureList: IStructureItem[]
}

const StructureList: FC<IStructureList> = ({ structureList }) => {
	return (
		<ul className={styles.structure_list}>
			{structureList.map((item) => (
				<StructureItem key={item.level} {...item} />
			))}
		</ul>
	)
}

export default StructureList

import { FC } from 'react'
import { IStructureItem } from '@/pages/Structure/Structure.interface'

import styles from './Structure.module.scss'

const StructureItem: FC<IStructureItem> = ({
	partners,
	partnerList,
	level,
}) => {
	return (
		<li className={styles.structure_item}>
			<div className={styles.structure_item_top}>
				<div>
					<h6>{level}</h6>
					<h6>{partners}</h6>
				</div>
				<div>
					<p>Уровень выплат</p>
					<p>Активных партнеров</p>
				</div>
			</div>
			<ul className={styles.partner_list}>
				{partnerList.map((partner, index) => (
					<li key={index} className={styles.partner_item}>
						<img src={partner.avatar} alt="avatar" />
						<p>{partner.name}</p>
					</li>
				))}
			</ul>
		</li>
	)
}

export default StructureItem

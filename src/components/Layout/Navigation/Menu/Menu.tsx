import { FC } from 'react'
import { menuData } from '@/components/Layout/Navigation/Menu/Menu.data'
import MenuItem from '@/components/Layout/Navigation/Menu/MenuItem'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<ul className={styles.menu}>
			{menuData.map((item) => (
				<MenuItem key={item.link} {...item} />
			))}
		</ul>
	)
}

export default Menu

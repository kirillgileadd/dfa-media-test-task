import { FC } from 'react'
import { menuData } from '@/components/Layout/Navigation/Menu/Menu.data'
import MenuItem from '@/components/Layout/Navigation/Menu/MenuItem'

import styles from './Menu.module.scss'
import cl from 'classnames'

interface IMenu {
	open: boolean
	onMenu: () => void
}

const Menu: FC<IMenu> = ({ onMenu, open }) => {
	return (
		<>
			<div
				className={cl({ [styles.open]: open }, styles.menu_icon)}
				onClick={onMenu}
			>
				<span></span>
			</div>
			<ul className={cl({ [styles.open]: open }, styles.menu)}>
				{menuData.map((item) => (
					<MenuItem onMenu={onMenu} key={item.link} {...item} />
				))}
			</ul>
		</>
	)
}

export default Menu

import { FC } from 'react'
import { IMenuItem } from '@/components/Layout/Navigation/Menu/Menu.interface'
import { Link, useLocation } from 'react-router-dom'

import cl from 'classnames'

import styles from './Menu.module.scss'

const MenuItem: FC<IMenuItem> = ({ name, link, icon, disable }) => {
	const router = useLocation()

	return (
		<li
			className={cl(styles.menu_item, {
				[styles.active]: router.pathname === link,
				[styles.disable]: disable,
			})}
		>
			<Link to={link}>
				<img src={icon} alt="menu-icon" />
				<p>{name}</p>
			</Link>
		</li>
	)
}

export default MenuItem

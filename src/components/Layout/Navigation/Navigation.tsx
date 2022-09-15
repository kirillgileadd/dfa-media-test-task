import { FC, useState } from 'react'

import styles from './Navigation.module.scss'
import Menu from '@/components/Layout/Navigation/Menu/Menu'
import { bodyLock } from '@/helpers/bodyLock'

const Navigation: FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)

	const onToggleMenu = () => {
		setMenuOpen((prev) => {
			bodyLock(!prev)
			return !prev
		})
	}

	return (
		<nav className={styles.navigation}>
			<Menu open={menuOpen} onMenu={onToggleMenu} />
		</nav>
	)
}

export default Navigation

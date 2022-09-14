import { FC } from 'react'

import styles from './Navigation.module.scss'
import Menu from '@/components/Layout/Navigation/Menu/Menu'

const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Menu />
		</nav>
	)
}

export default Navigation

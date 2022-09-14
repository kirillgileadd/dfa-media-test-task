import { FC } from 'react'

import styles from './Navigation.module.scss'
import Menu from '@/components/Layout/Navigation/Menu/Menu'

const Navigation: FC = () => {
	return (
		<aside className={styles.navigation}>
			<Menu />
		</aside>
	)
}

export default Navigation

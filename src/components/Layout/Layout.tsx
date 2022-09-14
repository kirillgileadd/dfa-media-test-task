import { FC, ReactNode } from 'react'
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'

import styles from './Layout.module.scss'

interface ILayout {
	children?: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	)
}

export default Layout

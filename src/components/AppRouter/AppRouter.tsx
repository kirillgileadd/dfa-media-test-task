import React, { FC } from 'react'
import { Route, Routes } from 'react-router'
import { routes } from '@/components/AppRouter/routes'

const AppRouter: FC = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} path={route.path} element={route.component} />
			))}
		</Routes>
	)
}

export default AppRouter

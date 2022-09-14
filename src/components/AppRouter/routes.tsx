import React, { ReactNode } from 'react'
import Structure from '@/pages/Structure'
import NotFoundPage from '@/pages/404Page'

export interface IRoute {
	path: string
	component: ReactNode
}

export enum RouteNames {
	STRUCTURE = '/structure',
	DASHBORD = '/dashbord',
	ACTIVITY_EXCHANGE = '/birzha-antivnosti',
}

export const routes: IRoute[] = [
	{ path: RouteNames.STRUCTURE, component: <Structure /> },
	{ path: RouteNames.DASHBORD, component: <NotFoundPage /> },
	{ path: RouteNames.ACTIVITY_EXCHANGE, component: <NotFoundPage /> },
]

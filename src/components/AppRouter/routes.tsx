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
	SHOP = '/magazin',
	PR = '/vzaimopiar',
}

export const routes: IRoute[] = [
	{ path: RouteNames.DASHBORD, component: <NotFoundPage /> },
	{ path: RouteNames.ACTIVITY_EXCHANGE, component: <NotFoundPage /> },
	{ path: RouteNames.PR, component: <NotFoundPage /> },
	{ path: RouteNames.SHOP, component: <NotFoundPage /> },
	{ path: RouteNames.STRUCTURE, component: <Structure /> },
]

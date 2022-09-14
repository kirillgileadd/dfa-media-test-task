import { RouteNames } from '@/components/AppRouter/routes'
import { IMenuItem } from '@/components/Layout/Navigation/Menu/Menu.interface'

import HomeIcon from '@/assets/icons/Home.svg'
import ActivityExchangeIcon from '@/assets/icons/interview-communication.svg'
import StructureIcon from '@/assets/icons/Structuce.svg'

export const menuData: IMenuItem[] = [
	{ name: 'Дашборд', link: RouteNames.DASHBORD, icon: HomeIcon },
	{
		name: 'Брижа активности',
		link: RouteNames.ACTIVITY_EXCHANGE,
		icon: ActivityExchangeIcon,
	},
	{ name: 'Моя структура', link: RouteNames.STRUCTURE, icon: StructureIcon },
]

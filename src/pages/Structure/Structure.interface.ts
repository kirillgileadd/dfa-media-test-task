export interface IStructureItem {
	level: number
	partners: number
	partnerList: IPartner[]
}

export interface IPartner {
	name: string
	avatar: string
}

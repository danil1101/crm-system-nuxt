export interface IMenuItem {
	name: string
	url: string
	icon: string
}

export const MENU_DATA: IMenuItem[] = [
	{
		icon: 'radix-icons:dashboard',
		name: 'Home',
		url: '/',
	},
	{
		name: 'Clients',
		icon: 'mingcute:group-line',
		url: '/clients',
	},
	{
		name: 'Trainers',
		icon: 'mingcute:group-line',
		url: '/trainers',
	},
	{
		name: 'Finance',
		icon: 'ph:contactless-payment',
		url: '/finance',
	},
	{
		name: 'Training area',
		icon: 'fluent:receipt-28-regular',
		url: '/training-area',
	},
	{
		name: 'Events',
		icon: 'mdi:events',
		url: '/events',
	},
	{
		name: 'Settings',
		icon: 'radix-icons:gear',
		url: '/settings',
	}
]

export interface IMenuItem {
	name: string
	url?: string
	icon: string
	children?: {
		name: string
		url: string
	}[]
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
		children: [
			{
				name: 'Income',
				url: '/finance/income',
			},
			{
				name: 'Outcome',
				url: '/finance/outcome',
			},
			{
				name: 'Salaries',
				url: '/finance/salaries',
			},
		]
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

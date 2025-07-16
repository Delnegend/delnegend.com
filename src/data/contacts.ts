export interface Contact {
	name: string
	value: string
	link: string
}

export const contacts: Contact[] = [
	{
		name: 'GitHub',
		value: 'github.com/Delnegend',
		link: 'https://github.com/Delnegend'
	},
	{
		name: 'Resume',
		value: 'delnegend.com/resume',
		link: 'https://delnegend.com/resume'
	},
	{
		name: 'Email',
		value: 'kien@delnegend.com',
		link: 'mailto:kien@delnegend.com'
	},
	{
		name: 'Discord',
		value: '@delnegend',
		link: 'https://discordapp.com/users/577800591724642304'
	}
] as const

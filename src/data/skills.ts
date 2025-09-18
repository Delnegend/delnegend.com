import type { projects } from './projects'

export interface Skill {
	name: string
	repos: Array<keyof typeof projects>
}

export const skills = [
	{
		name: 'Backend Development',
		repos: [
			'Biolak',
			'Yomuyume',
			'Artefact',
			'Update',
			'Differ',
			'gallery-preprocessor',
			'upptime-embed',
			'taxer',
			'social-2-telego',
			'cf-ddns',
			'TOWD',
			'avtxtr',
			'ffmpeg-progressbar',
			'social-2-telegram',
			'fshare-cli'
		]
	},
	{
		name: 'Frontend Development',
		repos: [
			'Biolak',
			'Yomuyume',
			'Artefact',
			'Kiness Social/Admin',
			'gallery-preprocessor',
			'upptime-embed',
			'TOWD',
			'KHPlayer'
		]
	},
	{
		name: 'Mobile app Development',
		repos: ['Kiness Social/Admin']
	},
	{
		name: 'Desktop app Development',
		repos: [
			'Kiness Social/Admin',
			'gallery-preprocessor',
			'social-2-telego'
		]
	},
	{
		name: 'Image & Media Processing',
		repos: [
			'Artefact',
			'Differ',
			'gallery-preprocessor',
			'taxer',
			'ffmpeg-progressbar'
		]
	},
	{
		name: 'Web Scrape, Data Extract',
		repos: [
			'Update',
			'upptime-embed',
			'social-2-telego',
			'avtxtr',
			'social-2-telegram'
		]
	},
	{
		name: 'API Develop & Integration',
		repos: [
			'Kiness Social/Admin',
			'taxer',
			'social-2-telego',
			'cf-ddns',
			'TOWD',
			'avtxtr',
			'social-2-telegram',
			'fshare-cli'
		]
	},
	{
		name: 'Database Management',
		repos: ['Yomuyume', 'social-2-telego', 'TOWD']
	},
	{
		name: 'DevOps & Automation',
		repos: ['Update', 'cf-ddns', 'ffmpeg-progressbar']
	},
	{
		name: 'System Architect',
		repos: [
			'Biolak',
			'Yomuyume',
			'Artefact',
			'Kiness Social/Admin',
			'Differ'
		]
	},
	{
		name: 'UI/UX Implementation',
		repos: [
			'Biolak',
			'Yomuyume',
			'Artefact',
			'Kiness Social/Admin',
			'gallery-preprocessor',
			'upptime-embed',
			'TOWD',
			'social-2-telego'
		]
	}
] as const satisfies Skill[]

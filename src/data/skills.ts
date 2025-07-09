import type { AvailableProjects } from './projects'

export interface Skill {
	name: string
	repos: AvailableProjects
}

export const skills = [
	{
		name: 'Backend Development',
		repos: [
			'Yomuyume',
			'Artefact',
			'Update',
			'Differ',
			'gallery-preprocessor-go',
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
			'Yomuyume',
			'Artefact',
			'Kiness Social/Admin',
			'gallery-preprocessor-go',
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
			'gallery-preprocessor-go',
			'social-2-telego'
		]
	},
	{
		name: 'Image & Media Processing',
		repos: [
			'Artefact',
			'Differ',
			'gallery-preprocessor-go',
			'taxer',
			'ffmpeg-progressbar'
		]
	},
	{
		name: 'Web Scraping & Data Extraction',
		repos: [
			'Update',
			'upptime-embed',
			'social-2-telego',
			'avtxtr',
			'social-2-telegram'
		]
	},
	{
		name: 'API Integration & Development',
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
		name: 'System Design & Architecture',
		repos: ['Yomuyume', 'Artefact', 'Kiness Social/Admin', 'Differ']
	},
	{
		name: 'UI/UX Implementation',
		repos: [
			'Yomuyume',
			'Artefact',
			'Kiness Social/Admin',
			'gallery-preprocessor-go',
			'upptime-embed',
			'TOWD',
			'social-2-telego'
		]
	}
] as const satisfies Skill[]

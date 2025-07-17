export enum Status {
	ARCHIVED = 'ARCHIVED',
	COMPLETED = 'COMPLETED',
	WORK_IN_PROGRESS = 'WORK IN PROGRESS',
	FAILED_LAUNCH = 'FAILED LAUNCH',
	NEEDS_IMPROVEMENT = 'NEEDS IMPROVEMENT'
}

export interface Project {
	repo?: string
	description: string
	badges: string[]
	status: Status | Status[]
}

export const projects = {
	Biolak: {
		repo: 'https://new.biolak.vn',
		description:
			'An e-commerce platform specializing in health and beauty products.',
		status: Status.COMPLETED,
		badges: [
			'typescript',
			'react',
			'nextjs',
			'payload-cms',
			'tailwindcss',
			'shadcn-ui'
		]
	},
	Yomuyume: {
		repo: 'https://github.com/Liminova/yomuyume',
		description:
			'A high-performance, self-hosted server for managing and reading your digital comic and manga collection online, complete with multi-user support, progress tracking, and detailed organization features.',
		status: Status.WORK_IN_PROGRESS,
		badges: [
			'rust',
			'typescript',
			'nuxt',
			'wasm',
			'axum',
			'tokio',
			'postgresql',
			'tantivy',
			'comicinfo.xml',
			'jpeg-xl',
			'blurhash',
			'pwa',
			'web-worker',
			'tailwindcss',
			'shadcn-ui',
			'material-design'
		]
	},
	Artefact: {
		repo: 'https://artefact.delnegend.com',
		description:
			'A specialized JPEG image decoder designed to enhance visual quality by removing compression artifacts, available as a web app that runs directly in your browser.',
		status: [Status.COMPLETED, Status.NEEDS_IMPROVEMENT],
		badges: [
			'rust',
			'typescript',
			'wasm',
			'nuxt',
			'web-worker',
			'pwa',
			'simd',
			'jpeg',
			'png',
			'tailwindcss',
			'shadcn-ui'
		]
	},
	'Kiness Social/Admin': {
		description:
			'A dual-purpose platform connecting parents with pediatric and fitness trainers, featuring a social app for parents to schedule and communicate, and an admin app for trainers to manage clients and appointments.',
		status: [Status.COMPLETED, Status.FAILED_LAUNCH],
		badges: [
			'typescript',
			'react',
			'tauri',
			'pwa',
			'tailwindcss',
			'shadcn-ui',
			'react-native',
			'expo',
			'nativewind'
		]
	},
	'task-manager-rs': {
		repo: 'https://github.com/Delnegend/task-manager-rs',
		description:
			'A simple POC task manager app built with Rust and Slint, works on Linux.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['rust', 'slint', 'linux', 'tokio']
	},
	Update: {
		repo: 'https://github.com/Delnegend/update',
		description:
			'A simple command-line tool that automatically checks for and provides direct download links for updates to various Windows apps that lack built-in auto-update features.',
		status: [Status.ARCHIVED, Status.COMPLETED],
		badges: ['go', 'regex']
	},
	Differ: {
		repo: 'https://github.com/Delnegend/differ',
		description:
			'A tool that reduces the storage size of image sequences by identifying and storing only the pixel-by-pixel differences between consecutive images, similar to how video compression works.',
		status: Status.COMPLETED,
		badges: ['go']
	},
	'gallery-preprocessor-go': {
		repo: 'https://github.com/Delnegend/gallery-preprocessor-go',
		description:
			'A user-friendly desktop app that allows you to drag-and-drop images for batch processing tasks.',
		status: Status.COMPLETED,
		badges: ['go', 'wails', 'vue', 'tailwindcss', 'shadcn-ui']
	},
	'upptime-embed': {
		repo: 'https://github.com/Delnegend/upptime-embed',
		description:
			'An alternative, modern status page for websites that displays service uptime information by directly processing data from a GitHub-powered status system.',
		status: [Status.COMPLETED, Status.NEEDS_IMPROVEMENT],
		badges: [
			'go',
			'typescript',
			'nuxt',
			'regex',
			'tailwindcss',
			'shadcn-ui'
		]
	},
	taxer: {
		repo: 'https://github.com/Liminova/taxer',
		description:
			'A Discord bot that allows users to play music from various sources within their Discord voice channels.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['rust', 'discord', 'poise', 'yt-dlp']
	},
	'social-2-telego': {
		repo: 'https://github.com/Delnegend/social-2-telego',
		description:
			'A desktop app that simplifies sharing content from social media platforms like Twitter/X and FurAffinity directly to a Telegram channel.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: [
			'go',
			'wails',
			'nuxt',
			'sqlite',
			'tailwindcss',
			'shadcn-ui',
			'telegram'
		]
	},
	'cf-ddns': {
		repo: 'https://github.com/Delnegend/cf-ddns',
		description:
			'A lightweight client that automatically updates your Cloudflare DNS records to reflect changes in your public IP address, ensuring your domain always points to the correct location.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['go', 'cloudflare']
	},
	TOWD: {
		repo: 'https://github.com/Delnegend/towd',
		description:
			'A Discord bot designed to help teams manage their schedules and tasks using calendar and Kanban board.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: [
			'go',
			'typescript',
			'nuxt',
			'discord',
			'discordgo',
			'sqlite',
			'icalendar',
			'tailwindcss',
			'shadcn-ui'
		]
	},
	avtxtr: {
		repo: 'https://github.com/Delnegend/avtxtr',
		description:
			'A web service that can extract and provide user avatar images from various popular social media platforms.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['go', 'regex']
	},
	'ffmpeg-progressbar': {
		repo: 'https://github.com/Delnegend/ffmpeg-progressbar',
		description:
			'A command-line wrapper for FFmpeg that adds a visual progress bar and estimated time remaining, making video processing tasks easier to monitor.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['go', 'python', 'ffmpeg']
	},
	'social-2-telegram': {
		repo: 'https://github.com/Delnegend/social-2-telegram',
		description:
			'The original Python version of the social media to Telegram reposting tool, designed to forward posts from various social platforms to a Telegram channel.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['python', 'regex', 'telegram', 'web-scraping', 'selenium']
	},
	'fshare-cli': {
		repo: 'https://github.com/Delnegend/fshare-cli',
		description:
			'A command-line app for interacting with the fshare.vn file-hosting service, allowing users to manage files, folders, and downloads directly from their terminal.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['python', 'fshare', 'regex']
	},
	KHPlayer: {
		repo: 'https://github.com/Delnegend/social-2-telegram', // Note: This URL seems incorrect based on the description, but I'm using the provided one.
		description:
			'A front-end JavaScript library that simplifies embedding and configuring the Plyr.io video player, enabling playlist features through simple HTML attributes without requiring direct JavaScript coding.',
		status: [Status.COMPLETED, Status.ARCHIVED],
		badges: ['plyr.io', 'html', 'css', 'javascript']
	}
} as const satisfies Record<string, Project>

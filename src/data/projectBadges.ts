import { projects } from './projects'

const additional = ['docker', 'podman', 'linux'] as const
export type ProjectBadge =
	| (typeof projects)[keyof typeof projects]['badges'][number]
	| (typeof additional)[number]

const excluded = new Set<ProjectBadge>([
	'fshare',
	'jpeg',
	'jpeg-xl',
	'png',
	'yt-dlp'
])
const highlight = new Set<ProjectBadge>([
	'linux',
	'rust',
	'go',
	'typescript',
	'python',
	'react',
	'nextjs',
	'vue',
	'nuxt',
	'docker',
	'podman',
	'payload-cms'
])

export const projectBadges = Object.values(projects).reduce(
	(acc, project) => {
		for (const badge of project.badges)
			if (!excluded.has(badge)) acc.add(badge)
		return acc
	},
	new Set([...highlight, ...additional]) as Set<ProjectBadge>
)

export const badgeLinks: Record<ProjectBadge, string> = {
	rust: 'https://www.rust-lang.org/',
	docker: 'https://www.docker.com/',
	podman: 'https://podman.io/',
	linux: 'https://en.wikipedia.org/wiki/Linux',
	typescript: 'https://www.typescriptlang.org/',
	react: 'https://reactjs.org/',
	nextjs: 'https://nextjs.org/',
	'payload-cms': 'https://payloadcms.com/',
	tailwindcss: 'https://tailwindcss.com/',
	'shadcn-ui': 'https://ui.shadcn.com/',
	nuxt: 'https://nuxt.com/',
	wasm: 'https://webassembly.org/',
	axum: 'https://github.com/tokio-rs/axum',
	postgresql: 'https://www.postgresql.org/',
	tantivy: 'https://github.com/quickwit-oss/tantivy',
	'comicinfo.xml': 'https://anansi-project.github.io/docs/comicinfo/intro',
	'jpeg-xl': 'https://jpegxl.info/',
	blurhash: 'https://blurha.sh/',
	pwa: 'https://web.dev/progressive-web-apps/',
	'web-worker': 'https://web.dev/learn/performance/web-worker-overview',
	'material-design': 'https://m3.material.io/',
	simd: 'https://en.wikipedia.org/wiki/SIMD',
	jpeg: 'https://en.wikipedia.org/wiki/JPEG',
	png: 'https://en.wikipedia.org/wiki/PNG',
	tauri: 'https://tauri.app/',
	'react-native': 'https://reactnative.dev/',
	expo: 'https://expo.dev/',
	nativewind: 'https://www.nativewind.dev/',
	go: 'https://golang.org/',
	regex: 'https://en.wikipedia.org/wiki/Regular_expression',
	wails: 'https://wails.io/',
	vue: 'https://vuejs.org/',
	discord: 'https://discord.com/',
	poise: 'https://github.com/serenity-rs/poise',
	'yt-dlp': 'https://github.com/yt-dlp/yt-dlp',
	sqlite: 'https://www.sqlite.org/',
	telegram: 'https://telegram.org/',
	cloudflare: 'https://www.cloudflare.com/',
	discordgo: 'https://github.com/bwmarrin/discordgo',
	icalendar: 'https://icalendar.org/',
	python: 'https://www.python.org/',
	ffmpeg: 'https://ffmpeg.org/',
	'web-scraping': 'https://en.wikipedia.org/wiki/Web_scraping',
	selenium: 'https://www.selenium.dev/',
	fshare: 'https://fshare.vn/',
	'plyr.io': 'https://plyr.io/',
	html: 'https://en.wikipedia.org/wiki/HTML',
	css: 'https://en.wikipedia.org/wiki/CSS',
	javascript: 'https://en.wikipedia.org/wiki/JavaScript'
}

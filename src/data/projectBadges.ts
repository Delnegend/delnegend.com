import { projects } from './projects'

const additional = new Set([] as const)
type AdditionalBadge = typeof additional extends Set<infer S> ? S : never
type Badge =
	| (typeof projects)[keyof typeof projects]['badges'][number]
	| AdditionalBadge

const excluded = new Set<Badge>(['fshare', 'jpeg', 'jpeg-xl', 'png', 'yt-dlp'])
const highlight = new Set<Badge>([
	'rust',
	'go',
	'typescript',
	'python',
	'react',
	'vue',
	'nuxt',
	'nextjs',
	'payload-cms'
])

export const projectBadges = Object.values(projects)
	.reduce(
		(acc, project) => {
			for (const badge of project.badges)
				if (!excluded.has(badge))
					if (!acc.includes(badge)) acc.push(badge)
			return acc
		},
		Array.from(new Set<Badge>(additional))
	)
	.sort((a, b) => {
		if (highlight.has(a) && !highlight.has(b)) return -1
		if (!highlight.has(a) && highlight.has(b)) return 1
		return a.localeCompare(b)
	})

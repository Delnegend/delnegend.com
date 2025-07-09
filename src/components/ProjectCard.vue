<script lang="ts" setup>
import { ref } from 'vue'
import type { Project } from '~/data/projects'
import { cn } from '~/utils/utils'
import Badge from './Badge.vue'

const props = withDefaults(
	defineProps<{
		title: string
		project: Project
		class?: string
	}>(),
	{
		url: undefined,
		class: undefined
	}
)

const openState = ref(false)
</script>

<template>
	<div
		class="text-secondary-foreground flex flex-col gap-3 px-6 font-extralight"
	>
		<div
			class="flex items-center justify-between gap-x-4 text-xl font-normal"
		>
			<a
				v-if="props.project.repo"
				class="no-underline"
				:href="props.project.repo"
				target="_blank"
			>
				{{ props.title }}
				<ExternalLink :size="14" class="ml-1 inline-block" />
			</a>
			<span v-else>{{ props.title }}</span>
			<button
				aria-label="Toggle project info"
				class="text-muted-foreground hover:text-primary transition-colors"
				@click="openState = !openState"
			>
				<Info />
			</button>
		</div>

		<div>
			{{ props.project.description }}
		</div>

		<div v-if="props.project.badges.length" class="flex flex-wrap gap-2">
			<Badge
				v-for="badge in props.project.badges"
				:key="badge"
				variant="outline-solid"
				:class="
					cn(
						'transition-colors',
						'text-muted-foreground hover:text-[--text] hover:[background:var(--bg)]',
						badge
					)
				"
			>
				{{ badge }}
			</Badge>
		</div>
	</div>
</template>

<style scoped>
.rust {
	--bg: hsl(344, 67%, 39%);
	--text: hsl(0, 0%, 100%);
}

.go {
	--bg: hsl(199, 97%, 73%);
	--text: hsl(199, 97%, 20%);
}

.typescript {
	--bg: hsl(211, 60%, 48%);
	--text: hsl(0, 0%, 100%);
}

.vue {
	--bg: hsl(153, 47%, 49%);
	--text: hsl(0, 0%, 100%);
}

.nuxt {
	--bg: hsl(155, 100%, 43%);
	--text: hsl(222, 47%, 11%);
}

.wails {
	--bg: hsl(0, 100%, 31%);
	--text: hsl(0, 0%, 100%);
}

.python {
	--bg: hsl(207, 51%, 41%);
	--text: hsl(0, 0%, 100%);
}

.cloudflare {
	--bg: hsl(28, 92%, 54%);
	--text: hsl(0, 0%, 0%);
}

.discord {
	--bg: hsl(227, 58%, 65%);
	--text: hsl(0, 0%, 100%);
}

.wasm {
	--bg: hsl(248, 84%, 63%);
	--text: hsl(0, 0%, 100%);
}

.react {
	--bg: hsl(191, 65%, 60%);
	--text: hsl(0, 0%, 0%);
}

.react-native {
	--bg: hsl(191, 65%, 60%);
	--text: hsl(0, 0%, 0%);
}

.tauri {
	--bg: linear-gradient(
		90deg,
		hsl(186, 72%, 50%) 0%,
		hsl(42, 100%, 60%) 100%
	);
	--text: hsl(0, 0%, 0%);
}

.tailwindcss {
	--bg: hsl(196, 100%, 50%);
	--text: hsl(0, 0%, 100%);
}

.ffmpeg {
	--bg: hsl(120, 39%, 54%);
	--text: hsl(0, 0%, 100%);
}

.postgresql {
	--bg: hsl(207, 48%, 38%);
	--text: hsl(0, 0%, 100%);
}

.telegram {
	--bg: hsl(200, 74%, 51%);
	--text: hsl(0, 0%, 100%);
}

.plyr\.io {
	--bg: hsl(198, 100%, 50%);
	--text: hsl(0, 0%, 0%);
}

.javascript {
	--bg: hsl(52, 84%, 64%);
	--text: hsl(80, 3%, 22%);
}

.sqlite {
	--bg: hsl(204, 86%, 43%);
	--text: hsl(0, 0%, 100%);
}
</style>

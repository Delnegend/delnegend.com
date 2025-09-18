<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

enum BadgeVariant {
	Default = 'default',
	Secondary = 'secondary',
	Destructive = 'destructive',
	OutlineSolid = 'outline-solid'
}

const props = withDefaults(
	defineProps<{
		class?: HTMLAttributes['class']
		variant?: BadgeVariant
		href?: string
	}>(),
	{
		class: '',
		variant: BadgeVariant.Default
	}
)

const classes = cn(
	'focus:ring-ring inline-flex items-center border border-dashed px-2.5 py-0.5 text-base font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden',
	{
		[BadgeVariant.Default]:
			'bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm border-transparent',
		[BadgeVariant.Secondary]:
			'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
		[BadgeVariant.Destructive]:
			'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent shadow-sm',
		[BadgeVariant.OutlineSolid]:
			'hover:border-solid hover:text-(--text) hover:[background:var(--bg)]'
	}[props.variant],
	props.class
)
</script>

<template>
	<a v-if="!!props.href" :href="props.href" target="_blank" :class="classes">
		<slot />
	</a>
	<div :class="classes" v-else>
		<slot />
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

.pwa {
	--bg: linear-gradient(
		90deg,
		hsl(0, 0%, 24%) 0%,
		hsl(264, 86%, 42%) 35%,
		hsl(264, 86%, 42%) 65%,
		hsl(0, 0%, 24%) 100%
	);
	--text: hsl(0, 0%, 100%);
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

.payload-cms {
	--bg: hsl(0, 0%, 0%);
	--text: hsl(0, 0%, 100%);
}

.podman {
	--bg: hsl(217, 63%, 47%);
	--text: hsl(0, 0%, 100%);
}

.docker {
	--bg: hsl(220, 85%, 52%);
	--text: hsl(0, 0%, 100%);
}

.html {
	--bg: hsl(19, 88%, 54%);
	--text: hsl(0, 0%, 100%);
}
.css {
	--bg: hsl(222, 88%, 55%);
	--text: hsl(0, 0%, 100%);
}
.shadcn-ui {
	--bg: hsl(0, 0%, 4%);
	--text: hsl(0, 0%, 98%);
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
	syntax: '<angle>';
	initial-value: 0deg;
	inherits: false;
}
</style>

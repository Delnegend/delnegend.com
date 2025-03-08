<script lang="ts" setup>
import { ExternalLink } from "lucide-vue-next";

import { cn } from "~/utils/utils";

import Badge from "./ui/Badge.vue";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const props = withDefaults(defineProps<{
	title: string;
	description: string;
	url?: string;
	class?: string;
	badges?: string[];
}>(), {
	url: undefined,
	class: undefined,
	badges: () => [] as string[],
});
</script>

<template>
	<Card :class="cn('bg-transparent', props.class)">
		<CardHeader>
			<CardTitle>
				<a
					v-if="props.url"
					class="inline-flex items-center gap-1 no-underline"
					:href="props.url"
					target="_blank">
					{{ props.title }}
					<ExternalLink :size="14" />
				</a>
				<span v-else>{{ props.title }}</span>
			</CardTitle>
			<!-- eslint-disable-next-line vue/no-v-html, vue/no-v-text-v-html-on-component -->
			<CardDescription>{{ props.description }}</CardDescription>
		</CardHeader>
		<CardFooter
			v-if="props.badges.length"
			class="flex flex-wrap gap-2">
			<Badge
				v-for="badge in props.badges"
				:key="badge"
				variant="outline"
				:class="cn('transition-colors', 'hover:[background:var(--bg)] hover:text-[--text] text-muted-foreground', badge)">
				{{ badge }}
			</Badge>
		</CardFooter>
	</Card>
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
	--bg: linear-gradient(90deg, hsl(186, 72%, 50%) 0%, hsl(42, 100%, 60%) 100%);
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

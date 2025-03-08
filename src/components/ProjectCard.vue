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
			<CardDescription v-html="props.description" />
		</CardHeader>
		<CardFooter
			v-if="props.badges.length"
			class="flex flex-wrap gap-2">
			<Badge
				v-for="badge in props.badges"
				:key="badge"
				variant="outline"
				:class="cn({
					'bg-[hsl(344_67%_39%)] text-white': badge === 'rust',
					'bg-[hsl(199_97%_73%)] text-[hsl(199_97%_20%)]': badge === 'go',
					'bg-[hsl(211_60%_48%)] text-white': badge === 'typescript',
					'bg-[hsl(153_47%_49%)] text-white': badge === 'vue',
					'bg-[hsl(155_100%_43%)] text-[hsl(222_47%_11%)]': badge === 'nuxt',
					'bg-[hsl(0_100%_31%)] text-white': badge === 'wails',
					'bg-[hsl(207_51%_41%)] text-white': badge === 'python',
					'bg-[hsl(28_92%_54%)] text-black': badge === 'cloudflare',
					'bg-[hsl(227_58%_65%)] text-white': badge === 'discord',
					'bg-[hsl(248_84%_63%)] text-white': badge === 'wasm',
					'bg-[hsl(191_65%_60%)] text-[#404756]': badge === 'react',
					'tauri text-[#000000b0]': badge === 'tauri',
					'bg-[#00bcff] text-[#000000b0]': badge === 'tailwindcss',
					'bg-[hsl(120_39%_54%)] text-white': badge === 'ffmpeg',
				})">
				{{ badge }}
			</Badge>
		</CardFooter>
	</Card>
</template>

<style scoped>
.tauri {
	background: hsl(186, 72%, 50%);
	background: linear-gradient(90deg, hsl(186, 72%, 50%) 0%, hsl(42, 100%, 60%) 100%);
}
</style>

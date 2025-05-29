<script lang="ts" setup>
import { ExternalLink, Info } from "lucide-vue-next";
import { ref } from "vue";
import { cn, type Project } from "~/utils/utils";
import Badge from "./ui/Badge.vue";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const props = withDefaults(defineProps<{
	project: Project;
	class?: string;
}>(), {
	url: undefined,
	class: undefined,
});

const openState = ref(false);

</script>

<template>
	<HoverCard
		v-model:open="openState"
		:open-delay="0"
		:close-delay="0">
		<HoverCardTrigger>
			<Card :class="cn('bg-transparent h-full', props.class)">
				<CardHeader>
					<CardTitle class="text-xl font-normal gap-x-4 flex justify-between items-center">
						<a
							v-if="props.project.url"
							class="no-underline"
							:href="props.project.url"
							target="_blank">
							{{ props.project.title }}
							<ExternalLink
								:size="14"
								class="inline-block ml-1" />
						</a>
						<span v-else>{{ props.project.title }}</span>
						<button
							aria-label="Toggle project info"
							class="text-muted-foreground transition-colors hover:text-primary"
							@click="openState = !openState">
							<Info />
						</button>
					</CardTitle>
					<CardDescription class="text-balance">
						{{ props.project.summary }}
					</CardDescription>
				</CardHeader>
			</Card>
		</HoverCardTrigger>

		<HoverCardContent
			:side-offset="12"
			class="text-balance max-w-96 w-full font-extralight text-secondary-foreground leading-7 flex flex-col gap-3">
			<div>
				{{ props.project.description }}
			</div>
			<ul
				v-if="props.project.details"
				class="space-y-2">
				<li
					v-for="detail in props.project.details"
					:key="detail"
					class="list-disc ml-4">
					{{ detail }}
				</li>
			</ul>
			<div
				v-if="props.project.badges.length"
				class="flex flex-wrap gap-2">
				<Badge
					v-for="badge in props.project.badges"
					:key="badge"
					variant="outline"
					:class="cn('transition-colors', 'hover:[background:var(--bg)] hover:text-[--text] text-muted-foreground', badge)">
					{{ badge }}
				</Badge>
			</div>
		</HoverCardContent>
	</HoverCard>
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

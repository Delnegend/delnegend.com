<script lang="ts" setup>
import { ref } from 'vue'
import type { Project } from '~/data/projects'
import { cn } from '~/lib/utils'
import Badge from './Badge.vue'
import ExtLink from './ExtLink.vue'

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
		:class="
			cn(
				'text-secondary-foreground flex flex-col gap-3 font-extralight',
				props.class
			)
		"
	>
		<div
			class="flex items-center justify-between gap-x-4 text-xl font-normal"
		>
			<ExtLink
				v-if="props.project.repo"
				class="no-underline"
				:href="props.project.repo"
				target="_blank"
			>
				{{ props.title }}
			</ExtLink>
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
				:class="cn('text-muted-foreground', badge)"
			>
				{{ badge }}
			</Badge>
		</div>
	</div>
</template>

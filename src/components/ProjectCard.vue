<script lang="ts" setup>
import Badge from './Badge.vue'
import ExtLink from './ExtLink.vue'
import { ref } from 'vue'
import type { ProjectBadge } from '~/data/projectBadges'
import type { Project } from '~/data/projects'
import { cn } from '~/lib/utils'

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
</script>

<template>
	<div
		:class="
			cn(
				'text-secondary-foreground flex flex-col gap-3 font-extralight text-balance',
				props.class
			)
		"
	>
		<ExtLink
			v-if="props.project.repo"
			:href="props.project.repo"
			target="_blank"
			class="!text-2xl"
		>
			{{ props.title }}
		</ExtLink>
		<span v-else>{{ props.title }}</span>

		<p class="!text-lg">
			{{ props.project.description }}
		</p>

		<div v-if="props.project.badges.length" class="flex flex-wrap gap-2">
			<Badge
				:badge="badge as ProjectBadge"
				v-for="badge in props.project.badges"
				:key="badge"
				variant="outline-solid"
				:class="cn('text-muted-foreground', badge)"
			/>
		</div>
	</div>
</template>

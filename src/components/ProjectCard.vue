<script lang="ts" setup>
import type { Project } from '~/data/projects'

import { badgeLinks, ProjectBadge } from '~/data/project-badges'
import { cn } from '~/lib/utils'

import { BadgeVariant } from './Badge'
import Badge from './Badge/Badge.vue'
import ExtLink from './ExtLink.vue'

const props = withDefaults(
	defineProps<{
		title: string
		project: Project
		class?: string
	}>(),
	{
		class: '',
		url: null
	}
)
</script>

<template>
	<div
		:class="
			cn('flex flex-col gap-3 font-extralight text-balance text-secondary-foreground', props.class)
		"
	>
		<ExtLink v-if="props.project.repo" :href="props.project.repo" target="_blank" class="text-2xl">
			{{ props.title }}
		</ExtLink>
		<span class="text-2xl" v-else>{{ props.title }}</span>

		<p class="text-lg">
			{{ props.project.description }}
		</p>

		<div class="flex flex-wrap gap-1">
			<Badge v-if="typeof props.project.status === 'string'" :variant="BadgeVariant.OutlineSolid">
				{{ props.project.status }}
			</Badge>
			<Badge
				v-if="Array.isArray(props.project.status)"
				:variant="BadgeVariant.Default"
				v-for="status in props.project.status"
			>
				{{ status }}
			</Badge>

			<Badge
				:href="badgeLinks[badge as ProjectBadge]"
				v-for="badge in props.project.badges"
				:key="badge"
				:variant="BadgeVariant.OutlineSolid"
				:class="cn('text-muted-foreground', badge)"
			>
				{{ badge }}
			</Badge>
		</div>
	</div>
</template>

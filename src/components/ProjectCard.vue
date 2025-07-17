<script lang="ts" setup>
import Badge from './Badge.vue'
import ExtLink from './ExtLink.vue'
import { badgeLinks, type ProjectBadge } from '~/data/projectBadges'
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
		<span class="text-2xl" v-else>{{ props.title }}</span>

		<p class="!text-lg">
			{{ props.project.description }}
		</p>

		<div class="flex flex-wrap gap-1">
			<Badge
				v-if="typeof props.project.status === 'string'"
				variant="default"
			>
				{{ props.project.status }}
			</Badge>
			<Badge
				v-if="Array.isArray(props.project.status)"
				variant="default"
				v-for="status in props.project.status"
			>
				{{ status }}
			</Badge>

			<Badge
				:href="badgeLinks[badge as ProjectBadge]"
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

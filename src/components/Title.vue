<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = defineProps<{
	class?: string
	title: string
	subtitle?: string
}>()
</script>

<template>
	<div :class="cn('text-center', props.class)">
		<h1>{{ props.title }}</h1>
		<span class="text-muted-foreground text-base">
			{{ props.subtitle }}
		</span>
	</div>
</template>

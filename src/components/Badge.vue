<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '~/lib/utils'

const props = withDefaults(
	defineProps<{
		class?: HTMLAttributes['class']
		variant?: 'default' | 'secondary' | 'destructive' | 'outline-solid'
	}>(),
	{
		class: '',
		variant: 'default'
	}
)
</script>

<template>
	<div
		:class="
			cn(
				'focus:ring-ring inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden',
				{
					'bg-primary text-primary-foreground hover:bg-primary/80 border-transparent shadow-sm':
						props.variant === 'default',
					'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent':
						props.variant === 'secondary',
					'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent shadow-sm':
						props.variant === 'destructive',
					'text-foreground': props.variant === 'outline-solid'
				},
				props.class
			)
		"
	>
		<slot />
	</div>
</template>

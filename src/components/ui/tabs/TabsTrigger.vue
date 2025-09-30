<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<
	TabsTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
	<TabsTrigger
		data-slot="tabs-trigger"
		v-bind="forwardedProps"
		:class="
			cn(
				`inline-flex h-[calc(100%-1px)] w-28 flex-1 cursor-pointer items-center justify-center gap-1.5 py-4 text-sm font-medium whitespace-nowrap text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30`,
				props.class
			)
		"
	>
		<slot />
	</TabsTrigger>
</template>

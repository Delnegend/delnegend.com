<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
	AccordionItem,
	type AccordionItemProps,
	useForwardProps
} from 'reka-ui'
import { cn } from '~/lib/utils'

const props = defineProps<
	AccordionItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
	<AccordionItem
		data-slot="accordion-item"
		v-bind="forwardedProps"
		:class="
			cn(
				'border-b-4 border-double underline-offset-4 last:border-b-0',
				props.class
			)
		"
	>
		<slot />
	</AccordionItem>
</template>

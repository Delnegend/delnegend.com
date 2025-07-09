<script setup lang="ts">
import { Transition } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { CircleIcon } from 'lucide-vue-next'
import type { RadioGroupItemProps } from 'reka-ui'
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<
	RadioGroupItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
	<RadioGroupItem
		data-slot="radio-group-item"
		v-bind="forwardedProps"
		:class="
			cn(
				'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 relative aspect-square size-6 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				props.class
			)
		"
	>
		<Transition
			enter-active-class="transition-opacity duration-200"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity duration-200"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<RadioGroupIndicator
				data-slot="radio-group-indicator"
				class="flex items-center justify-center"
			>
				<CircleIcon
					class="fill-primary absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2"
				/>
			</RadioGroupIndicator>
		</Transition>
	</RadioGroupItem>
</template>

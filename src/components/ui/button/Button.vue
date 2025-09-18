<script setup lang="ts">
import { buttonVariants, type ButtonSize, type ButtonVariant } from '.'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
	defineProps<
		PrimitiveProps & {
			variant?: ButtonVariant
			size?: ButtonSize
			class?: HTMLAttributes['class']
		}
	>(),
	{
		as: 'button'
	}
)
</script>

<template>
	<Primitive
		data-slot="button"
		:as="as"
		:as-child="asChild"
		:class="
			buttonVariants({
				classes: props.class,
				variant,
				size
			})
		"
	>
		<slot />
	</Primitive>
</template>

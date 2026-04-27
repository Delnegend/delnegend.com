<script setup lang="ts">
import type { ClassValue, HTMLAttributes } from 'vue'

import { Primitive, type PrimitiveProps } from 'reka-ui'

import { type ButtonSize, type ButtonVariant, buttonVariants } from '.'

const props = withDefaults(
	defineProps<
		PrimitiveProps & {
			variant?: ButtonVariant
			size?: ButtonSize
			class?: ClassValue
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

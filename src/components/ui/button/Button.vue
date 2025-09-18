<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { buttonVariants, type ButtonSize, type ButtonVariant } from '.';

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

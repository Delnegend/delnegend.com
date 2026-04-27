<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { TabsContent, type TabsContentProps } from 'reka-ui'

import { cn } from '~/lib/utils'

// oxlint-disable-next-line eslint-plugin-vue(define-props-destructuring), oxc(no-rest-spread-properties)
const { class: className, ...props } = defineProps<
	TabsContentProps & { class?: HTMLAttributes['class'] }
>()
</script>

<template>
	<TabsContent
		data-slot="tabs-content"
		:class="cn('flex-1 outline-none', className)"
		v-bind="props"
	>
		<slot />
	</TabsContent>
</template>

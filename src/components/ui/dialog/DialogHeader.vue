<script setup lang="ts">
import DialogClose from './DialogClose.vue'
import { X } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<{
	class?: HTMLAttributes['class']
}>()
</script>

<template>
	<div
		data-slot="dialog-header"
		:class="
			cn(
				'items-center flex flex-row gap-2 text-center justify-between',
				props.class
			)
		"
	>
		<slot />
		<DialogClose
			class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-8 cursor-pointer"
		>
			<X />
			<span class="sr-only">Close</span>
		</DialogClose>
	</div>
</template>

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
				'flex flex-row items-center justify-between gap-2 text-center',
				props.class
			)
		"
	>
		<slot />
		<DialogClose
			class="cursor-pointer rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-8"
		>
			<X />
			<span class="sr-only">Close</span>
		</DialogClose>
	</div>
</template>

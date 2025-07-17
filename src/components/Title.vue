<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { cn } from '~/lib/utils'

const props = withDefaults(
	defineProps<{
		class?: string
		title: string
		subtitle?: string
		sticker?: 'arrow' | 'link' | 'question' | 'spark' | 'star'
		flipSecondSticker?: boolean
	}>(),
	{
		flipSecondSticker: true
	}
)

const assetLinks = props.sticker
	? Array.from(
			{ length: 5 },
			(_, i) => `/title-sticker/${props.sticker}-${i + 1}.svg`
		)
	: undefined

const sticker = ref<[string, string] | undefined>(
	assetLinks ? [assetLinks[0], assetLinks[1]] : undefined
)

onBeforeMount(() => {
	if (!assetLinks) return
	let index = 0
	const cycleSticker = () => {
		sticker.value = [
			assetLinks[index],
			assetLinks[(index + 1) % assetLinks.length]
		]
		index = (index + 1) % assetLinks.length
	}
	cycleSticker()
	const interval = setInterval(cycleSticker, 200)
	return () => clearInterval(interval)
})
</script>

<template>
	<div :class="cn('text-center text-balance', props.class)">
		<div
			:class="
				cn(
					'flex items-center justify-center gap-2',
					props.sticker === 'spark' ? 'gap-0' : 'gap-2'
				)
			"
		>
			<img
				v-if="sticker"
				:src="sticker[0]"
				:class="
					cn(
						'h-20 overflow-hidden object-contain',
						props.sticker === 'spark' ? 'w-10' : 'w-16'
					)
				"
			/>
			<h1 class="leading-10">{{ props.title }}</h1>
			<img
				v-if="sticker"
				:src="sticker[1]"
				:class="
					cn(
						'h-20 overflow-hidden object-contain',
						props.sticker === 'spark' ? 'w-10' : 'w-16',
						props.flipSecondSticker && 'scale-x-[-1]'
					)
				"
			/>
		</div>
		<span class="text-muted-foreground mt-3 text-lg">
			{{ props.subtitle }}
		</span>
	</div>
</template>

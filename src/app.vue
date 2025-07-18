<script setup lang="ts">
import { onBeforeMount, provide, ref } from 'vue'

const stickerTicker = ref(1)
provide('stickerTicker', stickerTicker)

onBeforeMount(() => {
	const interval = setInterval(() => {
		stickerTicker.value =
			stickerTicker.value + 1 > 5 ? 1 : stickerTicker.value + 1
	}, 300)
	return () => clearInterval(interval)
})
</script>

<template>
	<NuxtPage />
</template>

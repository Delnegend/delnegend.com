<script setup lang="ts">
import { useHead } from 'nuxt/app'
import ExtLink from '~/components/ExtLink.vue'
import { resumeUrl } from '~/lib/resume'

useHead({
	meta: [
		{
			'http-equiv': 'refresh',
			content: `0; url=${resumeUrl}`
		}
	]
})
</script>

<template>
	<div class="flex min-h-dvh items-center justify-center">
		<div class="text-2xl text-balance">
			If you are not redirected automatically, please click
			<ExtLink :href="resumeUrl" target="_blank" rel="noopener noreferrer"
				>here</ExtLink
			>
			to view my resume.
		</div>
	</div>
</template>

<style scoped>
a {
	font-size: var(--text-2xl);
	font-weight: var(--font-weight-bold);
}
</style>

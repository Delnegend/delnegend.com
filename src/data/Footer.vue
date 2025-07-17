<script setup lang="ts">
import ExtLink from '~/components/ExtLink.vue'
</script>

<template>
	<footer class="text-center text-balance">
		From
		<div class="inline-block align-sub">
			<svg
				width="30"
				height="20"
				viewBox="0 0 30 20"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<rect width="30" height="20" fill="#da251d" />
				<polygon
					points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
					fill="#ff0"
				/>
			</svg>
		</div>
		<span class="text-xl font-bold"> Vietnam </span> with love. Design
		inspired by
		<ExtLink href="https://excalidraw.com/">Excalidraw</ExtLink>
	</footer>
</template>

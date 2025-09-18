<script setup lang="ts">
import { onBeforeMount, provide, ref } from 'vue'
import ExtLink from '~/components/ExtLink.vue'
import Title from '~/components/Title.vue'
import Footer from '~/data/Footer.vue'
import WhatIDo from '~/data/WhatIDo.vue'
import { links } from '~/data/links'

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
	<div
		class="mx-auto my-20 flex w-[85%] max-w-xl flex-col items-start justify-center gap-10"
	>
		<Title title="Me" sticker="arrow" />

		<div class="max-w-3xl flex flex-col gap-5 text-balance">
			<p>
				I'm
				<span class="underline underline-offset-4">Kien</span> ("kee-en"
				or "key-en"),<br />
				or Delnegend as a semi-professional alias.
			</p>
			<p>
				<span class="whitespace-nowrap">
					<ExtLink
						href="https://delnegend.notion.site/Movie-list-cd5e30f30db14ffebf9898d69a823d8c?source=copy_link"
					>
						Watcher</ExtLink
					>,
				</span>
				gamer,
				<span class="whitespace-nowrap">
					<ExtLink :href="links.GitHub.link">programmer</ExtLink>,
				</span>
				home server hobbyist.
			</p>
		</div>

		<!-- <Title title="Profession" sticker="spark" /> -->

		<WhatIDo />

		<!-- <Title title="However" sticker="star" :flip-second-sticker="false" /> -->

		<Title title="Links" sticker="link" />

		<ul class="justify-center w-fit">
			<li v-for="(contact, name) of links" :key="name" class="text-xl">
				<span class="font-medium">{{ name }}:&nbsp;</span>
				<ExtLink
					:href="contact.link"
					target="_blank"
					class="flex items-center gap-2 font-light"
					>{{ contact.value }}
				</ExtLink>
			</li>
		</ul>

		<Footer />
	</div>
</template>

<style>
h1 {
	font-weight: var(--font-weight-black);
	font-size: var(--text-5xl);
}

p {
	font-size: var(--text-xl);
}
</style>

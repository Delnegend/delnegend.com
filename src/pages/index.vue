<script setup lang="ts">
import ExtLink from '~/components/ExtLink.vue'
import Title from '~/components/Title.vue'
import Footer from '~/data/Footer.vue'
import WhatIDo from '~/data/WhatIDo.vue'
import { links } from '~/data/links'
</script>

<template>
	<div
		class="mx-auto my-20 flex w-[90%] max-w-5xl flex-col items-center justify-center gap-20"
	>
		<Title title="Who am I" sticker="arrow" />

		<p class="text-primary text-center text-balance">
			I'm <span class="underline underline-offset-4">Kien</span> ("kee-en"
			or "key-en"),<br />
			or Delnegend as a semi-professional alias.
		</p>

		<Title title="What I do" sticker="spark" />

		<WhatIDo />

		<Title title="However" sticker="star" :flip-second-sticker="false" />

		<div class="max-w-3xl flex flex-col gap-5 text-balance text-center">
			<p>
				I enjoy watching movies, TV series, and anime (<ExtLink
					:href="links.Watchlist.link"
				>
					watchlist</ExtLink
				>) and playing roguelite/roguelike games in my free time.
				Besides programming, I like to tinker with electronics and try
				to fix/refurbish them.
			</p>
			<p>
				If you're interested in requesting my work, contact me either
				through
				<ExtLink :href="links.Discord.link"> Discord </ExtLink>
				(preferably) or
				<ExtLink :href="links.Email.link"> email </ExtLink>.
			</p>
		</div>

		<Title title="Online presence" sticker="link" />

		<ul>
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

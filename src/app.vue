<script setup lang="ts">
import { Button, ButtonVariant } from './components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from './components/ui/dialog'
import { onBeforeMount, provide, ref } from 'vue'
import ExtLink from '~/components/ExtLink.vue'
import Title from '~/components/Title.vue'
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
		class="mx-auto my-20 flex w-[85%] max-w-xl flex-col items-start justify-center gap-14 text-balance"
	>
		<Title title="I'm Kien!" sticker="star" />

		<h2>as a developer,</h2>

		<p>
			I write a ton of open-source software under the Delnegend identity
			on <ExtLink :href="links.GitHub">GitHub</ExtLink>, and these two
			projects are the ones I'm most proud of. Click or tap on these
			cards:
		</p>

		<div
			class="grid w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5"
		>
			<Dialog>
				<DialogTrigger as-child>
					<Button
						:variant="ButtonVariant.Outline"
						class="size-full text-base text-balance whitespace-break-spaces"
					>
						<span>
							<span class="inline-block text-lg">Artefact</span
							><br />
							JPEG artifacts removal
						</span>
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							<ExtLink
								href="https://github.com/Delnegend/artefact"
							>
								Artefact
							</ExtLink>
						</DialogTitle>
					</DialogHeader>
					<ul class="space-y-2">
						<li>
							Remove JPEG compression artifacts using math I can
							barely comprehend.
						</li>
						<li>
							I just re-implemented it in Rust, not only because I
							want to get out of my safe zone, but also to have
							legitimate use for it.
						</li>
						<li>
							I optimized the heck out of it and got double, even
							triple, the performance compared to the original
							one.
						</li>
						<li>
							I also built a webapp on top of it, running entirely
							in the browser, so (1) people don't need to have
							their pictures sent to some random server on the
							internet, and (2) I don't have to pay for a server
							to host it.
						</li>
						<li>
							The core feature of the web app is complete, but
							there are still some rough edges I want to refine.
						</li>
					</ul>
				</DialogContent>
			</Dialog>
			<Dialog>
				<DialogTrigger as-child>
					<Button
						:variant="ButtonVariant.Outline"
						class="size-full text-base text-balance whitespace-break-spaces"
					>
						<span>
							<span class="text-lg">Yomuyume</span><br />
							self-hosted comic server
						</span>
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							<ExtLink
								href="https://github.com/Delnegend/yomuyume"
							>
								Yomuyume
							</ExtLink>
						</DialogTitle>
					</DialogHeader>
					<ul class="space-y-2">
						<li>A blazingly fast self-hosted comic server.</li>
						<li>
							It started as a group project when I was in uni,
							became my Rust-learning playground, and now it's the
							thing I do when I have other, more important things
							to do.
						</li>
						<li>
							Still in a heavily WIP state since I want to pour
							all of my craft into it.
						</li>
					</ul>
				</DialogContent>
			</Dialog>
		</div>

		<h2>as a watcher,</h2>

		<p>
			I watch a lot of movies, series, and anime, most of which are
			popular ones; feel free to check out my
			<ExtLink :href="links.Watchlist">watchlist</ExtLink>.
		</p>

		<h2>as a gamer,</h2>

		<p>
			I used to grind
			<ExtLink href="https://steamdb.info/app/232090/">KF2</ExtLink> like
			crazy. Nowadays, it's
			<ExtLink href="https://steamdb.info/app/632360/"
				>Risk of Rain 2
			</ExtLink>
			and <ExtLink href="https://tetr.io/">tetr.io</ExtLink>.
			<br />
			<br />
			Had a good time with
			<ExtLink href="https://steamdb.info/app/2215430/">
				Ghost of Tsushima </ExtLink
			>, looking forward to having a chance to replay it, and trying out
			other games like
			<ExtLink href="https://steamdb.info/app/1430190/">KF3</ExtLink>,
			<ExtLink href="https://www.playstation.com/games/ghost-of-yotei/">
				Ghost of Yotei
			</ExtLink>
			(when it's available on PC, ofc) and
			<ExtLink href="https://steamdb.info/app/1903340/">
				Clair Obscur</ExtLink
			>.
		</p>

		<div class="flex w-full flex-row flex-wrap justify-center gap-5">
			<ExtLink
				v-for="(href, title) of links"
				:key="title"
				:href="href"
				target="_blank"
				class="flex items-center gap-2 text-xl font-light"
				>{{ title }}
			</ExtLink>
		</div>

		<footer class="text-center text-balance">
			Design inspired by
			<ExtLink href="https://excalidraw.com/">Excalidraw</ExtLink>
		</footer>
	</div>
</template>

<style>
h1 {
	font-size: var(--text-5xl);
	font-weight: var(--font-weight-black);
}

h2 {
	font-size: var(--text-3xl);
	font-weight: var(--font-weight-semibold);
}

p {
	font-size: var(--text-xl);
}

ul {
	list-style-type: disc;
	padding-left: 1.5rem;
}
</style>

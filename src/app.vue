<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";
import { onBeforeMount } from "vue";

import ParticlesBg from "~/components/ParticlesBg.vue";

import GitHub from "./components/icons/GitHub.vue";
import LineShadowText from "./components/LineShadowText.vue";
import ProjectCard from "./components/ProjectCard.vue";
import SparklesText from "./components/SparklesText.vue";
import { Card, CardTitle } from "./components/ui/card";

const maintaining = [{
	title: "Yomuyume",
	description: "Self-hosted comic media server.",
	url: "https://github.com/Liminova/yomuyume",
	badges: ["rust", "typescript", "nuxt", "wasm", "axum", "postgresql", "comicinfo.xml", "jpeg-xl", "blurhash", "pwa", "web-worker", "tailwindcss", "shadcn-ui", "material-ui"],
},
{
	title: "Artefact",
	description: "Artifact-free JPEG image decoder, right in your browser.",
	url: "https://artefact.delnegend.com",
	badges: ["rust", "typescript", "wasm", "nuxt", "web-worker", "pwa", "simd", "jpeg", "png", "tailwindcss", "shadcn-ui"],
},
{
	title: "Charlotte Social",
	description: "A platform for connecting parents with pediatric and fitness trainers to help their children grow taller.",
	url: "https://kiness.vn",
	badges: ["typescript", "react", "tauri", "pwa", "tailwindcss", "shadcn-ui", "react-native", "expo", "nativewind"],
},
{
	title: "gallery-preprocessor-go",
	description: "Small window to drag-and-drop images on to perform a bunch of small tasks on them.",
	url: "https://github.com/Delnegend/gallery-preprocessor-go",
	badges: ["go", "wails", "vue", "tailwindcss", "shadcn-ui"],
},
{
	title: "upptime-embed",
	description: "Alternative upptime frontpage with no rate-limiting.",
	url: "https://github.com/Delnegend/upptime-embed",
	badges: ["go", "typescript", "nuxt", "regex", "tailwindcss", "shadcn-ui"],
},
{
	title: "taxer",
	description: "Discord music bot written in Rust (and for some other things).",
	url: "https://github.com/Liminova/taxer",
	badges: ["rust", "discord", "poise", "yt-dlp"],
},
{
	title: "social-2-telego",
	description: "Desktop app for quickly re-posting social media posts to Telegram.",
	url: "https://github.com/Delnegend/social-2-telego",
	badges: ["go", "wails", "nuxt", "sqlite", "tailwindcss", "shadcn-ui", "telegram", "web-scraping"],
},
{
	title: "cf-ddns",
	description: "Simple Cloudflare DDNS, only using Go's standard library (and another one for formatting the console output).",
	url: "https://github.com/Delnegend/cf-ddns",
	badges: ["go", "cloudflare"],
}];

const archived = [{
	title: "TOWD",
	description: "Tiny-office with Discord. A calendar, kanban board Discord bot + a web app.",
	url: "https://github.com/Delnegend/towd",
	badges: ["go", "typescript", "nuxt", "discord", "discordgo", "sqlite", "icalendar", "tailwindcss", "shadcn-ui"],
},
{
	title: "avtxtr",
	description: "Avatar extractor. Extracts users' avatars from various services.",
	url: "https://github.com/Delnegend/avtxtr",
	badges: ["go", "regex"],
},
{
	title: "ffmpeg-progressbar",
	description: "FFmpeg wrapper with a progress bar.",
	url: "https://github.com/Delnegend/ffmpeg-progressbar",
	badges: ["go", "python", "ffmpeg"],
},
{
	title: "social-2-telegram",
	description: "The (earlier) Python version of social-2-telego.",
	url: "https://github.com/Delnegend/social-2-telegram",
	badges: ["python", "regex", "telegram", "web-scraping", "selenium"],
},
{
	title: "fshare-cli",
	description: "A CLI-based user interface for interacting with fshare.vn.",
	url: "https://github.com/Delnegend/fshare-cli",
	badges: ["python", "fshare", "regex"],
},
{
	title: "KHPlayer",
	description: "My very first \"large\" project. Bootstrapping Plyr.io player without touching any JavaScript, similar ,to how HTMX works.",
	url: "https://github.com/Delnegend/social-2-telegram",
	badges: ["plyr.io", "html", "css", "javascript"],
}];

onBeforeMount(() => {
	// eslint-disable-next-line no-undef
	document.querySelector("html")?.classList.add("dark");
});
</script>

<template>
	<div>
		<ParticlesBg
			class="fixed left-0 top-0 -z-10 h-dvh w-dvw bg-black"
			:quantity="200" />

		<div class="mx-auto my-20 flex w-[90%] max-w-[960px] flex-col">
			<div
				class="bg-transparent text-5xl font-black normal-case text-primary-foreground"
				:style="{
					textShadow: '-1px -1px 0 #ffffff8a, 1px -1px 0 #ffffff8a, -1px 1px 0 #ffffff8a, 1px 1px 0 #ffffff8a',
				}">
				Delnegend
			</div>

			<div class="mb-16 mt-2 text-3xl font-medium">
				Fresher? Software Engineer.
			</div>

			<div class="flex flex-row items-center gap-2 text-2xl font-thin">
				Here's my
				<a
					href="https://delnegend.com/resume.pdf"
					target="_blank"
					class="flex flex-row items-center gap-2 underline">
					<SparklesText
						disabled
						text="resume"
						class="-mx-16 inline-block scale-[0.4]"
						:sparkles-count="10" />
					<ExternalLink
						:size="14"
						class="-mb-1" />
				</a>, hire me pls 🥹
			</div>

			<div class="mt-16 flex flex-col gap-2 text-xl font-thin">
				<div>I build fullstack softwares,</div>
				<div>make desktop, mobile apps,</div>
				<div>
					spread&nbsp;
					<a
						class="font-black text-[hsl(18_100%_48%)]"
						href="https://www.rust-lang.org/"
						target="_blank">
						<img
							src="./assets/ferris-table.webp"
							alt="Ferris the Crab"
							class="mr-[6px] inline h-6 w-auto">
						<LineShadowText
							class="italic underline underline-offset-[6px]"
							shadow-color="hsl(18 100% 45%)">
							Rust
						</LineShadowText>
					</a>,&nbsp;<a
						class="font-black text-[hsl(192_100%_41%)]"
						href="https://go.dev/"
						target="_blank">
						<img
							src="./assets/gopher-dancing.webp"
							alt="Gopher dancing"
							class="inline h-6 w-auto">
						<LineShadowText
							class="italic underline underline-offset-[6px]"
							shadow-color="hsl(192 100% 38%)">
							Go
						</LineShadowText>
					</a>
					&nbsp;propagandas.
				</div>
			</div>

			<div class="mb-4 mt-20 text-2xl font-thin">
				Contacts
			</div>
			<div>
				<div>
					Email: <a
						href="mailto:kien@delnegend.com"
						target="_blank">kien@delnegend.com</a>
				</div>
				<div>
					GitHub: <a
						href="https://github.com/Delnegend"
						target="_blank">Delnegend</a>
				</div>
			</div>

			<div class="mb-4 mt-20 text-2xl font-thin">
				Working on and/or maintaining
			</div>

			<div
				class="grid gap-3"
				:style="{
					gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
				}">
				<ProjectCard
					v-for="project in maintaining"
					:key="project.title"
					:title="project.title"
					:description="project.description"
					:url="project.url"
					:badges="project.badges" />
			</div>

			<div class="mb-4 mt-20 text-2xl font-thin">
				Past notable projects
			</div>

			<div
				class="grid gap-3"
				:style="{
					gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
				}">
				<ProjectCard
					v-for="project in archived"
					:key="project.title"
					:title="project.title"
					:description="project.description"
					:url="project.url"
					:badges="project.badges" />
				<Card class="col-span-3">
					<CardTitle class="flex items-center justify-center px-5 py-4 text-xl font-thin">
						And many more on my
						&nbsp;<a
							class="inline-flex items-center gap-1 font-normal no-underline"
							href="https://github.com/Delnegend"
							target="_blank">
							<GitHub class="inline" />
							GitHub
							<ExternalLink :size="16" />
						</a>
					</CardTitle>
				</Card>
			</div>
		</div>
	</div>
</template>

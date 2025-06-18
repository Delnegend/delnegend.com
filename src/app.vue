<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";
import { onBeforeMount } from "vue";

import ParticlesBg from "~/components/ParticlesBg.vue";

import ExtLink from "./components/ExtLink.vue";
import GitHub from "./components/icons/GitHub.vue";
import LineShadowText from "./components/LineShadowText.vue";
import ProjectCard from "./components/ProjectCard.vue";
import RegularTitle from "./components/RegularTitle.vue";
import SparklesText from "./components/SparklesText.vue";
import { Card, CardTitle } from "./components/ui/card";
import type { Project } from "./utils/utils";

const contacts = [
	["Email", "kien@delnegend.com", "mailto:kien@delnegend.com"],
	["GitHub", "github.com/Delnegend", "https://github.com/Delnegend"],
	["Discord", "@delnegend", "https://discordapp.com/users/577800591724642304"],
];

const maintaining: Project[] = [{
	title: "Yomuyume",
	summary: "Self-hosted comic media server.",
	description: "High-performance, self-hosted comic/manga media server.",
	details: [
		"Simple, no CMS, manage all your comics inside your file explorer.",
		"Multi-user accounts",
		"Per-user progress tracking",
		"role-based access control (admin, user)",
		"invitation system",
		"comprehensive metadata tagging/categorization",
		"Indexed search",
		"Mobile-friendly UI",
		"Comic file format? Handles whatever 7-Zip can handle",
		"And more...",
	],
	url: "https://github.com/Liminova/yomuyume",
	badges: ["rust", "typescript", "nuxt", "wasm", "axum", "postgresql", "tantivy", "comicinfo.xml", "jpeg-xl", "blurhash", "pwa", "web-worker", "tailwindcss", "shadcn-ui", "material-ui"],
},
{
	title: "Artefact",
	summary: "Artifact-free JPEG decoder.",
	description: "A JPEG decoder (re)written in Rust, aimed to remove compression artifacts using a shit ton of maths.",
	details: [
		"3x faster than the original C version.",
		"Have a webapp version, runs entirely in your browser, don't need to download an app or send your images anywhere.",
		"Output WebP, PNG, TIFF, BMP losslessly.",
	],
	url: "https://artefact.delnegend.com",
	badges: ["rust", "typescript", "wasm", "nuxt", "web-worker", "pwa", "simd", "jpeg", "png", "tailwindcss", "shadcn-ui"],
},
{
	title: "Kiness Social/Admin",
	summary: "Social media + user management platform.",
	description: "A dual-application platform connecting parents with pediatric and fitness trainers, built as a freelance project. Features a social app for parents (scheduling, messaging, following trainers) and a comprehensive admin app for trainers/doctors (managing clients, schedules, accounts).",
	details: [
		"Parent App Features: Follow trainers/doctors, view schedules, request rescheduling, send/receive messages.",
		"Admin App Features: Manage student/client profiles, manage parent accounts, schedule management, communication tools.",
		"Wrote all business logic for user interactions, scheduling, and management from scratch.",
	],
	url: "https://kiness.vn",
	badges: ["typescript", "react", "tauri", "pwa", "tailwindcss", "shadcn-ui", "react-native", "expo", "nativewind"],
},
{
	title: "Update",
	summary: "Apps update checker.",
	description: "A simple CLI to check for updates for apps with no auto-update on Windows, scrapes official sources and checks files' metadata to find newer versions and provides working direct download links (if available).",
	details: [
		"Scrapes websites, checks `.exe` file version resources, uses `--version` CLI argument where applicable.",
		"Motivation: Automate the tedious process of manually checking for updates for various CLI tools and other applications.",
	],
	url: "https://github.com/Delnegend/update",
	badges: ["go", "regex"],
},
{
	title: "Differ",
	summary: "Inter-frame compression for images.",
	description: "A CLI tool designed to save storage space for artwork packs by extracting the differences between images. It's similar to inter-frame compression in video codecs, but pixel-by-pixel rather than regions.",
	details: [
		"Outputs transparent PNGs that contain only the differences between itself and the image before.",
		"Can also be used to reconstruct original images, or you can just overlay the diff image over the base one using any photo editor.",
	],
	url: "https://github.com/Delnegend/differ",
	badges: ["go"],
},
{
	title: "gallery-preprocessor-go",
	summary: "Drag-and-drop batch processing tool.",
	description: "A desktop app for me to drag-and-drop images onto to perform a bunch of small tasks on them.",
	details: [
		"Converts PNG/JPG to JPEG XL/AVIF",
		"Runs the Artefact decoder on JPEGs",
		"Runs the Differ tool on PNG sequences",
		"And more if I feel like it.",
	],
	url: "https://github.com/Delnegend/gallery-preprocessor-go",
	badges: ["go", "wails", "vue", "tailwindcss", "shadcn-ui"],
},
{
	title: "upptime-embed",
	summary: "Upptime status page for embed.",
	description: "An alternative, modern frontend for Upptime (a GitHub Actions-powered status page system), built purely to avoid GitHub API rate limits by scraping the status info from the generated README file.",
	url: "https://github.com/Delnegend/upptime-embed",
	badges: ["go", "typescript", "nuxt", "regex", "tailwindcss", "shadcn-ui"],
},
{
	title: "taxer",
	summary: "Discord music bot.",
	description: "A Discord music bot written in Rust using yt-dlp under the hood.",
	url: "https://github.com/Liminova/taxer",
	badges: ["rust", "discord", "poise", "yt-dlp"],
},
{
	title: "social-2-telego",
	summary: "Repost social media posts to Telegram.",
	description: "A desktop app for me to drag-and-drop links onto to forward them to my Telegram channel.",
	details: [
		"Supports Twitter/X, FurAffinity (Bluesky planned).",
		"Web scraping + regex.",
	],
	url: "https://github.com/Delnegend/social-2-telego",
	badges: ["go", "wails", "nuxt", "sqlite", "tailwindcss", "shadcn-ui", "telegram"],
}];

const archived: Project[] = [{
	title: "cf-ddns",
	summary: "Cloudflare DDNS client.",
	description: "A lightweight Cloudflare DDNS client.",
	details: [
		"Looking up the DNS records to get the current public IP",
		"Querying cloudflare.com/cdn-cgi/trace to get the actual public IP",
		"Sends a request to Cloudflare API to update the DNS record if they're different.",
	],
	url: "https://github.com/Delnegend/cf-ddns",
	badges: ["go", "cloudflare"],
},
{
	title: "TOWD",
	summary: "Tiny office with Discord.",
	description: "A calendar and Kanban board Discord bot, because that's the only thing I could come up with when deciding on my graduation project.",
	details: [
		"Freely import/export calendars in iCalendar format.",
		"Included a webapp for easier interaction.",
	],
	url: "https://github.com/Delnegend/towd",
	badges: ["go", "typescript", "nuxt", "discord", "discordgo", "sqlite", "icalendar", "tailwindcss", "shadcn-ui"],
},
{
	title: "avtxtr",
	summary: "Extracts user avatar images from social media.",
	description: "A web API server fetches user avatar images from social media.",
	details: [
		"Supports Facebook, Instagram, DeviantArt, FurAffinity, Gravatar, Reddit, Telegram, Twitter/X, YouTube.",
	],
	url: "https://github.com/Delnegend/avtxtr",
	badges: ["go", "regex"],
},
{
	title: "ffmpeg-progressbar",
	summary: "FFmpeg CLI wrapper with a progress bar.",
	description: "FFmpeg CLI wrapper that renders a progress bar and estimated time remaining in the terminal.",
	url: "https://github.com/Delnegend/ffmpeg-progressbar",
	badges: ["go", "python", "ffmpeg"],
},
{
	title: "social-2-telegram",
	summary: "Same as social-2-telego, but in Python.",
	description: "The original Python implementation of the social-2-telego. Uses Selenium for scraping, then calls Telegram Bot API directly.",
	details: [
		"Rewrote in Go because it was slow and I need a GUI.",
	],
	url: "https://github.com/Delnegend/social-2-telegram",
	badges: ["python", "regex", "telegram", "web-scraping", "selenium"],
},
{
	title: "fshare-cli",
	summary: "CLI CRUD app for fshare.vn.",
	description: "CLI app for interacting with the file-hosting service fshare.vn. It utilizes the official Fshare API to allow users to perform various file and account management operations directly from the terminal, including login, listing files/folders, and downloading.",
	url: "https://github.com/Delnegend/fshare-cli",
	badges: ["python", "fshare", "regex"],
},
{
	title: "KHPlayer",
	summary: "Plyr.io video player wrapper without touching JS.",
	description: "A frontend JavaScript library created to make embedding and setting up Plyr.io video players without touching a line of JS. Initializes the player and adds playlist features using declarative HTML attributes.",
	url: "https://github.com/Delnegend/social-2-telegram",
	badges: ["plyr.io", "html", "css", "javascript"],
}];

// eslint-disable-next-line no-undef
onBeforeMount(() => document.querySelector("html")?.classList.add("dark"));
</script>

<template>
	<div>
		<ParticlesBg
			class="fixed left-0 top-0 -z-10 h-dvh w-dvw bg-black"
			:quantity="200" />

		<div class="mx-auto my-20 flex w-[90%] max-w-[960px] flex-col gap-24">
			<div class="flex flex-col gap-2">
				<div
					class="bg-transparent text-5xl font-black normal-case text-primary-foreground"
					:style="{
						textShadow: '-1px -1px 0 #ffffff8a, 1px -1px 0 #ffffff8a, -1px 1px 0 #ffffff8a, 1px 1px 0 #ffffff8a',
					}">
					Delnegend
				</div>
				<div class="flex flex-row flex-wrap gap-1 text-3xl font-medium">
					<span>10% Software Engineering,</span>
					<span>90% Overengineering.</span>
				</div>
			</div>

			<div class="flex flex-col gap-2 text-xl font-thin">
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

			<div class="gap-2 text-2xl font-thin">
				I'm not looking for a full-time job atm, but here's my
				<a
					href="https://delnegend.com/resume.pdf"
					target="_blank"
					class="inline-flex flex-row items-center">
					<SparklesText
						disabled
						text="resume"
						class="inline-block"
						:sparkles-count="5" />
					&nbsp;
					<ExternalLink
						:size="14"
						class="-mb-1" />
				</a> if you need a freelancer.
			</div>

			<div>
				<RegularTitle class="mb-3">
					Working on and/or maintaining
				</RegularTitle>
				<div
					class="grid gap-3"
					:style="{
						gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
					}">
					<ProjectCard
						v-for="project in maintaining"
						:key="project.title"
						:project="project" />
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<RegularTitle>Past notable projects</RegularTitle>
				<div
					class="grid gap-3"
					:style="{
						gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
					}">
					<ProjectCard
						v-for="project in archived"
						:key="project.title"
						:project="project" />
				</div>
				<Card>
					<CardTitle class="px-5 py-4 text-center text-xl font-thin">
						<span>
							And many more on my&nbsp;
						</span>
						<a
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

			<div>
				<div class="mb-4 text-2xl font-thin">
					Contacts
				</div>
				<div>
					<div
						v-for="[where, label, href] in contacts"
						:key="where">
						<span class="font-extralight">{{ where }}:&nbsp;</span>
						<ExtLink
							:href="href"
							target="_blank"
							class="font-medium">
							{{ label }}
						</ExtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

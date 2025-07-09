<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import ExtLink from '~/components/ExtLink.vue'
import LineShadowText from '~/components/LineShadowText.vue'
import ParticlesBg from '~/components/ParticlesBg.vue'
import { Button } from '~/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '~/components/ui/sheet'
import { contacts } from '~/data/contacts'
import { skills } from '~/data/skills'
import { projects, type AvailableProjects } from '~/data/projects'
import ProjectCard from './components/ProjectCard.vue'

const skillRepos = ref<(typeof skills)[number]['repos'] | null>(null)
const sheetOpen = ref(false)

onBeforeMount(() => document.querySelector('html')?.classList.add('dark'))
</script>

<template>
	<div>
		<ParticlesBg
			class="fixed top-0 left-0 -z-10 h-dvh w-dvw bg-black"
			:quantity="200"
		/>

		<div
			class="mx-auto my-20 flex w-[90%] max-w-[960px] flex-col items-center justify-center gap-20"
		>
			<h1>Delnegend</h1>
			<p class="text-center">
				10% Software Engineering, 90% Overengineering,<br />

				a&nbsp;
				<a
					class="font-black text-[hsl(18_100%_48%)]"
					href="https://www.rust-lang.org/"
					target="_blank"
				>
					<img
						src="./assets/ferris-table.webp"
						alt="Ferris the Crab"
						class="mr-[6px] inline h-6 w-auto"
					/>
					<LineShadowText
						class="italic underline underline-offset-[6px]"
						shadow-color="hsl(18 100% 45%)"
					>
						Rustacean
					</LineShadowText>
				</a>
				and a
				<a
					class="font-black text-[hsl(192_100%_41%)]"
					href="https://go.dev/"
					aria-label="Go's website"
					target="_blank"
				>
					<img
						src="./assets/gopher-dancing.webp"
						alt="Gopher dancing"
						class="inline h-6 w-auto"
					/>
					<LineShadowText
						class="italic underline underline-offset-[6px]"
						shadow-color="hsl(192 100% 38%)"
					>
						Gopher
					</LineShadowText> </a
				>.
			</p>

			<Sheet :open="sheetOpen" @update:open="sheetOpen = $event">
				<SheetContent class="overflow-y-auto">
					<div class="my-6 flex flex-col gap-4">
						<ProjectCard
							v-for="repo in skillRepos"
							:key="repo"
							:title="repo"
							:project="projects[repo]"
							class="w-full"
						/>
					</div>
				</SheetContent>
			</Sheet>

			<h1>What I do</h1>
			<div class="flex flex-col items-center gap-10">
				<div class="flex flex-wrap justify-center gap-x-3 gap-y-2">
					<Button
						variant="outline"
						class="text-lg"
						v-for="skill in skills"
						:key="skill.name"
						@click="
							() => {
								skillRepos = skill.repos
								sheetOpen = true
							}
						"
					>
						{{ skill.name }}
					</Button>
				</div>

				<div class="text-muted-foreground text-center text-lg">
					And more if I forgot to mention...
				</div>
			</div>

			<h1>Links</h1>
			<ul>
				<li v-for="contact in contacts" :key="contact.name">
					<span class="font-medium">{{ contact.name }}:&nbsp;</span>
					<ExtLink
						:href="contact.link"
						target="_blank"
						class="flex items-center gap-2 text-sm font-light"
						>{{ contact.value }}
					</ExtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
h1 {
	font-weight: var(--font-weight-black);
	font-size: var(--text-5xl);
}

p,
li,
a {
	font-size: var(--text-xl);
}
</style>

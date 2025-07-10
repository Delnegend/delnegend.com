<script setup lang="ts">
import { CircleQuestionMark } from 'lucide-vue-next'
import { onBeforeMount, ref } from 'vue'
import ExtLink from '~/components/ExtLink.vue'
import LineShadowText from '~/components/LineShadowText.vue'
import ParticlesBg from '~/components/ParticlesBg.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '~/components/ui/accordion'
import { Button } from '~/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { contacts } from '~/data/contacts'
import { projects } from '~/data/projects'
import RustAndGo from '~/data/RustAndGo.vue'
import { skills } from '~/data/skills'

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
			class="mx-auto my-20 flex w-[90%] max-w-[60rem] flex-col items-center justify-center gap-20"
		>
			<h1>Who am I</h1>

			<p class="text-muted-foreground text-center text-balance">
				<span class="text-primary font-semibold"
					>Someone likes to build softwares</span
				><br />
				10% Actual engineering,<br />
				90% Overengineering,<br />
				a&VeryThinSpace;
				<span class="font-black text-[hsl(18_100%_48%)]">
					<img
						src="./assets/ferris-table.webp"
						alt="Ferris the Crab"
						class="mr-[6px] inline h-6 w-auto"
					/>
					<LineShadowText
						class="italic"
						shadow-color="hsl(18 100% 45%)"
					>
						Rustacean
					</LineShadowText>
				</span>
				<span>&ThinSpace;and a&VeryThinSpace;</span>
				<span class="font-black text-[hsl(192_100%_41%)]">
					<img
						src="./assets/gopher-dancing.webp"
						alt="Gopher dancing"
						class="inline h-6 w-auto"
					/>
					<LineShadowText
						class="italic"
						shadow-color="hsl(192 100% 38%)"
					>
						Gopher
					</LineShadowText></span
				>
				&VeryThinSpace;
				<Sheet>
					<SheetTrigger>
						<CircleQuestionMark class="inline cursor-pointer" />
					</SheetTrigger>
					<SheetContent class="overflow-y-auto p-6">
						<RustAndGo />
					</SheetContent>
				</Sheet>
			</p>

			<div class="text-center">
				<h1>Say my name</h1>
				<span class="text-muted-foreground">You're goddamn right</span>
			</div>

			<p class="text-center text-balance">
				<span class="text-muted-foreground">It's </span>
				<span class="font-bold">Kien</span>
				<span class="text-muted-foreground"
					>, Delnegend is an alias, already registered the domain, use
					it for a bunch of important stuffs, can't change to
					something more readable.</span
				>
			</p>

			<Sheet :open="sheetOpen" @update:open="sheetOpen = $event">
				<SheetContent class="flex flex-col gap-4 overflow-y-auto p-6">
					<ProjectCard
						v-for="repo in skillRepos"
						:key="repo"
						:title="repo"
						:project="projects[repo]"
						class="w-full"
					/>
				</SheetContent>
			</Sheet>

			<div class="text-center">
				<h1>What I do</h1>
				<span class="text-muted-foreground">But not limited to</span>
			</div>

			<div class="flex flex-col items-center gap-10">
				<div class="flex flex-wrap justify-center gap-3">
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
			</div>

			<div class="text-center">
				<h1>MAQ</h1>
				<span class="text-muted-foreground text-base">
					Might-be Asked Questions
				</span>
			</div>

			<Accordion type="single" collapsible class="w-full max-w-[40rem]">
				<AccordionItem value="when-start">
					<AccordionTrigger>
						When did you start all of these?
					</AccordionTrigger>
					<AccordionContent>Since 2018.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="education">
					<AccordionTrigger>Education?</AccordionTrigger>
					<AccordionContent>
						Bachelor's degree in Information and Communication
						Technologies (ICT)<br />
						University of Science and Technology of Hanoi, Vietnam,
						2021 - 2024
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="difference-cs-ict">
					<AccordionTrigger>
						Difference between CS and ICT?
					</AccordionTrigger>
					<AccordionContent>
						"Theory will take you only so far" (Ernest Lawrence,
						Oppenheimer film, 2023).<br />

						We focus on the practical use and management of
						computing systems and software in real-world contexts
						instead of the theories.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="what-other-can-do">
					<AccordionTrigger>
						What other things can you do?
					</AccordionTrigger>
					<AccordionContent>
						Photoshop, Premiere Pro as a hobbyist; tinkering with
						electronics and fixing them.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="early-internet">
					<AccordionTrigger>
						Earliest memory of the internet?
					</AccordionTrigger>
					<AccordionContent
						>Windows 98, Yahoo Messenger.</AccordionContent
					>
				</AccordionItem>
				<AccordionItem value="gaming">
					<AccordionTrigger>Gaming?</AccordionTrigger>
					<AccordionContent>
						All-time favorites (chronological): Plants vs Zombies,
						Bejeweled 3, Minecraft, Killing Floor 2, Left 4 Dead 2,
						Bloon TD 6, Risk of Rain 2.
					</AccordionContent>
				</AccordionItem>
			</Accordion>

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

<script setup lang="ts">
import { CircleQuestionMark } from 'lucide-vue-next'
import { ref } from 'vue'
import ExtLink from '~/components/ExtLink.vue'
import LineShadowText from '~/components/LineShadowText.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import Title from '~/components/Title.vue'
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
import Badge from '~/components/Badge.vue'
import { projectBadges } from '~/data/projectBadges'
import { cn } from '~/lib/utils'
import { Box } from 'lucide-vue-next'

const skillRepos = ref<(typeof skills)[number]['repos'] | null>(null)
const sheetOpen = ref(false)

const resumeUrl = 'https://drive.google.com/file/d/CHANGE_ME/view?usp=sharing'
</script>

<template>
	<div>
		<!-- <ParticlesBg
			class="fixed top-0 left-0 -z-10 h-dvh w-dvw bg-black"
			:quantity="200"
		/> -->

		<div
			class="mx-auto my-20 flex w-[90%] max-w-5xl flex-col items-center justify-center gap-20"
		>
			<Title title="Who am I" />

			<p class="text-primary text-center text-balance">
				I'm <b>Kien</b>, a software engineer,<br />
				<!-- <span class="font-black text-[hsl(18_100%_48%)]">
					<img
						src="~/assets/ferris-table.webp"
						alt="Ferris the Crab"
						class="mr-[6px] inline h-6 w-auto"
					/>
					<LineShadowText
						class="italic"
						shadow-color="hsl(18 100% 60%)"
					>
						Rustacean
					</LineShadowText>
				</span>
				<span>&ThinSpace;and &VeryThinSpace;</span>
				<span class="font-black text-[hsl(192_100%_41%)]">
					<img
						src="~/assets/gopher-dancing.webp"
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
					<SheetTrigger aria-label="What is Rust and Go?">
						<CircleQuestionMark
							class="inline cursor-pointer align-text-bottom"
						/>
					</SheetTrigger>
					<SheetContent class="overflow-y-auto p-6">
						<RustAndGo />
					</SheetContent>
				</Sheet> -->
				I draw <Box class="inline align-text-bottom" /> boxes in free
				time.
			</p>

			<Sheet :open="sheetOpen" @update:open="sheetOpen = $event">
				<SheetContent class="flex flex-col gap-4 overflow-y-auto p-6">
					<ProjectCard
						v-for="(repo, i) in skillRepos"
						:key="repo"
						:title="repo"
						:project="projects[repo]"
						:class="
							cn(
								'w-full border-double',
								i !== (skillRepos?.length ?? 0) - 1 &&
									'border-b-4 pb-4'
							)
						"
					/>
				</SheetContent>
			</Sheet>

			<Title title="What I do" subtitle="But not limited to" />

			<div
				class="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4"
			>
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

			<Title
				title="A bunch of badges"
				subtitle="Technologies, frameworks, tools, etc."
			/>
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Badge
					v-for="badge in projectBadges"
					:key="badge"
					:class="badge"
					variant="outline-solid"
				>
					{{ badge }}
				</Badge>
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
						ICT focus on the practical use and management of
						computing systems and software in real-world scenarios,
						instead of the theories like CS.
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
				<AccordionItem value="games">
					<AccordionTrigger>Do you play games?</AccordionTrigger>
					<AccordionContent>Roguelikes, roguelites.</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Title title="Links" subtitle="Contact me" />

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

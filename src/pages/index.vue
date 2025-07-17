<script setup lang="ts">
import { Box } from 'lucide-vue-next'
import { ref } from 'vue'
import Badge from '~/components/Badge.vue'
import ExtLink from '~/components/ExtLink.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import Title from '~/components/Title.vue'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '~/components/ui/accordion'
import { Button } from '~/components/ui/button'
import { Sheet, SheetContent, SheetTitle } from '~/components/ui/sheet'
import { contacts } from '~/data/contacts'
import Footer from '~/data/Footer.vue'
import { projectBadges } from '~/data/projectBadges'
import { projects } from '~/data/projects'
import { skills } from '~/data/skills'
import { cn } from '~/lib/utils'

const selectedSkill = ref('')
const skillRepos = ref<(typeof skills)[number]['repos'] | null>(null)
const sheetOpen = ref(false)
</script>

<template>
	<div
		class="mx-auto my-20 flex w-[90%] max-w-5xl flex-col items-center justify-center gap-20"
	>
		<Title title="Who am I" sticker="arrow" />

		<p class="text-primary text-center text-balance">
			I'm <b>Kien</b>, a software engineer,<br />
			I draw <Box class="inline align-text-bottom" /> boxes in free time.
		</p>

		<Sheet :open="sheetOpen" @update:open="sheetOpen = $event">
			<SheetContent
				class="flex flex-col gap-12 overflow-y-auto p-6"
				aria-describedby="Projects related to the selected skill"
			>
				<SheetTitle class="font-bold text-balance">
					Projects related to {{ selectedSkill }}
				</SheetTitle>
				<ProjectCard
					v-for="(repo, i) in skillRepos"
					:key="repo"
					:title="repo"
					:project="projects[repo]"
					class="w-full"
				/>
			</SheetContent>
		</Sheet>

		<Title
			title="What I do"
			subtitle="But not limited to"
			sticker="spark"
		/>

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
						selectedSkill = skill.name
						skillRepos = skill.repos
						sheetOpen = true
					}
				"
			>
				{{ skill.name }}
			</Button>
		</div>

		<Title
			title="Badges"
			subtitle="Technologies, frameworks, tools, etc. I have experience with"
			sticker="star"
			:flip-second-sticker="false"
		/>
		<div class="flex flex-wrap items-center justify-center gap-2">
			<Badge
				:badge="badge"
				v-for="badge in projectBadges"
				:key="badge"
				:class="badge"
				variant="outline-solid"
			/>
		</div>

		<Title
			title="MAQ"
			subtitle="Might-be Asked Questions"
			sticker="question"
			:flip-second-sticker="false"
		/>

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
					University of Science and Technology of Hanoi, Vietnam, 2021
					- 2024
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="difference-cs-ict">
				<AccordionTrigger>
					Difference between CS and ICT?
				</AccordionTrigger>
				<AccordionContent>
					ICT focus on the practical use and management of computing
					systems and software in real-world scenarios, instead of the
					theories like CS.
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

		<Title title="Links" subtitle="Contact me" sticker="link" />

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

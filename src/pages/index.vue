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
import Footer from '~/data/Footer.vue'
import { contacts } from '~/data/contacts'
import { badgeLinks, projectBadges } from '~/data/projectBadges'
import { projects } from '~/data/projects'
import { skills } from '~/data/skills'

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
				v-for="badge in projectBadges"
				:href="badgeLinks[badge]"
				:key="badge"
				:class="badge"
				variant="outline-solid"
			>
				{{ badge }}
			</Badge>
		</div>

		<Title
			title="MAQ"
			subtitle="Might-be Asked Questions"
			sticker="question"
			:flip-second-sticker="false"
		/>

		<Accordion type="single" collapsible class="w-full max-w-[40rem]">
			<AccordionItem value="when-start">
				<AccordionTrigger> Since when? </AccordionTrigger>
				<AccordionContent>Since 2018.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="education">
				<AccordionTrigger>Education?</AccordionTrigger>
				<AccordionContent>
					Bachelor's degree in Information and Communication
					Technologies,<br />
					University of Science and Technology of Hanoi, Vietnam, 2021
					- 2024
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="freelance">
				<AccordionTrigger
					>Take commissions, seeking for a j*b?</AccordionTrigger
				>
				<AccordionContent>No, I'm e*ployed.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="game-genre">
				<AccordionTrigger>Game genres?</AccordionTrigger>
				<AccordionContent>Roguelike/roguelite.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="other-industries">
				<AccordionTrigger
					>Interested in other industries?</AccordionTrigger
				>
				<AccordionContent>Creative.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="ai-opinion">
				<AccordionTrigger>AI/ML opinion?</AccordionTrigger>
				<AccordionContent>
					<ExtLink
						href="https://youtu.be/P_fHJIYENdI?si=kQqEZj3EjjHrXmMb"
						target="_blank"
					>
						As a productivity-boosting/researching tool
					</ExtLink>
					? Yes.<br />
					For spamming meaningless content? GTFO.<br />
				</AccordionContent>
			</AccordionItem>
		</Accordion>

		<Title title="Links" subtitle="Contact me" sticker="link" />

		<ul>
			<li v-for="contact in contacts" :key="contact.name" class="text-xl">
				<span class="font-medium">{{ contact.name }}:&nbsp;</span>
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

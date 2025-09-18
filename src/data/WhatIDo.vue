<script setup lang="ts">
import { links } from './links'
import { projects } from './projects'
import { skills } from './skills'
import { X } from 'lucide-vue-next'
import { inject, ref } from 'vue'
import ExtLink from '~/components/ExtLink.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import Rectangle1 from '~/components/stickers/Rectangle1.vue'
import Rectangle2 from '~/components/stickers/Rectangle2.vue'
import Rectangle3 from '~/components/stickers/Rectangle3.vue'
import Rectangle4 from '~/components/stickers/Rectangle4.vue'
import Rectangle5 from '~/components/stickers/Rectangle5.vue'
import { Button, ButtonSize, ButtonVariant } from '~/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '~/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { cn } from '~/lib/utils'

const dialogOpen = ref(false)
const selectedSkill = ref<(typeof skills)[number] | null>(null)
const viewingVersion = ref<'short' | 'long'>('short')

const ticker = inject('stickerTicker', ref(1))
const Rectangles = [Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5]
</script>

<template>
	<div class="text-balance">
		<Dialog :open="dialogOpen" @update:open="dialogOpen = $event">
			<DialogContent class="max-h-[90dvh] overflow-y-auto gap-12">
				<DialogHeader
					class="flex justify-between items-center flex-row"
				>
					<DialogTitle class="text-left">
						Projects related to {{ selectedSkill?.name }}
					</DialogTitle>

					<DialogClose
						class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-10"
					>
						<X />
						<span class="sr-only">Close</span>
					</DialogClose>
				</DialogHeader>

				<ProjectCard
					v-if="!!selectedSkill?.repos.length"
					v-for="(repo, i) in selectedSkill?.repos"
					:key="repo"
					:title="repo"
					:project="projects[repo]"
					class="w-full"
				/>
			</DialogContent>
		</Dialog>

		<Tabs default-value="short" v-model="viewingVersion">
			<TabsList class="relative -ml-2">
				<div
					:class="
						cn(
							'absolute top-1/2 transition-transform left-0 -translate-y-1/2',
							viewingVersion === 'short'
								? '-translate-x-2'
								: 'translate-x-[calc(var(--spacing)*26)]'
						)
					"
				>
					<component
						v-for="(Rectangle, index) in Rectangles"
						:key="index"
						:is="Rectangle"
						class="w-32 h-auto"
						v-show="ticker === index + 1"
					/>
				</div>
				<TabsTrigger value="short">Short version</TabsTrigger>
				<TabsTrigger value="long">Long version</TabsTrigger>
			</TabsList>

			<div
				:class="
					cn('animate-grid', viewingVersion === 'long' && 'active')
				"
			>
				<TabsContent
					:value="viewingVersion"
					class="flex flex-col overflow-hidden gap-3"
				>
					<div class="text-xl">I do these</div>
					<div
						class="grid w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-1"
					>
						<Button
							:variant="ButtonVariant.Outline"
							:size="ButtonSize.Lg"
							class="text-lg"
							v-for="skill in skills"
							:key="skill.name"
							@click="
								() => {
									selectedSkill = skill
									dialogOpen = true
								}
							"
							:disabled="viewingVersion !== 'long'"
						>
							{{ skill.name }}
						</Button>
					</div>

					<!-- <div
						class="text-balance text-muted-foreground text-center mt-4 mb-3"
					>
						With the help of these tools, technologies and
						frameworks (non-exhaustive list)
					</div>

					<div
						class="flex flex-wrap items-center justify-center gap-2"
					>
						<Badge
							v-for="badge in projectBadges"
							:href="badgeLinks[badge]"
							:key="badge"
							:class="badge"
							variant="outline-solid"
						>
							{{ badge }}
						</Badge>
					</div> -->
				</TabsContent>
			</div>

			<div
				:class="
					cn('animate-grid', viewingVersion === 'short' && 'active')
				"
			>
				<TabsContent :value="viewingVersion" class="overflow-hidden">
					<p>
						I architect, build, test, deploy, and maintain modern,
						high-quality software.
					</p>
				</TabsContent>
			</div>
		</Tabs>

		<p class="mt-3">
			If you're interested in requesting my work, contact me either
			through
			<ExtLink :href="links.Discord.link">Discord</ExtLink>
			or
			<ExtLink :href="links.Email.link">email</ExtLink>.
		</p>
	</div>
</template>

<style scoped>
.animate-grid {
	display: grid;
	grid-template-rows: 0fr;
	min-height: 0;
	opacity: 0;
	transition-property: grid-template-rows, opacity;
	transition-timing-function: var(
		--tw-ease,
		var(--default-transition-timing-function)
	);
	transition-duration: 0.3s;
}
.animate-grid.active {
	grid-template-rows: 1fr;
	opacity: 1;
}
</style>

<script setup lang="ts">
import Arrow1 from './stickers/Arrow1.vue'
import Arrow2 from './stickers/Arrow2.vue'
import Arrow3 from './stickers/Arrow3.vue'
import Arrow4 from './stickers/Arrow4.vue'
import Arrow5 from './stickers/Arrow5.vue'
import Link1 from './stickers/Link1.vue'
import Link2 from './stickers/Link2.vue'
import Link3 from './stickers/Link3.vue'
import Link4 from './stickers/Link4.vue'
import Link5 from './stickers/Link5.vue'
import Spark1 from './stickers/Spark1.vue'
import Spark2 from './stickers/Spark2.vue'
import Spark3 from './stickers/Spark3.vue'
import Spark4 from './stickers/Spark4.vue'
import Spark5 from './stickers/Spark5.vue'
import Star1 from './stickers/Star1.vue'
import Star2 from './stickers/Star2.vue'
import Star3 from './stickers/Star3.vue'
import Star4 from './stickers/Star4.vue'
import Star5 from './stickers/Star5.vue'
import { inject, ref } from 'vue'
import { cn } from '~/lib/utils'

const props = withDefaults(
	defineProps<{
		class?: string
		title: string
		subtitle?: string
		sticker?: 'arrow' | 'link' | 'spark' | 'star'
		flipSecondSticker?: boolean
	}>(),
	{
		flipSecondSticker: true
	}
)

const Arrows = [Arrow1, Arrow2, Arrow3, Arrow4, Arrow5]
const Links = [Link1, Link2, Link3, Link4, Link5]
// const Questions = [Question1, Question2, Question3, Question4, Question5]
const Sparks = [Spark1, Spark2, Spark3, Spark4, Spark5]
const Stars = [Star1, Star2, Star3, Star4, Star5]

const ticker = inject('stickerTicker', ref(1))
</script>

<template>
	<div :class="cn('text-balance', props.class)">
		<div
			:class="
				cn(
					'flex items-center',
					props.sticker === 'spark' ? 'gap-0' : 'gap-2'
				)
			"
		>
			<div
				v-if="sticker"
				:class="
					cn(
						'overflow-hidden [&_svg]:h-20 [&_svg]:object-contain',
						props.sticker === 'spark'
							? '[&_svg]:w-10 min-w-10'
							: '[&_svg]:w-14 min-w-14'
					)
				"
			>
				<component
					v-for="(Arrow, index) in Arrows"
					v-if="props.sticker === 'arrow'"
					v-show="ticker === index + 1"
					:is="Arrow"
				/>
				<component
					v-for="(Link, index) in Links"
					v-if="props.sticker === 'link'"
					v-show="ticker === index + 1"
					:is="Link"
				/>
				<!-- <component
					v-for="(Question, index) in Questions"
					v-if="props.sticker === 'question'"
					v-show="ticker === index + 1"
					:is="Question"
				/> -->
				<component
					v-for="(Spark, index) in Sparks"
					v-if="props.sticker === 'spark'"
					v-show="ticker === index + 1"
					:is="Spark"
				/>
				<component
					v-for="(Star, index) in Stars"
					v-if="props.sticker === 'star'"
					v-show="ticker === index + 1"
					:is="Star"
				/>
			</div>

			<h1 class="leading-10">{{ props.title }}</h1>

			<div
				v-if="sticker"
				:class="
					cn(
						'overflow-hidden [&_svg]:h-20 [&_svg]:object-contain',
						props.sticker === 'spark'
							? '[&_svg]:w-10 min-w-10'
							: '[&_svg]:w-14 min-w-14',
						props.flipSecondSticker && 'scale-x-[-1]'
					)
				"
			>
				<component
					v-for="(Arrow, index) in Arrows"
					v-if="props.sticker === 'arrow'"
					v-show="ticker === ((index + 1) % 5) + 1"
					:is="Arrow"
				/>
				<component
					v-for="(Link, index) in Links"
					v-if="props.sticker === 'link'"
					v-show="ticker === ((index + 1) % 5) + 1"
					:is="Link"
				/>
				<!-- <component
					v-for="(Question, index) in Questions"
					v-if="props.sticker === 'question'"
					v-show="ticker === ((index + 1) % 5) + 1"
					:is="Question"
				/> -->
				<component
					v-for="(Spark, index) in Sparks"
					v-if="props.sticker === 'spark'"
					v-show="ticker === ((index + 1) % 5) + 1"
					:is="Spark"
				/>
				<component
					v-for="(Star, index) in Stars"
					v-if="props.sticker === 'star'"
					v-show="ticker === ((index + 1) % 5) + 1"
					:is="Star"
				/>
			</div>
		</div>

		<span class="text-muted-foreground mt-3 text-lg">
			{{ props.subtitle }}
		</span>
	</div>
</template>

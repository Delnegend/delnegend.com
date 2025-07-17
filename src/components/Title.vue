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
import Question1 from './stickers/Question1.vue'
import Question2 from './stickers/Question2.vue'
import Question3 from './stickers/Question3.vue'
import Question4 from './stickers/Question4.vue'
import Question5 from './stickers/Question5.vue'
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
import { onBeforeMount, ref } from 'vue'
import { cn } from '~/lib/utils'

const props = withDefaults(
	defineProps<{
		class?: string
		title: string
		subtitle?: string
		sticker?: 'arrow' | 'link' | 'question' | 'spark' | 'star'
		flipSecondSticker?: boolean
	}>(),
	{
		flipSecondSticker: true
	}
)

const active = ref(1)

onBeforeMount(() => {
	if (!props.sticker) return
	const interval = setInterval(() => {
		active.value = active.value + 1 > 5 ? 1 : active.value + 1
	}, 300)
	return () => clearInterval(interval)
})
</script>

<template>
	<div :class="cn('text-center text-balance', props.class)">
		<div
			:class="
				cn(
					'flex items-center justify-center gap-2',
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
							? '[&_svg]:w-10'
							: '[&_svg]:w-16'
					)
				"
			>
				<Arrow1
					v-if="props.sticker === 'arrow'"
					v-show="active === 1"
				/>
				<Arrow2
					v-if="props.sticker === 'arrow'"
					v-show="active === 2"
				/>
				<Arrow3
					v-if="props.sticker === 'arrow'"
					v-show="active === 3"
				/>
				<Arrow4
					v-if="props.sticker === 'arrow'"
					v-show="active === 4"
				/>
				<Arrow5
					v-if="props.sticker === 'arrow'"
					v-show="active === 5"
				/>
				<Link1 v-if="props.sticker === 'link'" v-show="active === 1" />
				<Link2 v-if="props.sticker === 'link'" v-show="active === 2" />
				<Link3 v-if="props.sticker === 'link'" v-show="active === 3" />
				<Link4 v-if="props.sticker === 'link'" v-show="active === 4" />
				<Link5 v-if="props.sticker === 'link'" v-show="active === 5" />
				<Question1
					v-if="props.sticker === 'question'"
					v-show="active === 1"
				/>
				<Question2
					v-if="props.sticker === 'question'"
					v-show="active === 2"
				/>
				<Question3
					v-if="props.sticker === 'question'"
					v-show="active === 3"
				/>
				<Question4
					v-if="props.sticker === 'question'"
					v-show="active === 4"
				/>
				<Question5
					v-if="props.sticker === 'question'"
					v-show="active === 5"
				/>
				<Spark1
					v-if="props.sticker === 'spark'"
					v-show="active === 1"
				/>
				<Spark2
					v-if="props.sticker === 'spark'"
					v-show="active === 2"
				/>
				<Spark3
					v-if="props.sticker === 'spark'"
					v-show="active === 3"
				/>
				<Spark4
					v-if="props.sticker === 'spark'"
					v-show="active === 4"
				/>
				<Spark5
					v-if="props.sticker === 'spark'"
					v-show="active === 5"
				/>
				<Star1 v-if="props.sticker === 'star'" v-show="active === 1" />
				<Star2 v-if="props.sticker === 'star'" v-show="active === 2" />
				<Star3 v-if="props.sticker === 'star'" v-show="active === 3" />
				<Star4 v-if="props.sticker === 'star'" v-show="active === 4" />
				<Star5 v-if="props.sticker === 'star'" v-show="active === 5" />
			</div>

			<h1 class="leading-10">{{ props.title }}</h1>

			<div
				v-if="sticker"
				:class="
					cn(
						'overflow-hidden [&_svg]:h-20 [&_svg]:object-contain',
						props.sticker === 'spark'
							? '[&_svg]:w-10'
							: '[&_svg]:w-16',
						props.flipSecondSticker && 'scale-x-[-1]'
					)
				"
			>
				<Arrow1
					v-if="props.sticker === 'arrow'"
					v-show="active === 2"
				/>
				<Arrow2
					v-if="props.sticker === 'arrow'"
					v-show="active === 3"
				/>
				<Arrow3
					v-if="props.sticker === 'arrow'"
					v-show="active === 4"
				/>
				<Arrow4
					v-if="props.sticker === 'arrow'"
					v-show="active === 5"
				/>
				<Arrow5
					v-if="props.sticker === 'arrow'"
					v-show="active === 1"
				/>
				<Link1 v-if="props.sticker === 'link'" v-show="active === 2" />
				<Link2 v-if="props.sticker === 'link'" v-show="active === 3" />
				<Link3 v-if="props.sticker === 'link'" v-show="active === 4" />
				<Link4 v-if="props.sticker === 'link'" v-show="active === 5" />
				<Link5 v-if="props.sticker === 'link'" v-show="active === 1" />
				<Question1
					v-if="props.sticker === 'question'"
					v-show="active === 2"
				/>
				<Question2
					v-if="props.sticker === 'question'"
					v-show="active === 3"
				/>
				<Question3
					v-if="props.sticker === 'question'"
					v-show="active === 4"
				/>
				<Question4
					v-if="props.sticker === 'question'"
					v-show="active === 5"
				/>
				<Question5
					v-if="props.sticker === 'question'"
					v-show="active === 1"
				/>
				<Spark1
					v-if="props.sticker === 'spark'"
					v-show="active === 2"
				/>
				<Spark2
					v-if="props.sticker === 'spark'"
					v-show="active === 3"
				/>
				<Spark3
					v-if="props.sticker === 'spark'"
					v-show="active === 4"
				/>
				<Spark4
					v-if="props.sticker === 'spark'"
					v-show="active === 5"
				/>
				<Spark5
					v-if="props.sticker === 'spark'"
					v-show="active === 1"
				/>
				<Star1 v-if="props.sticker === 'star'" v-show="active === 2" />
				<Star2 v-if="props.sticker === 'star'" v-show="active === 3" />
				<Star3 v-if="props.sticker === 'star'" v-show="active === 4" />
				<Star4 v-if="props.sticker === 'star'" v-show="active === 5" />
				<Star5 v-if="props.sticker === 'star'" v-show="active === 1" />
			</div>
		</div>

		<span class="text-muted-foreground mt-3 text-lg">
			{{ props.subtitle }}
		</span>
	</div>
</template>

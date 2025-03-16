<script setup lang="ts">
import { cn } from "~/utils/utils";

const props = withDefaults(defineProps<{
	class?: string;
}>(), {
	class: "",
});
</script>

<template>
	<div :class="cn('text-2xl font-thin', props.class)">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";

const props = withDefaults(defineProps<{
	iconSize?: number;
	class?: string;
	href: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
}>(), {
	iconSize: 14,
	class: "",
	target: "_blank",
});
</script>

<template>
	<a
		:href="props.href"
		:target="props.target"
		class="inline-flex items-center gap-1 font-medium underline underline-offset-4"
		:class="props.class">
		<slot />
		<ExternalLink :size="props.iconSize" />
	</a>
</template>

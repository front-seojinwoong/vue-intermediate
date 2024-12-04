<template>
	<AppCard> h5.card </AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';

defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});

defineEmits(['modal']);
</script>

<style lang="scss" scoped></style>

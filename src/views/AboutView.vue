<template>
	<div>AbouteView</div>
	<p>{{ $route.path }}</p>
	<button class="btn btn-primary" @click="$router.push('/')">
		Home으로 이동하기
	</button>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route.path', route.path);
</script>

<style lang="scss" scoped></style>

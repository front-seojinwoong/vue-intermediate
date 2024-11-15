<template>
	<div>게시글 작성</div>
	<hr />
	<form @submit.prevent>
		<div class="mb-3">
			<label for="title" class="form-label">제목</label>
			<input v-model="form.title" type="text" class="form-control" id="title" />
		</div>
		<div class="mb-3">
			<label for="content" class="form-label">내용</label>
			<textarea
				v-model="form.content"
				class="form-control"
				id="content"
				rows="3"
			></textarea>
		</div>
		<div class="pt-4">
			<button type="button" class="btn btn-outline-dark" @click="goListPage">
				목록
			</button>
			<button class="btn btn-primary" @click="save">저장</button>
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const goListPage = () => {
	router.push({ name: 'PostList' });
};

const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(),
		});
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};
</script>

<style lang="scss" scoped></style>

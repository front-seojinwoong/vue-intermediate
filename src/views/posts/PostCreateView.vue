<template>
	<div>게시글 작성</div>
	<hr />
	<PostForm
		v-model:title="form.title"
		v-model:content="form.content"
		@submit.prevent="save"
	>
		<template #actions>
			<button type="button" class="btn btn-outline-dark" @click="goListPage">
				목록
			</button>
			<button class="btn btn-primary" @click="save">저장</button>
		</template>
	</PostForm>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

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

<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { deletePost, getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	id: [String, Number],
});

const router = useRouter();
/**
 * ref와 reactive 차이점
 * ref
 * 장점) ref는 한꺼번에 객체할당이 가능
 * 장점) 레퍼런스타입, 프리미티브 타입 둘다 가능.
 * 단점) form.value.title, form.value.content
 *
 * reactive
 * 장점) form.title, form.content
 * 단점) 객체 할당 불가능
 * 단점) 레퍼런스 타입만 가능
 */
const post = ref({
	title: null,
	content: null,
	createdAt: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		setPost(data);
	} catch (error) {
		console.error(error);
	}
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

fetchPost();

const remove = async () => {
	try {
		if (confirm('삭제 하시겠습니까?') === false) return;

		await deletePost(props.id);
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>

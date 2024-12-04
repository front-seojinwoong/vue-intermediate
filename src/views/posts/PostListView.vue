<template>
	<div>게시글 목록</div>
	<hr class="my-4" />
	<PostFilter v-model:title="params.title_like" v-model:limit="params._limit" />
	<hr class="my-4" />

	<!-- s -->
	<AppGrid :items="posts">
		<template v-slot="{ item }">
			<PostItem
				:title="item.title"
				:content="item.content"
				:created-at="item.createdAt"
				@click="goPage(item.id)"
				@modal="openModal(item)"
			></PostItem>
		</template>
	</AppGrid>

	<!-- e -->
	<AppPagination
		:current-page="params._page"
		:page-count="pageCount"
		@page="page => (params._page = page)"
	/>
	<AppModal :show="show" :title="게시글" />

	<template v-if="posts && posts.length > 0">
		<hr class="my-5" />
		<AppCard>
			<PostDetailView :id="posts[0].id"></PostDetailView>
		</AppCard>
	</template>
</template>

<script setup>
import AppGrid from '@/components/AppGrid.vue';
import AppModal from '@/components/AppModal.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';

const router = useRouter();
const posts = ref([]);

const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 6,
	title_like: '',
});

// pagination S
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (error) {
		console.error(error);
	}
};

watchEffect(fetchPosts);

const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};

// modal
const show = ref(false);
const openModal = () => {
	show.value = true;
};
</script>

<style lang="scss" scoped></style>

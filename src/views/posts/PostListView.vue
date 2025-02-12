<template>
  <div>
    <h2>게시글 목록</h2>
    <div class="row g-3">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
    <PostDetailView />
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import PostDetailView from './PostDetailView.vue';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();

const goPage = id => {
  router.push({
    name: 'PostDetail',
    params: { id },
    query: { searchText: 'hello' },
    hash: 'world!',
  });
};
</script>

<style lang="scss" scoped></style>

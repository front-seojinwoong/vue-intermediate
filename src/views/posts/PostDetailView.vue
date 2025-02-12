<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <div class="text-muted">{{ form.createdAt }}</div>
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
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

/**
 * ref
 * 장점) 객체 할당 가능, 일관성을 유지할 수 있다. (primitive type, reference type 둘다 사용 가능)
 * 단점) form.value.title, form.value.content
 *
 * reactive
 * 장점) form.title, form.content
 * 단점) 객체할당 불가능
 *
 * 결론))) ref를 쓰자
 */
const form = ref({});

const fetchPost = () => {
  const data = getPostById(id);
  form.value = { ...data };
};

fetchPost();
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () => router.push({ name: 'PostEdit', parmas: { id } });
</script>

<style lang="scss" scoped></style>

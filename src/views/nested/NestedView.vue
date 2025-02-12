<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <RouterLink class="nav-link" active-class="active" to="/nested/one"
        >Nested One</RouterLink
      >
    </li>
    <li class="nav-item">
      <RouterLink
        class="nav-link"
        active-class="active"
        :to="{ name: 'NestedTwo', replace: true }"
        >Nested Two</RouterLink
      >
    </li>
  </ul>
  <hr class="my-4" />
  <RouterView></RouterView>
</template>

<script setup></script>

<style lang="scss" scoped></style>

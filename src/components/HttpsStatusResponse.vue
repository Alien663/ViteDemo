<template>
    <h1 v-if="status === '200'">If you gaze into the abyss, the abyss gazes also into you</h1>
    <img :src="'https://http.cat/' + status" :alt="'Learn more in HTTP CAT : https://http.cat/' + status">
</template>

<script setup lang="ts">
import { computed, type Ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const status : Ref<string | string[]> = computed(() => route.params.status);
</script>
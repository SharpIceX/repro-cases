<template>
	{{ $route.meta.aaa.test_type }}
</template>

<script setup lang="ts">
import { useRoute } from "#app";

const route = useRoute();

const testType = route.meta.aaa.test_type;
</script>

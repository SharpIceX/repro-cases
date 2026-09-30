<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
if (import.meta.browser) {
	console.log(useRouter().getRoutes());
}
</script>

<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store'

const isLoadingStore = useIsLoadingStore()
const store = useAuthStore()
const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
	isLoadingStore.set(true)
	if (!authStore.isAuth) {
		await router.push('/login')
	}
	isLoadingStore.set(false)
})
</script>

<template>
	<LayoutLoader v-if="isLoadingStore.isLoading" />
	<section v-else :class="{ grid: store.isAuth }" style="min-height: 100vh">
		<LayoutSidebar v-if="store.isAuth" />
		<div class="p-10">
			<slot />
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 6fr;
}
</style>

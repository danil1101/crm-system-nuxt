<script setup lang="ts">
const visibleModal = ref(false)

const toggleVisibleModal = () => {
	visibleModal.value = !visibleModal.value
}

const { handleSubmit, defineField } = useForm()

const [name, nameAttrs] = defineField('name')
const [id, idAttrs] = defineField('id')
const [email, emailAttrs] = defineField('email')
const [phone, phoneAttrs] = defineField('phone')
const [type, typeAttrs] = defineField('type')

const onSubmit = handleSubmit(values => {
	console.log(values)
	toggleVisibleModal()
})
</script>

<template>
	<UButton label="New trainers" @click="toggleVisibleModal" class="w-fit" />

	<UModal v-model="visibleModal">
		<UCard
			:ui="{
				ring: '',
				divide: 'divide-y divide-gray-100 dark:divide-gray-800'
			}"
		>
			<template #header>Creating a new trainer </template>

			<form @submit="onSubmit" class="space-y-4">
				<UFormGroup label="Name" name="name">
					<UiInput
						v-model="name"
						v-bind="nameAttrs"
						type="text"
						class="input"
					/>
				</UFormGroup>
				<UFormGroup label="ID" name="id">
					<UiInput v-model="id" v-bind="idAttrs" type="text" class="input" />
				</UFormGroup>
				<UFormGroup label="Email" name="email">
					<UiInput
						v-model="email"
						v-bind="emailAttrs"
						type="email"
						class="input"
					/>
				</UFormGroup>
				<UFormGroup label="Phone" name="number">
					<UiInput
						v-model="phone"
						v-bind="phoneAttrs"
						type="phone"
						class="input"
					/>
				</UFormGroup>
				<UFormGroup label="Type training">
					<USelectMenu
						v-model="type"
						v-bind="typeAttrs"
						:options="[
							{ label: 'Shooting', value: 'shooting' },
							{ label: 'Physical', value: 'physical' }
						]"
					/>
				</UFormGroup>
				<UButton label="Upload document" class="w-fit" />
			</form>

			<template #footer>
				<UButton size="lg" block label="Create" @click="onSubmit" />
			</template>
		</UCard>
	</UModal>
</template>

<style scoped>
.input {
	@apply transition-colors;
}
</style>

<script setup lang="ts">
const route = useRoute()
const clientId = route.params.id as string

const { data: client, pending: isLoading } = await useLazyAsyncData<
	{
		id: number
		title: string
		completed: string
	}[]
>('rows', () =>
	($fetch as any)(`https://jsonplaceholder.typicode.com/users/${clientId}`)
)

const date = ref(new Date())

const attributes = ref([
	{
		key: 'today',
		highlight: {
			color: 'green',
			fillMode: 'solid'
		},
		dates: new Date()
	}
])
</script>

<template>
	<div v-if="isLoading">Loading...</div>
	<div v-else>
		<h1 class="font-bold text-2xl mb-10">{{ client.name }}</h1>
		<div class="flex flex-col gap-10">
			<div class="flex flex-row justify-between gap-10">
				<div class="flex flex-col gap-3 flex-[40%]">
					<UFormGroup label="ID" name="ID">
						<UInput :value="client?.id" disabled type="text" />
					</UFormGroup>
					<UFormGroup label="Name" name="name">
						<UInput :value="client.name" disabled type="text" />
					</UFormGroup>
					<UFormGroup label="Last training event" name="name">
						<UInput :value="client.address.suite" disabled type="text" />
					</UFormGroup>
					<UFormGroup label="Next training event" name="name">
						<UInput :value="client.address.suite" disabled type="text" />
					</UFormGroup>
					<UFormGroup label="Notes" name="name">
						<UInput :value="client.website" disabled type="text" />
					</UFormGroup>
				</div>
				<VCalendar
					color="dark"
					v-model="date"
					:attributes="attributes"
					class="w-full flex-[40%]"
				/>
			</div>
			<div class="flex flex-row gap-10">
				<div
					class="relative overflow-hidden flex-auto rounded border border-dashed border-gray-400 dark:border-gray-500 opacity-75 px-4 flex items-center justify-center h-[450px]"
				>
					<svg
						class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10"
						fill="none"
					>
						<defs>
							<pattern
								id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
								x="0"
								y="0"
								width="10"
								height="10"
								patternUnits="userSpaceOnUse"
							>
								<path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
							</pattern>
						</defs>
						<rect
							stroke="none"
							fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
							width="100%"
							height="100%"
						></rect>
					</svg>
				</div>
				<div
					class="relative overflow-hidden flex-auto rounded border border-dashed border-gray-400 dark:border-gray-500 opacity-75 px-4 flex items-center justify-center h-[450px]"
				>
					<svg
						class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10"
						fill="none"
					>
						<defs>
							<pattern
								id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
								x="0"
								y="0"
								width="10"
								height="10"
								patternUnits="userSpaceOnUse"
							>
								<path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
							</pattern>
						</defs>
						<rect
							stroke="none"
							fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
							width="100%"
							height="100%"
						></rect>
					</svg>
				</div>
				<div
					class="relative overflow-hidden flex-auto rounded border border-dashed border-gray-400 dark:border-gray-500 opacity-75 px-4 flex items-center justify-center h-[450px]"
				>
					<svg
						class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10"
						fill="none"
					>
						<defs>
							<pattern
								id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
								x="0"
								y="0"
								width="10"
								height="10"
								patternUnits="userSpaceOnUse"
							>
								<path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
							</pattern>
						</defs>
						<rect
							stroke="none"
							fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
							width="100%"
							height="100%"
						></rect>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

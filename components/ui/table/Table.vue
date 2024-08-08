<script lang="ts" setup>
const props = defineProps<{
	title?: string
	columns: Object[]
}>()

const columns = ref(props.columns)
const emit = defineEmits(['click'])
const selectedColumns = ref(columns)
const columnsTable = computed(() =>
	columns.value.filter(column => selectedColumns.value.includes(column))
)

const search = ref('')

const resetFilters = () => {
	search.value = ''
}

// Pagination
const sort = ref({})
const page = ref(1)
const pageCount = ref(5)

const pageTotal = ref(10)
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() =>
	Math.min(page.value * pageCount.value, pageTotal.value)
)

// Data
const { data: rows, pending } = await useLazyAsyncData<
	{
		id: number
		title: string
		completed: string
	}[]
>(
	'rows',
	() =>
		($fetch as any)(`https://jsonplaceholder.typicode.com/users`, {
			query: {
				q: search.value,
				_page: page.value,
				_limit: pageCount.value,
				// @ts-ignore
				_sort: sort.value.column,
				// @ts-ignore
				_order: sort.value.direction
			}
		}),
	{
		default: () => [],
		watch: [page, search, pageCount, sort]
	}
)
</script>

<template>
	<UCard
		class="w-full"
		:ui="{
			base: '',
			ring: '',
			divide: 'divide-y divide-gray-200 dark:divide-gray-700',
			header: { padding: 'px-4 py-5' },
			body: {
				padding: '',
				base: 'divide-y divide-gray-200 dark:divide-gray-700'
			},
			footer: { padding: 'p-4' }
		}"
	>
		<template #header>
			<h2
				class="font-semibold text-xl text-gray-900 dark:text-white leading-tight"
			>
				{{ title }}
			</h2>
		</template>

		<div class="flex justify-between items-center w-full p-4">
			<UInput
				v-model="search"
				icon="i-heroicons-magnifying-glass-20-solid"
				placeholder="Search..."
			/>
			<div class="flex gap-1.5 items-center">
				<USelectMenu v-model="selectedColumns" :options="columns" multiple>
					<UButton icon="i-heroicons-view-columns" color="gray" size="xs">
						Columns
					</UButton>
				</USelectMenu>

				<UButton
					icon="i-heroicons-funnel"
					color="gray"
					size="xs"
					:disabled="search === ''"
					@click="resetFilters"
				>
					Reset
				</UButton>
			</div>
		</div>

		<!-- Table -->
		<UTable
			v-model:sort="sort"
			@select="item => emit('click', item)"
			:rows="rows as any"
			:columns="columnsTable"
			:loading="pending"
			sort-asc-icon="i-heroicons-arrow-up"
			sort-desc-icon="i-heroicons-arrow-down"
			sort-mode="manual"
			class="w-full"
			:ui="{
				td: { base: 'max-w-[0] truncate' },
				default: { checkbox: { color: 'gray' } }
			}"
		>
			<template #actions-data="{ row }">
				<slot />
			</template>
		</UTable>

		<!-- Number of rows & Pagination -->
		<template #footer>
			<div class="flex flex-wrap justify-between items-center">
				<div>
					<span class="text-sm leading-5">
						Showing
						<span class="font-medium">{{ pageFrom }}</span>
						to
						<span class="font-medium">{{ pageTo }}</span>
						of
						<span class="font-medium">{{ pageTotal }}</span>
						results
					</span>
				</div>

				<div class="flex gap-3">
					<div class="flex items-center gap-1.5">
						<span class="text-sm leading-5">Rows per page:</span>

						<USelect
							v-model="pageCount"
							:options="[3, 5, 10, 20, 30, 40]"
							class="me-2 w-20"
							size="xs"
						/>
					</div>

					<UPagination
						v-model="page"
						:page-count="pageCount"
						:total="pageTotal"
						:ui="{
							wrapper: 'flex items-center gap-1',
							rounded:
								'!rounded-full h-[40px] w-[40px] text-[16px] justify-center',
							default: {
								activeButton: {
									variant: 'outline'
								}
							}
						}"
					/>
				</div>
			</div>
		</template>
	</UCard>
</template>

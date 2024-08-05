<script lang="ts" setup>
import { Table } from '~/components/ui/table'

const columns = [
	{
		key: 'id',
		label: 'ID',
		sortable: true
	},
	{
		key: 'name',
		label: 'Full name',
		sortable: true
	},
	{
		key: 'address.suite',
		label: 'Last training event',
		sortable: true
	},
	{
		key: 'address.suite',
		label: 'Next training event',
		sortable: true
	},
	{
		key: 'website',
		label: 'Notes',
		sortable: true
	},
	{
		key: 'actions',
		label: 'View documents',
		sortable: false
	}
]
const columnsContacts = [
	{
		key: 'id',
		label: 'ID',
		sortable: true
	},
	{
		key: 'name',
		label: 'Full name',
		sortable: true
	},
	{
		key: 'date',
		label: 'Date',
		sortable: true
	},
	{
		key: 'website',
		label: 'Notes',
		sortable: true
	},
	{
		key: 'actions',
		label: 'View documents',
		sortable: false
	}
]
</script>

<template>
	<div class="flex flex-col gap-6">
		<Table title="Events" :columns="columns">
			<UButton
				size="2xs"
				color="emerald"
				variant="outline"
				:ui="{ rounded: 'rounded-full' }"
				label="View documents"
			/>
		</Table>
		<Table title="Contacts" :columns="columnsContacts">
			<UButton
				size="2xs"
				color="emerald"
				variant="outline"
				:ui="{ rounded: 'rounded-full' }"
				label="View documents"
			/>
		</Table>
	</div>
</template>

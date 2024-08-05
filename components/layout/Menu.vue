<script setup lang="ts">
import {MENU_DATA} from './menu.data'
import Item from "./Item.vue";
</script>

<template>
	<div>
    <Item :item="item"
          v-for="item in MENU_DATA"
          :key="item.name"
          class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5"
    />
	</div>
</template>

<script setup lang="ts">
import type {IMenuItem} from "./menu.data";

const props = defineProps<{ item: IMenuItem}>()
const isVisible = ref(false)

const toggleVisible = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
    <NuxtLink
        :to="item.url"
        v-if="item.url"
    >
       <Icon :name="item.icon" class="mr-3" />
       <span>{{ item.name }}</span>
    </NuxtLink>
    <div v-else style="align-items: flex-start; flex-direction: column">
      <button class="flex items-center w-full" @click="toggleVisible">
        <Icon :name="item.icon" class="mr-3" />
        <span>{{ item.name }}</span>
        <Icon name="mingcute:down-line" class="ml-auto" />

      </button>
      <div
          class="flex flex-col"
          v-if="isVisible"
      >
        <NuxtLink
            :to="children.url"
            class="ml-9"
            v-for="children in item.children"
        >
          {{children.name}}
        </NuxtLink>
      </div>
    </div>
</template>

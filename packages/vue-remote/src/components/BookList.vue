<template>
  <div class="grid grid-flow-row auto-rows-max grid-cols-4 gap-6">
    <div
      class="flex flex-col font-sans shadow-xl rounded-md"
      v-for="item in filteredBooks"
      :key="item.id"
    >
      <div class="flex justify-center">
        <img :src="item.imageUrl" alt="" class="object-contain" />
      </div>
      <div class="flex flex-wrap mt-4 p-2">
        <div
          class="flex-auto text-g font-semibold text-ellipsis overflow-hidden text-slate-900 text-center whitespace-nowrap w-full"
        >
          {{ item.title }}
        </div>
        <div
          class="flex-auto mt-3 text-sm font-medium text-gray-700 text-center w-full"
        >
          {{ item.author }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
img {
  width: 300px;
  height: 300px;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import store from "../store";
export default defineComponent({
  components: {},
  computed: {
    filteredBooks: {
      get() {
        return store.filteredBooks;
      },
      set(list) {},
    },
  },
});
</script>

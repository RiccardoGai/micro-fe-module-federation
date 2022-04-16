<template>
  <div :class="border" class="flex flex-col shadow-xl rounded-md">
    <div class="flex justify-center">
      <img :src="book.imageUrl" alt="" class="object-contain" />
    </div>
    <div class="flex flex-wrap mt-4 p-2">
      <div
        class="flex-auto text-g font-semibold text-ellipsis overflow-hidden text-slate-900 text-center whitespace-nowrap w-full"
      >
        {{ book.title }}
      </div>
      <div
        class="flex-auto mt-3 text-sm font-medium text-gray-700 text-center w-full"
      >
        {{ book.author }}
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
import { BORDER } from '../constants';
import { defineComponent } from 'vue';
import { IBook } from '../store';
export default defineComponent({
  props: {
    book: Object as () => IBook
  },
  computed: {
    border: () => BORDER
  }
});
</script>

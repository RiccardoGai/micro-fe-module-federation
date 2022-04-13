<template>
  <nav
    class="bg-white border border-gray-200 px-4 py-4 shadow-lg sticky top-0"
  >
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >{{ name }}</span
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: String,
  },
});
</script>

<template>
  <div :class="border">
    <input
      type="text"
      v-model="searchText"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder="search"
    />
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script lang="ts">
import { BORDER } from '../constants';
import { defineComponent } from 'vue';
import store, { setSearchText } from '../store';
export default defineComponent({
  computed: {
    searchText: {
      get() {
        return store.searchText;
      },
      set(value) {
        setSearchText(value);
      }
    },
    border: () => BORDER
  }
});
</script>

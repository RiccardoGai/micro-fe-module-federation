<template>
  <Header name="Vue Remote" />
  <div class="container mx-auto">
    <div class="flex w-full">
      <div class="grid grid-cols-1">
        <div class="flex justify-center">
          <BookSearch class="my-8 w-1/2" />
        </div>
        <div
          :class="border"
          class="grid grid-flow-row auto-rows-max grid-cols-4 gap-6"
        >
          <Book :book="item" v-for="item in filteredBooks" :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import BookSearch from './components/BookSearch.vue';
import Book from './components/Book.vue';
import store from './store';
import { BORDER } from './constants';

export default defineComponent({
  components: {
    Header,
    BookSearch,
    Book
  },
  computed: {
    filteredBooks: {
      get() {
        return store.filteredBooks;
      },
      set(list) {}
    },
    border: () => BORDER
  }
});
</script>

<template>
  <Header name="Vue Host" />
  <div class="container mx-auto">
    <div class="flex w-full">
      <div class="grid grid-cols-1">
        <div class="flex justify-center">
          <BookSearch class="my-8 w-1/2" />
        </div>
        <BookList />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BookList from "remote/BookList";
import BookSearch from "remote/BookSearch";
import store from "remote/store";
import Header from "remote/Header";

export default defineComponent({
  components: {
    BookList,
    BookSearch,
    Header
  },
  computed: {
    count: {
      get() {
        return store.filteredBooks.length;
      },
      set() {},
    },
  },
});
</script>

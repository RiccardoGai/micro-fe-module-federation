<template>
  <Header name="Vue Remote" />
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
import Header from "./components/Header.vue";
import BookList from "./components/BookList.vue";
import BookSearch from "./components/BookSearch.vue";
export default defineComponent({
  components: {
    Header,
    BookList,
    BookSearch,
  },
});
</script>

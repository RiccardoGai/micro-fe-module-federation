<template>
  <Header name="Vue Host" />
  <div class="container mx-auto">
    <div class="flex w-full justify-center">
      <div class="grid grid-cols-1">
        <span class="text-3xl font-semibold my-4 text-center"
          >My Favorite Book</span
        >
        <Book :book="myFavoriteBook" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Book from 'remote/Book';
import Header from 'remote/Header';
export default defineComponent({
  components: {
    Book,
    Header
  },
  data() {
    return {
      myFavoriteBook: {
        id: 73517852,
        fileName: '0073517852.jpg',
        imageUrl: 'http://ecx.images-amazon.com/images/I/511IaP4FCKL.jpg',
        title: 'Principles of Microeconomics',
        author: 'Robert Frank',
        categoryId: 2,
        category: 'Business & Money'
      }
    };
  }
});
</script>

import { createApp } from "vue";

import BookList from "./BookList.vue";

export default (selector: string) => createApp(BookList).mount(selector);
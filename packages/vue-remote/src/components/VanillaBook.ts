import { IBook } from "@/store";
import { createApp } from "vue";

import Book from "./Book.vue";

export default (selector: string, props: { book: IBook }) =>
  createApp(Book, props).mount(selector);

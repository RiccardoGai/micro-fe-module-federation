import { createApp } from "vue";

import BookSearch from "./BookSearch.vue";

export default (selector: string) => createApp(BookSearch).mount(selector);
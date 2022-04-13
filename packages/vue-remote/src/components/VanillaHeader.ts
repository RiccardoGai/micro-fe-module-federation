import { createApp } from "vue";

import Header from "./Header.vue";

export default (selector: string) => createApp(Header).mount(selector);
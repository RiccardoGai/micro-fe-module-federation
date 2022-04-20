import { createApp } from "vue";

import Header from "./Header.vue";

export default (selector: string, props: { name: String }) =>
  createApp(Header, props).mount(selector);

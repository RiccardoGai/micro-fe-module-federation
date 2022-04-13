import { createApp } from "vue";
import { initStore } from "remote/store";

import "./index.scss";

import App from "./App.vue";
initStore();
createApp(App).mount("#app");

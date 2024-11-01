import "./assets/main.css";
import "vue-awesome-paginate/dist/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueAwesomePaginate from "vue-awesome-paginate";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

library.add(fas, far, fab);
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

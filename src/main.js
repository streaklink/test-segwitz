import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import GlobalComponents from "./plugins/GlobalComponents";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "boxicons/css/boxicons.min.css";
import "./assets/style.scss";

import VueGoodTablePlugin from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";

const app = createApp(App);
app.use(VueGoodTablePlugin);
app.use(store);
app.use(router);
app.use(GlobalComponents);
app.mount("#app");

import HeaderMenu from "@/components/HeaderMenu";
import Breadcrumb from "@/components/Breadcrumb";
import { VueGoodTable } from "vue-good-table-next";
const GlobalComponents = {
  install(Vue) {
    Vue.component("HeaderMenu", HeaderMenu);
    Vue.component("Breadcrumb", Breadcrumb);
    Vue.component("VueGoodTable", VueGoodTable);
  },
};
export default GlobalComponents;

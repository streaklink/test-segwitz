<template>
  <div id="body-pd">
    <HeaderMenu />
    <div class="height-100 bg-light mt-5">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Dashboard",
  setup() {
    const breadcrumb = ref([{ name: "Dashboard", class: "active" }]);
    return {
      breadcrumb,
    };
  },
};
</script>

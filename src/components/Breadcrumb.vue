<template>
  <div class="breadcrumbData">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb shadow-sm rounded mt-1">
        <li
          v-for="(breadcrumbData, breadcrumbKey) in breadcrumb"
          :key="breadcrumbKey"
          class="breadcrumb-item"
          :class="breadcrumbData.class"
          aria-current="page"
        >
          {{ breadcrumbData.name }}
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["breadcrumb"],
};
</script>
<style lang="scss" scoped>
.breadcrumbData {
  nav {
    padding: 10px 0;
    .breadcrumb {
      padding: 8px 15px;
      background: #4723d9;
      color: #fff;
      margin: 0;
      .active {
        color: #fff;
      }
    }
  }
}
</style>

<template>
  <div>
    <header class="header shadow-sm" id="header">
      <div class="header_toggle">
        <i class="bx bx-menu" id="header-toggle"></i>
      </div>
      <div class="header_img">
        <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
      </div>
    </header>
    <div class="l-navbar shadow-sm" id="nav-bar">
      <nav class="nav">
        <div>
          <a href="#" class="nav_logo">
            <i class="bx bx-layer nav_logo-icon"></i>
            <span class="nav_logo-name">Blog Admin</span>
          </a>
          <div class="nav_list">
            <router-link to="/dashboard" class="nav_link" active-class="active">
              <i class="bx bx-grid-alt nav_icon"></i>
              <span class="nav_name">Dashboard</span>
            </router-link>
            <router-link to="/blog" class="nav_link" active-class="active">
              <i class="bx bx-message-square-detail nav_icon"></i>
              <span class="nav_name">Blog</span>
            </router-link>
            <!-- <a href="#" class="nav_link">
              <i class="bx bx-user nav_icon"></i>
              <span class="nav_name">Users</span>
            </a>
            <a href="#" class="nav_link">
              <i class="bx bx-bookmark nav_icon"></i>
              <span class="nav_name">Bookmark</span>
            </a>
            <a href="#" class="nav_link">
              <i class="bx bx-folder nav_icon"></i>
              <span class="nav_name">Files</span>
            </a>
            <a href="#" class="nav_link">
              <i class="bx bx-bar-chart-alt-2 nav_icon"></i>
              <span class="nav_name">Stats</span>
            </a> -->
          </div>
        </div>
        <a href="javascript:void(0)" @click="logout" class="nav_link">
          <i class="bx bx-log-out nav_icon"></i>
          <span class="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import store from "./../store";
// import router from "./../router";
import "./../plugins/GlobalDirectives";
export default {
  setup() {
    const logout = () => {
      store.dispatch("logout");
    };
    onMounted(() => {
      const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);
        if (toggle && nav && bodypd && headerpd) {
          toggle.addEventListener("click", () => {
            nav.classList.toggle("show2");
            toggle.classList.toggle("bx-x");
            bodypd.classList.toggle("body-pd");
            headerpd.classList.toggle("body-pd");
          });
        }
      };
      showNavbar("header-toggle", "nav-bar", "body-pd", "header");
      const linkColor = document.querySelectorAll(".nav_link");
      function colorLink() {
        if (linkColor) {
          linkColor.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
        }
      }
      linkColor.forEach((l) => l.addEventListener("click", colorLink));
      // window.scrollTo(0, 0);
    });
    return {
      logout,
    };
  },
};
</script>

<style></style>

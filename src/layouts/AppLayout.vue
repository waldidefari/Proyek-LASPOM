<template>
  <div>
    <navbar-vue></navbar-vue>
    <div class="px-24">
      <router-view></router-view>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
import FooterVue from "../components/Footer.vue";
export default {
  name: "AppLayout",
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>

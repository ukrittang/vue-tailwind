<template>
  <div class="text-red-600 font-baloo">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import WebFont from "webfontloader";

export default {
  name: "App",
  created() {
    WebFont.load({
      google: {
        families: ["Baloo 2:400,600"],
      },
    });
  },
};
</script>

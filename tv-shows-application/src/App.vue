<template>
  <v-app>
    <header>
      <app-header />
    </header>

    <v-content class="grey darken-4">
      <router-view />
    </v-content>

    <footer>
      <app-footer />
    </footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/header/AppHeader";
import AppFooter from "./components/footer/AppFooter";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<template>
  <v-carousel cycle height="450" dark hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(show, index) in list" :key="index">
       <v-sheet color="black" height="100%" @click="viewDetails(show.id)">
      <show-overview :show="show" />
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import ShowOverview from "./ShowOverview"
export default {
  name:"Carousel",
  components:{
    ShowOverview
  },
  props: {
    list: {
        type: Array
    }
  },
  methods: {
    viewDetails(id) {
      this.$router.push({ name: "Show", params: { id: id } });
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <v-sheet class="mx-auto grey darken-4">
      <div class="headline font-weight-bold white--text mx-12 mt-12">
        {{genre}}
        <v-icon color="white">mdi-chevron-right</v-icon>
      </div>
      <v-slide-group v-model="model" class="pa-4" show-arrow dark>
        <v-slide-item v-for="show in list" :key="show.id">
          <show-card :show="show" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import ShowCard from "../cards/ShowCard";
export default {
  name: "Slide",
  components: {
    ShowCard
  },
  data() {
    return {
      model: null
    };
  },
  props: {
    list: Array,
    genre: String
  }
};
</script>

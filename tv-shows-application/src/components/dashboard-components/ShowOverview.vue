<template>
  <v-row class="fill-height white--text" align="center" justify="center">
    <v-col sm="4">
      <v-img v-if="show.image" :src="show.image.original" height="400" contain />
      <v-img v-else :src="require('../../assets/show-photo-default.jpeg')" height="400" contain />
    </v-col>
    <v-col sm="6">
      <div class="display-2">{{show.name}}</div>
      <div class="caption mt-4" v-html="show.summary"></div>
      <div class="headline ma-3">
        Rating : {{show.rating.average}}
        <v-icon dark>mdi-star</v-icon>
      </div>
      <v-chip-group column>
        <v-chip v-for="genre in show.genres" :key="genre">
          <v-icon small left>mdi-map-marker</v-icon>
          {{ genre }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ShowOverview",
  props: {
    show: {}
  }
};
</script>
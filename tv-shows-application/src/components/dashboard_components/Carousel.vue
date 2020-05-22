<template>
  <v-carousel cycle height="450" dark hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(show, index) in list" :key="index">
      <v-sheet color="black" height="100%" @click="viewDetails(show.id)">
        <v-row class="fill-height" align="center" justify="center">
          <v-col sm="4">
            <v-img :src="show.image.original" height="400" contain />
          </v-col>
          <v-col sm="6">
            <div class="display-2">{{show.name}}</div>
            <div class="caption mt-4" v-html="show.summary"></div>
            <div class="headline ma-3">
              Rating : {{show.rating.average}}
              <v-icon>mdi-star</v-icon>
            </div>

            <v-chip-group column>
              <v-chip v-for="genre in show.genres" :key="genre">
                <v-icon small left>mdi-map-marker</v-icon>
                {{ genre }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: Array
  },
  methods: {
    viewDetails(id) {
      this.$router.push({ name: "Show", params: { id: id } });
    }
  }
};
</script>
<template>
  <div>
    <v-tooltip bottom dark max-width="500">
      <template v-slot:activator="{ on }">
        <v-card class="ma-1" height="170" width="170" @click="viewDetails(show.id)" v-on="on">
          <v-img
            v-if="show.image!=null"
            :src="show.image.medium"
            height="170"
            class="white--text align-end"
          >
            <v-card-title class="subtitle-2 black pt-2">{{show.name}}</v-card-title>
          </v-img>
          <v-img
            v-else
            :src="require('../../assets/show-photo-default.jpeg')"
            height="170"
            class="white--text align-end"
          >
            <v-card-title class="subtitle-2 black pt-2">{{show.name}}</v-card-title>
          </v-img>
        </v-card>
      </template>
      Language : {{show.language}}
      <br />
      Rating : {{show.rating.average}}
      <br />Genres :
      <span v-for="g in show.genres" :key="g">{{g}},</span>
      <br />Click to know more...
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "ShowCard",
  props: {
    show: {}
  },
  methods: {
    viewDetails(id) {
      this.$router.push({ name: "Show", params: { id: id } });
    }
  }
};
</script>
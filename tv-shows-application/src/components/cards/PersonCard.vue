<template>
  <v-card shaped height="300" width="220">
    <v-img v-if="artist.person.image!=null" :src="artist.person.image.medium" contain height="200" />
    <v-img v-else :src="require('../../assets/person-photo-default.png')" contain height="200" />
    <v-card-title>{{artist.person.name}}</v-card-title>
    <v-card-subtitle v-if="artist.type">{{artist.type}}</v-card-subtitle>
    <v-card-subtitle v-else>as {{artist.character.name}}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    artist: {}
  }
};
</script>

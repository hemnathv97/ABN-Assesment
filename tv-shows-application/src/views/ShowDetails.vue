<template>
  <div class="ma-5">
    <v-container>
      <show-overview :show="showInfo" />
      <v-row class="mt-5">
        <v-tabs background-color="teal darken-4" class="elevation-2" dark :centered="true">
          <v-tab>Episodes</v-tab>
          <v-tab-item>
            <v-card flat tile>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th>Season/Episode</th>
                    <th>Episode Name</th>
                    <th>Premiered date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(episode,index) in episodes" :key="index">
                    <td>Season {{episode.season}} : Episode {{episode.number}}</td>
                    <td>{{episode.name}}</td>
                    <td>{{episode.airdate}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
          </v-tab-item>
          <v-tab>Cast</v-tab>
          <v-tab-item>
            <v-layout justify-center class="pa-10" wrap>
              <v-flex
                md3
                align-self-center
                class="pt-5 px-9 my-5"
                v-for="(artist,index) in cast"
                :key="index"
              >
                <person-card :artist="artist" />
              </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab>Crew</v-tab>
          <v-tab-item>
            <v-layout justify-center class="pa-10" wrap>
              <v-flex
                md3
                align-self-center
                class="pt-5 px-9 my-5"
                v-for="(member,index) in crew"
                :key="index"
              >
                <person-card :artist="member" />
              </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab>Gallery</v-tab>
          <v-tab-item>
            <v-layout justify-center class="pa-5" wrap>
              <v-flex md2 class="ma-3" v-for="(image,index) in images" :key="index">
                <image-card :image="image" />
              </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getShowById } from "../services/service";
import PersonCard from "../components/cards/PersonCard";
import ImageCard from "../components/cards/ImageCard";
import ShowOverview from "../components/dashboard-components/ShowOverview";
export default {
  name: "ShowDetails",
  components: {
    PersonCard,
    ImageCard,
    ShowOverview
  },
  data() {
    return {
      id: this.$route.params.id,
      showInfo: {},
      episodes: [],
      cast: [],
      crew: [],
      images: []
    };
  },
  methods: {
    async initialize() {
      await getShowById(this.id)
        .then(res => (this.showInfo = res.data))
        .catch();
      this.showData();
    },
    showData(){
      this.episodes = this.showInfo._embedded.episodes;
      this.cast = this.showInfo._embedded.cast;
      this.crew = this.showInfo._embedded.crew;
      this.images = this.showInfo._embedded.images;
    }
  },
  created() {
    this.initialize();
  }
};
</script>
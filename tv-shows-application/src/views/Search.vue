<template>
  <div>
    <v-card max-width="500" flat class="mx-auto grey darken-4 mt-10 pa-2">
      <v-row>
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          rounded
          outlined
          solo-inverted
          clearable
          autofocus
          color="teal darken-4"
          dark
          placeholder="Enter keyword here..."
          v-model="keyword"
          data-test="search-key"
        />
      </v-row>
    </v-card>
    <v-container>
      <v-row align="center" class="ma-10">
        <v-col md6 v-for="info in searchInfo" :key="info.id">
          <show-card :show="info.show" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getShowsByName } from "../services/service";
import ShowCard from "../components/cards/ShowCard";
export default {
  name: "Search",
  components: {
    ShowCard
  },
  data() {
    return {
      keyword: "",
      searchInfo: {}
    };
  },
  watch: {
    async keyword() {
      await getShowsByName(this.keyword).then(
        res => (this.searchInfo = res.data).catch()
      );
    }
  }
};
</script>

<template>
  <div id="Home" class="home grey darken-4">
    <carousel-comp :list="carouselItems"></carousel-comp>
    <div v-for="(list,index) in slideItems" :key="index">
      <slide-comp :list="list" :genre="filters[index]"></slide-comp>
    </div>
  </div>
</template>

<script>
import { getAllShows } from "../services/service";
import CarouselComp from "../components/dashboard_components/Carousel";
import SlideComp from "../components/dashboard_components/Slide";
export default {
  name: "Home",
  components: {
    CarouselComp,
    SlideComp
  },
  data() {
    return {
      allShowsInfo: [],
      carouselItems: [],
      slideItems: [],
      filters: [
        "Drama",
        "Action",
        "Comedy",
        "Romance",
        "Horror",
        "Family"
        // "Mystery","Medical","History","Science-Fiction","Anime","Fantasy","Supernatural",
        // "Thriller","War","Espionage","Legal","Western","Crime","Adventure"
      ]
    };
  },
  methods: {
    fn(id) {
      console.log(id);
    },
    toggle(i) {
      this.model[i] = !this.model[i];
    }
  },
  async created() {
    await getAllShows().then(res => (this.allShowsInfo = res.data));
    this.allShowsInfo.sort((a, b) =>
      a.rating.average > b.rating.average ? -1 : 1
    );
    this.carouselItems = this.allShowsInfo.slice(0, 4);

    this.filters.forEach((fil, i) => {
      this.slideItems[i] = [];
      this.allShowsInfo.forEach(element => {
        if (element.genres.includes(fil)) this.slideItems[i].push(element);
      });
      this.slideItems[i] = this.slideItems[i].slice(0, 30);
    });
  }
};
</script>

<style></style>

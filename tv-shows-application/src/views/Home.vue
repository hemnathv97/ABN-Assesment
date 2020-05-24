<template>
  <div id="Home" class="home grey darken-4">
    <carousel-comp :list="carouselItems" />
    <div v-for="(list,index) in slideItems" :key="index">
      <slide-comp :list="list" :genre="filters[index]" />
    </div>
  </div>
</template>

<script>
import { getAllShows } from "../services/service";
import CarouselComp from "../components/dashboard-components/Carousel";
import SlideComp from "../components/dashboard-components/Slide";
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
      carouselRange: 4,
      slideItems: [],
      slideRange: 30,
      filters: [
        "Drama",
        "Action",
        "Comedy",
        "Romance",
        "Horror",
        "Family"
      ] /* Other popular genres which can be included here are
          "Mystery","Medical","History","Science-Fiction","Anime","Fantasy","Supernatural",
          "Thriller","War","Espionage","Legal","Western","Crime","Adventure"*/
    };
  },
  methods: {
    sortBasedOnRating() {
      this.allShowsInfo.sort((a, b) =>
        a.rating.average > b.rating.average ? -1 : 1
      );
    },
    createList() {
      this.carouselItems = this.allShowsInfo.slice(0, this.carouselRange);

      this.filters.forEach((filter, i) => {
        this.slideItems[i] = [];
        this.allShowsInfo.forEach(element => {
          if (element.genres.includes(filter)) this.slideItems[i].push(element);
        });
        this.slideItems[i] = this.slideItems[i].slice(0, this.slideRange);
      });
    },
    async initialize() {
      await getAllShows()
        .then(res => (this.allShowsInfo = res.data))
        .catch();
        this.sortBasedOnRating();
        this.createList();
    }
  },
  created() {
    this.initialize();
  }
};
</script>

import { shallowMount } from "@vue/test-utils";
import Carousel from "../../../../src/components/dashboard-components/Carousel.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vue from "vue";
import {routes} from "../../../../src/router";

describe("In Carousel Component", () => {
    let carouselWrapper;
    const router = new VueRouter({ routes });

    beforeEach(() => {
        Vue.use(Vuetify);
        // Vue.use(VueRouter);
        carouselWrapper = shallowMount(Carousel, {
            Vue,
            router,
            propsData:{
                list:[{
                    "id":169,
                    "name":"Breaking Bad",
                    "language":"English",
                    "genres":["Drama","Crime","Thriller"],
                    "rating":{"average":9.3},
                    "image":{"original":"http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"},
                    "summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>"
                }]
            }
        });
    });

    afterEach(() => {
        carouselWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(carouselWrapper.isVueInstance).toBeTruthy();
    });
    it("it should have a carousel stub", () => {
        expect(carouselWrapper.html()).toContain("v-carousel");
    });
    it("it should have a carousel item", () => {
        expect(carouselWrapper.html()).toContain("v-carousel-item");
    });
    it("it should have a <v-sheet-stub></v-sheet-stub>", () => {
        expect(carouselWrapper.html()).toContain("v-sheet");
    });
    it("it should navigate to gallery", () => {
        carouselWrapper.vm.viewDetails(169);
        expect(carouselWrapper.vm.$route.path).toBe("/");
      });
});
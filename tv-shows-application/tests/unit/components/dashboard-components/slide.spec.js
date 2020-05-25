import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Slide from "../../../../src/components/dashboard-components/Slide.vue";
import ShowCard from "../../../../src/components/cards/ShowCard.vue";

describe("In Slide Component", () => {
    let slideWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        slideWrapper = shallowMount(Slide, {
            Vue,
            propsData:{
            list:[{
                "id":169,
                "name":"Breaking Bad",
                "language":"English",
                "genres":["Drama","Crime","Thriller"],
                "rating":{"average":9.3},
                "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"},
                "summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>"
            }]
            }
        });
    });

    afterEach(() => {
        slideWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(slideWrapper.isVueInstance).toBeTruthy();
    });


    it("it should have a <v-sheet-stub></v-sheet-stub>", () => {
        expect(slideWrapper.html()).toContain("v-sheet");
    });
    it("it should have a slide group", () => {
        expect(slideWrapper.html()).toContain("v-slide-group");
    });

    it("it should have a slide item", () => {
        expect(slideWrapper.html()).toContain("v-slide-item");
    });
    it("it should have render show-card component", () => {
        expect(slideWrapper.html()).toContain("show-card");
    });

    it("it should load ShowCard component", () => {
        expect(ShowCard).toBeTruthy();
      });

});
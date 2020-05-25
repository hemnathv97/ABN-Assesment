import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import ImageCard from "../../../../src/components/cards/ImageCard.vue";

describe("In ImageCard Component", () => {
    let imageCardWrapper;
    let url="http://static.tvmaze.com/uploads/images/original_untouched/1/2600.jpg";
  
    beforeEach(() => {    
        Vue.use(Vuetify);
        imageCardWrapper = shallowMount(ImageCard, {
            Vue,
            propsData: {
                image: {
                    "resolutions": 
                    {
                        "original": 
                        { "url": url},
                    }
                }
            }
        });
    });

    afterEach(() => {
        imageCardWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(imageCardWrapper.isVueInstance).toBeTruthy();
    });
    it("it should have a div-stub", () => {
        expect(imageCardWrapper.html()).toContain("div");
    });

    it("it should have a card", () => {
        expect(imageCardWrapper.html()).toContain("v-card");
    });
    it("it should have a v-img-stub", () => {
        expect(imageCardWrapper.html()).toContain("v-img");
    });

    it("it should have load the expexted img", () => {
        expect(imageCardWrapper.html()).toContain(`<v-img-stub height=\"300\" contain=\"true\" options=\"[object Object]\" position=\"center center\" src=\"${url}\" transition=\"fade-transition\"></v-img-stub>`);
    });

});
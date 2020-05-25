import PersonCard from "../../../../src/components/cards/PersonCard.vue";
import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

describe("In PersonCard Component", () => {
    let personCardWrapper;
    let imageURL="http://static.tvmaze.com/uploads/images/medium_portrait/248/620269.jpg";
    let personName="Nathan Fillion";
    let characterName="Captain Malcolm \"Mal\" Reynolds";
    
    beforeEach(() => {
        Vue.use(Vuetify);
        personCardWrapper = shallowMount(PersonCard, {
            Vue,
            propsData: {
                artist: {
                    "person": {
                        "name": personName,
                        "image": {
                            "medium": imageURL
                        },
                    },
                    "character": {
                        "name": characterName,
                    },
                }
            }
        });
    });

    afterEach(() => {
        personCardWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(personCardWrapper.isVueInstance).toBeTruthy();
    });
    it("it should have a card", () => {
        expect(personCardWrapper.html()).toContain("v-card");
    });

    it("it should have a image for card", () => {
        expect(personCardWrapper.html()).toContain("v-img");
    });
    it("it should have load the expexted image", () => {
        const expected=`<v-img-stub height=\"200\" contain=\"true\" options=\"[object Object]\" `+ 
        `position=\"center center\" src=\"${imageURL}\" transition=\"fade-transition\"></v-img-stub>`;
        expect(personCardWrapper.html()).toContain(expected);
    });
    it("it should have a card title", () => {
        expect(personCardWrapper.html()).toContain("v-card-title");
    });
    it("it should have title should match name", () => {
        expect(personCardWrapper.text()).toMatch(personName);
    });
    it("it should have a subtitle", () => {
        expect(personCardWrapper.html()).toContain("v-card-subtitle");
    });
    it("it should have a subtitle should match charater name", () => {
        expect(personCardWrapper.text()).toMatch(`as ${characterName}`);
    });

});
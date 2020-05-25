import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Search from "../../../src/views/Search.vue"
import ShowCard from "../../../src/components/cards/ShowCard.vue";

describe("In Search Component", () => {
    let searchWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        searchWrapper = shallowMount(Search, {
            Vue,
        });
    });

    afterEach(() => {
        searchWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(searchWrapper.isVueInstance).toBeTruthy();
    });

    it("it should load ShowCard component", () => {
        expect(ShowCard).toBeTruthy();
      });
      
    it("it should have a <v-card></v-card>", () => {
        expect(searchWrapper.html()).toContain("v-card");
    });

    it("it should have a <v-rom></v-row>", () => {
        expect(searchWrapper.html()).toContain("v-row");
    });
    it("it should have a text-field", () => {
        expect(searchWrapper.html()).toContain("v-text-field");
    });
    it("it should have a container", () => {
        expect(searchWrapper.html()).toContain("v-container");
    });
    
    it("should not load v-card by default", ()=>{
        expect(searchWrapper.contains("v-card")).toBe(false);
    });

    it("should load v-card on keyword", ()=>{
        searchWrapper.vm.keyword="game"
        expect(searchWrapper.html()).toContain("v-card");
    });

});
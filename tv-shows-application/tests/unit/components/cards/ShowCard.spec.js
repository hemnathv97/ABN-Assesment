import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vue from "vue";
import ShowCard from "../../../../src/components/cards/ShowCard.vue";
import {routes} from "../../../../src/router";

describe("In ShowCard Component", () => {
    let showCardWrapper;
    const router = new VueRouter(routes);
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        showCardWrapper = shallowMount(ShowCard, {
            Vue,
            router,
            data(){
                return{
                    on:true
                }
            },
            propsData:{
                show:{
                    "id":169,
                    "name":"Breaking Bad",
                    "language":"English",
                    "genres":["Drama","Crime","Thriller"],
                    "rating":{"average":9.3},
                    "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"},
                    "summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>"
                }

            }
        });
    });

    afterEach(() => {
        showCardWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(showCardWrapper.isVueInstance).toBeTruthy();
    });

    it("it should have a tooltip", () => {
        expect(showCardWrapper.html()).toContain("v-tooltip-stub");
    });
    it("it should have a <v-span-stub></v-span-stub>", () => {
        expect(showCardWrapper.html()).toContain("span");
    });
    it("it should navigate to ShowDetails", () => {
        showCardWrapper.vm.viewDetails(169);
        expect(showCardWrapper.vm.$route.path).toBe("/");
      });
});
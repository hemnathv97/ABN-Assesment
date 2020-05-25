import { shallowMount } from "@vue/test-utils";
import ShowOverview from "../../../../src/components/dashboard-components/ShowOverview.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import VueRouter from "vue-router";

describe("In ShowOverview Component", () => {
    let overviewWrapper;

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        overviewWrapper = shallowMount(ShowOverview, {
            Vue,
            propsData:{
                show:{
                    "id":169,
                    "name":"Breaking Bad",
                    "language":"English",
                    "genres":["Drama","Crime","Thriller"],
                    "rating":{"average":9.3},
                    "image":{"original":"http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"},
                    "summary":"<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>"
                }
            }
        });
    });

    afterEach(() => {
        overviewWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(overviewWrapper.isVueInstance).toBeTruthy();
    });

    it("it should have a <v-row-stub></v-row-stub>", () => {
        expect(overviewWrapper.html()).toContain("v-row");
    });
    it("it should have a <v-col-stub></v-col-stub>", () => {
        expect(overviewWrapper.html()).toContain("v-col");
    });
    
    it("it should have a <v-chip-group-stub></v-chip-group-stub>", () => {
        expect(overviewWrapper.html()).toContain("v-chip-group");
    });
    it("it should have a chip icon for genre", () => {
        expect(overviewWrapper.html()).toContain("v-icon");
    });
    it("it should have a <v-chip-stub></v-chip-stub>", () => {
        expect(overviewWrapper.html()).toContain("v-chip");
    });
});
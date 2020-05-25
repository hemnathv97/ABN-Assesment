import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import AppFooter from "../../../../src/components/footer/AppFooter.vue";

describe("In AppFooter Component", () => {
    let appFooterWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        appFooterWrapper = shallowMount(AppFooter, {
            Vue,
        });
    });

    afterEach(() => {
        appFooterWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(appFooterWrapper.isVueInstance).toBeTruthy();
    });
    it("it should have a <v-footer-stub></v-footer-stub>", () => {
        expect(appFooterWrapper.html()).toContain("v-footer-stub");
    });
    it("it should have a <v-col-stub></v-col-stub>", () => {
        expect(appFooterWrapper.html()).toContain("v-col-stub");
    });
    it("it should have a <strong> element", () => {
        expect(appFooterWrapper.html()).toContain("strong");
    });

});
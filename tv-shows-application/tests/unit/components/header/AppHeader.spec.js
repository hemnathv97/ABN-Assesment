import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import AppHeader from "../../../../src/components/header/AppHeader.vue";

describe("In AppHeader Component", () => {
    let appHeaderWrapper;
    const router = new VueRouter({ path: "/", name: "Home" });
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Vuetify);
        appHeaderWrapper = shallowMount(AppHeader, {
            Vue,
            router
        });
    });

    afterEach(() => {
        appHeaderWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(appHeaderWrapper.isVueInstance).toBeTruthy();
    });


    it("it should have a <v-app-bar></v-app-bar>", () => {
        expect(appHeaderWrapper.html()).toContain("v-app-bar");
    });
    it("it should have a routerlink to home", () => {
        expect(appHeaderWrapper.html()).toContain("router-link");
    });
    it("it should have a nav bar icon", () => {
        expect(appHeaderWrapper.html()).toContain("v-app-bar-nav-icon");
    });
    it("it should have a search button", () => {
        expect(appHeaderWrapper.html()).toContain("v-btn");
    });
    it("it should have a <v-spacer-stub></v-spacer-stub>", () => {
        expect(appHeaderWrapper.html()).toContain("v-spacer");
    });
    it("it should have a toolbar title", () => {
        expect(appHeaderWrapper.html()).toContain("v-toolbar-title");
    });
    it("it should have a search icon", () => {
        expect(appHeaderWrapper.html()).toContain("v-icon");
    });
    it("it should have a navigation drawer", () => {
        expect(appHeaderWrapper.html()).toContain("v-navigation-drawer");
    });
    it("it should have a  menu list", () => {
        expect(appHeaderWrapper.html()).toContain("v-list");
    });
    it("it should have a <v-list-item-group-stub></v-list-item-group-stub>", () => {
        expect(appHeaderWrapper.html()).toContain("v-list-item-group");
    });
    it("it should have a <v-list-item-stub></v-list-item-stub>", () => {
        expect(appHeaderWrapper.html()).toContain("v-list-item");
    });
    it("it should have a list item title", () => {
        expect(appHeaderWrapper.html()).toContain("v-list-item-title");
    });
    it("it should have a list item icon", () => {
        expect(appHeaderWrapper.html()).toContain("v-list-item-icon");
    });
});
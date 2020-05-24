import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "../../src/App.vue";
import Home from "../../src/views/Home.vue";
import AppHeader from "../../src/components/header/AppHeader.vue";
import AppFooter from "../../src/components/footer/AppFooter.vue";

describe("In App Component", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "Home" });

  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Vuetify);
    appWrapper = shallowMount(App, {
      Vue,
      router
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  describe("it should load AppHeader component", () => {
    it("it should have a <app-header-stub></app-header-stub>", () => {
      expect(appWrapper.html()).toContain("app-header-stub");
    });
    it("it should load the app-header", () => {
      expect(AppHeader).toBeTruthy();
    });
  });

  it('it should have a v-app-stub', () => {
    expect(appWrapper.html()).toContain("v-app");
  });
  
  
  describe("it should render router view", () => {
    it('it should have a div element with class="container"', () => {
      expect(appWrapper.html()).toContain("v-content");
    });
    it("it should load the Home view by default", () => {
      expect(Home).toBeTruthy();
    });

  });

  describe("it should load AppFooter component", () => {
    it("it should have a <app-footer-stub></app-header-stub>", () => {
      expect(appWrapper.html()).toContain("app-footer-stub");
    });
    it("it should load the app-footer", () => {
      expect(AppFooter).toBeTruthy();
    });
  });

});
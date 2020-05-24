import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
// import VueRouter from "vue-router";
import ShowDetails from "../../../src/views/ShowDetails.vue"
import PersonCard from "../../../src/components/cards/PersonCard.vue";
import ImageCard from "../../../src/components/cards/ImageCard.vue";
import VueRouter from "vue-router";


describe("In ShowDetails Component", () => {
    let showDetailsWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        // Vue.use(VueRouter);
        showDetailsWrapper = shallowMount(ShowDetails, {
            Vue,
            mocks: {
                $route: {
                  params: { "id":"169" },
                }},
                // methods:{
                //     initialize: jest.fn()
                // },
            data() {
                return {
                    id:"",
                    showInfo: {
                        "id": 169,
                        "name": "Breaking Bad",
                        "language": "English",
                        "genres": ["Drama", "Crime", "Thriller"],
                        "rating": { "average": 9.3 },
                        "image": { "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg" },
                        "summary": "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>"
                    },
                    episodes: [{
                        "id": 12192,
                        "name": "Pilot",
                        "season": 1,
                        "number": 1,
                        "airdate": "2008-01-20",
                    }],
                    crew: [{
                        "type": "Creator",
                        "person": {
                            "id": 31025,
                            "name": "Vince Gilligan",
                            "image": {
                                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/29/72809.jpg"
                            }
                        }
                    }],
                    cast: [{
                        "person": {
                            "id": 14245,
                            "name": "Bryan Cranston",
                            "image": {
                                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/29/72809.jpg"
                            }
                        },
                        "character": {
                            "name": "Walter White"
                        }
                    }],
                    images: [{
                        "id": 2400,
                        "resolutions": {
                            "original": {
                                "url": "http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
                            }
                        }
                    }]
                }
            }
        });
    });

    afterEach(() => {
        showDetailsWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(showDetailsWrapper.isVueInstance).toBeTruthy();
    });

    it("it should load the PersonCard component", () => {
        expect(PersonCard).toBeTruthy();
    });
    it("it should load the ImageCard component", () => {
        expect(ImageCard).toBeTruthy();
    });

    it("it should have a container", () => {
        expect(showDetailsWrapper.html()).toContain("v-container");
    });

    it("it should have a <v-row></v-row>", () => {
        expect(showDetailsWrapper.html()).toContain("v-row");
    });
    it("it should have a <v-tabs></v-tabs>", () => {
        expect(showDetailsWrapper.html()).toContain("v-tabs");
    });
    it("it should have a tab-stub", () => {
        expect(showDetailsWrapper.html()).toContain("v-tab");
    });
    it("it should have a tab-item-stub", () => {
        expect(showDetailsWrapper.html()).toContain("v-tab-item");
    });

    it("it should have a v-card", () => {
        expect(showDetailsWrapper.html()).toContain("v-card");
    });
    it("it should have a table for episodes", () => {
        expect(showDetailsWrapper.html()).toContain("v-simple-table");
    });
    it("it should have a thead-stub", () => {
        expect(showDetailsWrapper.html()).toContain("thead");
    });
    it("it should have a tr-stub", () => {
        expect(showDetailsWrapper.html()).toContain("tr");
    });
    it("it should have a th-stub", () => {
        expect(showDetailsWrapper.html()).toContain("th");
    });
    it("it should have a tbody-stub", () => {
        expect(showDetailsWrapper.html()).toContain("tbody");
    });
    it("it should have a td-stub", () => {
        expect(showDetailsWrapper.html()).toContain("td");
    });
    it("it should have a <v-layout-stub></v-layout-stub>", () => {
        expect(showDetailsWrapper.html()).toContain("v-layout");
    });
    it("it should have a <v-flex-stub></v-flex-stub>", () => {
        expect(showDetailsWrapper.html()).toContain("v-flex");
    });
 

});

    
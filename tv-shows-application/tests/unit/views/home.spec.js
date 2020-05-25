import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Home from "../../../src/views/Home.vue"
import Slide from "../../../src/components/dashboard-components/Slide.vue";
import Carousel from "../../../src/components/dashboard-components/Carousel.vue";

describe("In Home Component", () => {
    let homeWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        homeWrapper = shallowMount(Home, {
            Vue,
            data() {
                return {
                    slideItems: [[{
                        "id": 169,
                        "name": "Breaking Bad",
                    }]],
                    carouselItems: [{
                        "id": 169,
                        "name": "Breaking Bad",
                    }],
                    allShowsInfo:[{
                        "id": 169,
                        "name": "Breaking Bad",
                        "rating":{"average":9.3},
                        "genres":["Crime","Drama","Thriller"]
                    },
                    {
                        "id": 249,
                        "name": "Sherlock",
                        "rating":{"average":9.5},
                        "genres":["Thriller","Crime"]
                    }]
                }
            },
        });
    });

    afterEach(() => {
        homeWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(homeWrapper.isVueInstance).toBeTruthy();
    });

    it("initialize function should be called on create",async ()=>{
        const spyinit= jest.spyOn(homeWrapper.vm,"initialize");
        homeWrapper.vm.sortBasedOnRating=jest.fn();
        setTimeout(() => {
            expect(spyinit).toHaveBeenCalled();    
            expect(homeWrapper.vm.sortBasedOnRating).toHaveBeenCalled();
            expect(homeWrapper.vm.createList).toHaveBeenCalled();
        });
      
    });

    it("it should call sort shows based on rating",()=>{
        let expected = [{
            "id": 249,
            "name": "Sherlock",
            "rating":{"average":9.5},
            "genres":["Thriller","Crime"]
        },
        {
            "id": 169,
            "name": "Breaking Bad",
            "rating":{"average":9.3},
            "genres":["Crime","Drama","Thriller"]
        }
        ]
        homeWrapper.vm.sortBasedOnRating();
        expect(homeWrapper.vm.allShowsInfo).toEqual(expected);
    });
    
    it("it should create lists for carousel and slide component",()=>{
        let expected1=[[{
            "id": 169,
            "name": "Breaking Bad",
            "rating":{"average":9.3},
            "genres":["Crime","Drama","Thriller"]
        }],[],[],[],[],[]];
        let expected2 = [{
            "id": 169,
            "name": "Breaking Bad",
            "rating":{"average":9.3},
            "genres":["Crime","Drama","Thriller"]
        },
        {
            "id": 249,
            "name": "Sherlock",
            "rating":{"average":9.5},
            "genres":["Thriller","Crime"]
        }
        ];
        homeWrapper.vm.createList();
        expect(homeWrapper.vm.slideItems).toEqual(expected1);
        expect(homeWrapper.vm.carouselItems).toEqual(expected2);
    })

    it("it should contain <carousel-comp-stub></<carousel-comp-stub>", () => {
        expect(homeWrapper.html()).toContain("carousel-comp");
    });

    it("it should load the carousel component", () => {
        expect(Carousel).toBeTruthy();
    });


    it("it should have a <slide-comp-stub></slide-comp-stub>", () => {

        expect(homeWrapper.html()).toContain("slide-comp");
    });

    it("it should load the slide component", () => {
        expect(Slide).toBeTruthy();
    });

    it("it should have a div element", () => {

        expect(homeWrapper.html()).toContain("div");
    });

});



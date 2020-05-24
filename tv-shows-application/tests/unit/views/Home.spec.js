import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Home from "../../../src/views/Home.vue"
import Slide from "../../../src/components/dashboard-components/Slide.vue";
import Carousel from "../../../src/components/dashboard-components/Carousel.vue";
import {getAllShows} from "../../../src/services/service"
// import VueRouter from "vue-router";

jest.mock("../../../src/services/service")
describe("In Home Component", () => {
    let homeWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        // Vue.use(VueRouter);
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
                        "rating":{"average":9.3}
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
        // console.log(homeWrapper.vm.initialize,"init");
        // getAllShows.mockResolvedValue({id:"1001"});
        // expect(homeWrapper.vm.getAllShows).toHaveBeenCalled();
        const spyinit= jest.spyOn(homeWrapper.vm,"initialize");
        homeWrapper.vm.sortBasedOnRating=jest.fn();
        setTimeout(() => {
            expect(spyinit).toHaveBeenCalled();    
            expect(homeWrapper.vm.sortBasedOnRating).toHaveBeenCalled();
        });
        
        
    });

    // it("",()=>{
    //     // console.log(homeWrapper.vm.initialize,"init");
    //     // getAllShows.mockResolvedValue({id:"1001"});
    //     // expect(homeWrapper.vm.getAllShows).toHaveBeenCalled();
    //     // const spyinit= jest.spyOn(homeWrapper.vm,"initialize");
    //     // setTimeout(() => {
    //     //     expect(spyinit).toHaveBeenCalled();    
    //     // });
    //     homeWrapper.vm.sortBasedOnRating = jest.fn();
    //     expect(homeWrapper.vm.sortBasedOnRating).toHaveBeenCalled();
        
    // });
   

    // it("it should load the app-header", () => {
    //     expect(homeWrapper.vm.getAllShows).toBeTruthy();
    // });


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



    // describe('Home', () => {
    //     let test;
    //     beforeEach(()=>{
    //         homeWrapper.vm.initialize=jest.fn();
    //         // Vue.use(Vuetify);
    //         // test=shallowMount(Home,{
    //         //     Vue
    //         // })
    //         // test.vm.initialize = jest.fn();
    //     });
    
    
    //     // afterEach(()=>{
    //     //     test.destroy();
    //     // })
            
    //         // const initialize = jest.fn();
    //         it("is a Vue instance", async() => {

    //             console.log(homeWrapper.vm.initialize);
    //         expect(homeWrapper.vm.initialize).toBeCalled();
    //     });
    // });
    


});



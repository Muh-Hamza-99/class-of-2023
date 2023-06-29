import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import Memory from "./Memory";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = ({ memories }) => {
  return (
    <div className="w-full md:w-4/5 flex justify-center items-center bg-gray-900 shadow-lg p-4 pt-2 rounded-lg">
            <CarouselProvider className="w-full h-68 md:h-56 lg:h-48 flex flex-col" naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={memories.length}>
                <Slider>
                    {
                        memories.map((memory, index) => <Slide className="w-full text-sm md:text-base font-light italic" index={index}>{ <Memory text={memory} /> }</Slide>)
                    }
                </Slider>    
                <div className="w-full flex justify-evenly mt-4">
                    <ButtonBack className="px-4 py-2 bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-md transition-all duration-200 ease-linear cursor-pointer"><AiFillLeftCircle size={24} /></ButtonBack>
                    <ButtonNext className="px-4 py-2 bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-md transition-all duration-200 ease-linear cursor-pointer"><AiFillRightCircle size={24} /></ButtonNext>
                </div>
            </CarouselProvider>
    </div>
  );
};

export default Carousel;
import React from "react";
import { FeedbackBox } from "./const";
import { Carousel } from "antd";

const CarouselCard = () => {
  return (
    <Carousel
      autoplay
      autoplaySpeed={5000}
      speed={1000}
      pauseOnDotsHover={true}
      dots={false}
      className="max-w-2xl mx-8 md:mx-auto py-16 ring-1 ring-violet-300 shadow-lg shadow-violet-300 sm:shadow-2xl sm:shadow-violet-400 rounded-3xl font-raleWay">
      {FeedbackBox.map((feedback) => (
        <div className="">
          <img
            src={feedback.customer_img}
            alt=""
            className="h-20 w-20 rounded-full block mx-auto border-[1px] border-gray-300"
          />
          <div className="text-center mb-8 mt-4">
            <p className="text-2xl uppercase font-semibold">
              {feedback.customer_name}
            </p>
            <p className="text-neutral-900">
              {feedback.customer_career}
            </p>
          </div>
          <p className="px-4 sm:max-w-lg mx-auto leading-8 font-poppins text-neutral-700">
            {feedback.feedbackText}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

const Feedback = () => {
  return (
    <main className="max-w-5xl mx-auto h-screen my-32">
      <div className="text-center mb-16 px-8">
        <p className="uppercase px-4 py-2 border-[1px] border-violet-300 rounded-3xl inline-block text-violet-700 font-semibold shadow-md shadow-violet-200">
          Customer Sayings
        </p>
        <p className="mt-4 text-3xl font-semibold my-4">
          Trusted by the kindest customers
        </p>
        <div className="space-y-2">
          <p>
            Here's a glimpse into the heartfelt experiences of my incredible
            clients.
          </p>
          <p>Your trust fuels my passion.</p>
        </div>
      </div>
      <CarouselCard />
    </main>
  );
};

export default Feedback;

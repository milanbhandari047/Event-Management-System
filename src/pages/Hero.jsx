import React from "react";
import Button from "../component/button/Button";

const Hero = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://www.simplilearn.com/ice9/assets/home/banner_v1.jpg")',
        }}
      >
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                World’s #1 <br /> Online Bootcamp
              </h1>

              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span className="mx-2">
                    <strong>5,000,000 </strong>careers advanced
                  </span>
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span className="mx-2">
                    {" "}
                    <strong>1,500</strong> live classes every month
                  </span>
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span className="mx-2">
                    <strong>85%</strong> report career benefits including
                    promotion or a new job
                  </span>
                </p>
                <Button text="Explore Programs" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <video
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              controls
            >
              <source
                src="https://www.youtube.com/watch?v=kLqAGklbmq8"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

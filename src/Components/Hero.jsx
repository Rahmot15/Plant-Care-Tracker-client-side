import React from "react";

const Hero = () => {
  return (
    <div className="relative md:-mt-28 -mt-10">
      <div className="absolute inset-0 z-0 bg-[url('https://i.ibb.co/BK5J0gWk/Get-Paid-Stock-com-682ccbe677d7c.jpg')] bg-cover bg-center filter blur-md "></div>
      <div className="absolute inset-0 z-0  bg-opacity-40"></div>

      <div className="relative z-10 w-11/12 mx-auto my-12">
        <div className="carousel w-full h-screen">
          {/*  Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 md:px-10 py-6 gap-6">
              <div className="md:w-1/2 space-y-4 text-center md:text-left ">
                <h2 className="text-2xl lg:text-6xl font-bold text-yellow-500">
                  Aloe Vera
                </h2>
                <p className="text-gray-900 text-sm lg:text-xl md:font-semibold">
                  Aloe Vera is a perennial succulent plant widely known for its medicinal properties. The gel inside its leaves has antibacterial, anti-inflammatory, and cooling effects, making it a natural remedy for skin irritation, burns, and sunburns. Aloe loves sunlight and is easy to care for, making it a great addition to kitchens, balconies, or sunny windowsills.
                </p>
                <button className="btn btn-primary transition-transform duration-300 hover:scale-110 hover:shadow-xl">
                  Explore More
                </button>
              </div>

              <div className="md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src="https://i.ibb.co/0jkMRHLN/image.png"
                  className="w-full h-64 md:h-[700px]  object-cover rounded-xl"
                  alt="Slide 1"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/*  Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 md:px-10 py-6 gap-6">
              <div className="md:w-1/2 space-y-7 text-center md:text-left ">
                <h2 className="text-2xl lg:text-5xl font-bold text-yellow-500">
                  Tulip plants
                </h2>
                <p className="text-gray-900 text-sm lg:text-xl md:font-semibold">
                  Tulips are seasonal flowering plants cherished worldwide for their vibrant, cup-shaped blooms. They usually bloom in spring and are often grown in gardens or pots. Tulips come in a variety of colors, each symbolizing different emotions—red for love, yellow for friendship, white for peace. Though they require well-drained soil and cool climates, their stunning flowers make them a favorite among gardening enthusiasts.
                </p>
                <button className="btn btn-secondary transition-transform duration-300 hover:scale-110 hover:shadow-xl">
                  Learn More
                </button>
              </div>
              <div className="md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src="https://i.ibb.co/Lz5dJxTV/image.png"
                  className="w-full h-64 md:h-[700px]  object-cover rounded-xl"
                  alt="Slide 2"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 3  */}
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 md:px-10 py-6 gap-6">
              <div className="md:w-1/2 space-y-4 text-center md:text-left ">
                <h2 className="text-2xl lg:text-5xl font-bold text-yellow-500">
                  Snake Plant
                </h2>
                <p className="text-gray-900 text-sm lg:text-xl md:font-semibold">
                  The Snake Plant is a popular indoor plant known for its striking appearance and easy maintenance. It can survive in low light and requires very little water. This plant is excellent at purifying indoor air by absorbing harmful toxins like formaldehyde and benzene. It's an ideal choice for offices or busy lifestyles where minimal care is preferred.
                </p>
                <button className="btn btn-accent transition-transform duration-300 hover:scale-110 hover:shadow-xl">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2 transition-transform duration-300 hover:scale-110 hover:shadow-xl">
                <img
                  src="https://i.ibb.co/XxdSz3Yk/image.png"
                  className="w-full h-64 md:h-[700px] object-cover rounded-xl"
                  alt="Slide 3"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

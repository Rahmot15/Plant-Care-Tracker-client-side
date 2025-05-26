import React from "react";

const PurchasePlant = () => {
  return (
    <div className="w-11/12 mx-auto md:mt-30 my-12" >
      <h1 className="ml-3 mb-6 italic text-center my-5 text-6xl  font-bold">New Plants</h1>
      <div className=" p-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-30 gap-6">
        {/* Rose - Flowering */}
        <div className="relative overflow-hidden bg-rose-500 rounded-lg  shadow-lg group flex flex-col">
          <div className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10">
            <svg viewBox="0 0 375 283" fill="none">
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="absolute w-60 h-48 bottom-0 left-0 -mb-24 ml-3 rotate-[20deg] scale-y-60 bg-black opacity-20 rounded-full blur-[20px]" />
            <img
              className="relative w-7xl rounded-xl"
              src="https://i.ibb.co/ZRnVxcYV/image.png"
              alt="Rose"
            />
          </div>
          <div className="relative text-white px-6 pb-4 mt-6">
            <span className="block opacity-75 -mb-1">Flowering</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">Rose</span>
              <span className="bg-white rounded-full text-rose-500 text-xs font-bold px-3 py-2">
                {" "}
                $24.00{" "}
              </span>
            </div>
          </div>
          <div className="px-6 pb-6">
            <button className="w-full bg-white text-sm font-semibold text-gray-800 py-2 rounded hover:bg-gray-100 transition">
              Purchase Now
            </button>
          </div>
        </div>

        {/* Boston Fern - Fern */}
        <div className="relative overflow-hidden bg-green-600 rounded-lg  shadow-lg group flex flex-col">
          <div className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10">
            <svg viewBox="0 0 375 283" fill="none">
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="absolute w-48 h-28 bottom-0 left-0 -mb-24 ml-3 rotate-[20deg] scale-y-60 bg-black opacity-20 rounded-full blur-[20px]" />
            <img
              className="relative w-80 rounded-xl"
              src="https://i.ibb.co/chRjWshP/image.png"
              alt="Boston Fern"
            />
          </div>
          <div className="relative text-white px-6 pb-4 mt-6">
            <span className="block opacity-75 -mb-1">Fern</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">Boston Fern</span>
              <span className="bg-white rounded-full text-green-600 text-xs font-bold px-3 py-2">
                {" "}
                $18.00{" "}
              </span>
            </div>
          </div>
          <div className="px-6 pb-6">
            <button className="w-full bg-white text-sm font-semibold text-gray-800 py-2 rounded hover:bg-gray-100 transition">
              Purchase Now
            </button>
          </div>
        </div>

        {/* Calathea Orbifolia - Foliage */}
        <div className="relative overflow-hidden bg-purple-600 rounded-lg  shadow-lg group flex flex-col">
          <div className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10">
            <svg viewBox="0 0 375 283" fill="none">
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="absolute w-48 h-28 bottom-0 left-0 -mb-24 ml-3 rotate-[20deg] scale-y-60 bg-black opacity-20 rounded-full blur-[20px]" />
            <img
              className="relative w-80 rounded-xl"
              src="https://i.ibb.co/CgpFNjZ/image.png "
              alt="Calathea Orbifolia"
            />
          </div>
          <div className="relative text-white px-6 pb-4 mt-6">
            <span className="block opacity-75 -mb-1">Foliage</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">
                Calathea Orbifolia
              </span>
              <span className="bg-white rounded-full text-purple-600 text-xs font-bold px-3 py-2">
                {" "}
                $32.00{" "}
              </span>
            </div>
          </div>
          <div className="px-6 pb-6">
            <button className="w-full bg-white text-sm font-semibold text-gray-800 py-2 rounded hover:bg-gray-100 transition">
              Purchase Now
            </button>
          </div>
        </div>

        {/* Zebra Haworthia - Succulent */}
        <div className="relative overflow-hidden bg-emerald-600 rounded-lg  shadow-lg group flex flex-col">
          <div className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10">
            <svg viewBox="0 0 375 283" fill="none">
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="absolute w-48 h-28 bottom-0 left-0 -mb-24 ml-3 rotate-[20deg] scale-y-60 bg-black opacity-20 rounded-full blur-[20px]" />
            <img
              className="relative w-80 rounded-xl"
              src="https://i.ibb.co/k63qyfnn/image.png"
              alt="Zebra Haworthia"
            />
          </div>
          <div className="relative text-white px-6 pb-4 mt-6">
            <span className="block opacity-75 -mb-1">Succulent</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">
                Zebra Haworthia
              </span>
              <span className="bg-white rounded-full text-emerald-600 text-xs font-bold px-3 py-2">
                {" "}
                $15.00{" "}
              </span>
            </div>
          </div>
          <div className="px-6 pb-6">
            <button className="w-full bg-white text-sm font-semibold text-gray-800 py-2 rounded hover:bg-gray-100 transition">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePlant;

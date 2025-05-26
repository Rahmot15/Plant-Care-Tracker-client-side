import React from "react";
import { FaBoxOpen, FaSeedling } from "react-icons/fa";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { GiWateringCan } from "react-icons/gi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSeedling size={40} className="text-green-800" />,
      text: "Pick your plant",
    },
    {
      icon: <PiPottedPlantDuotone size={40} className="text-green-800" />,
      text: "Choose a pot color",
    },
    {
      icon: <FaBoxOpen size={40} className="text-green-800" />,
      text: "Have it shipped",
    },
    {
      icon: <GiWateringCan size={40} className="text-green-800" />,
      text: "Watch it grow",
    },
  ];
  return (
    <div>
      <div className="bg-[#f9f6ef] py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-800">
          Here&apos;s How It <em className="italic">Works</em>
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="inline-block p-4 border-2 border-dashed border-green-800 rounded-full">
                  {step.icon}
                </div>
              </div>
              <p className="text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

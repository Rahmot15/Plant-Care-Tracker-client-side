import React from "react";
import { useLoaderData } from "react-router";

const PlantsTableDetails = () => {
  const plantData = useLoaderData();
  console.log(plantData);
  const {
    name,
    CareLevel,
    Category,
    HealthStatus,
    PhotoUrl,
    lastDate,
    nextDate,
    textarea,
  } = plantData;

  return (
    <div className="w-11/12 mx-auto my-12 ">
      <div className="gap-12 p-8 max-w-5xl mx-auto border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-1/2 object-cover">
          <img src={PhotoUrl} alt="Album" />
        </figure>

        <div className="flex items-center gap-12">
          <div className="space-y-3">
            <h2 className="card-title text-4xl font-bold mb-8 text-amber-500"> {name} </h2>
            <p className="text-lg text-gray-300 font-semibold">Category: <span className="text-cyan-600 badge badge-ghost badge-lg"> {Category}</span>  </p>
            <p className="text-lg text-gray-300 font-semibold">CareLevel: <span className="text-cyan-600 badge badge-ghost badge-lg">{CareLevel} </span>  </p>
            <p className="text-lg text-gray-300 font-semibold">HealthStatus: <span className="text-cyan-600 badge badge-ghost badge-lg"> {HealthStatus}</span>  </p>
            <p className="text-lg text-gray-300 font-semibold">lastDate: <span className="text-cyan-600 badge badge-ghost badge-lg"> {lastDate}</span>  </p>
            <p className="text-lg text-gray-300 font-semibold">nextDate: <span className="text-cyan-600 badge badge-ghost badge-lg"> {nextDate}</span>  </p>
            <p className="text-lg text-gray-300 font-semibold">
              Description:  <span className="text-gray-500"> {textarea}</span>  
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default PlantsTableDetails;

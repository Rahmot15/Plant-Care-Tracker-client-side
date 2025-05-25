import React from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const plants = useLoaderData();
  console.log(plants);

  return (
    <div>
      <div className="overflow-x-auto mt-12 w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:block">No</th>
              <th>Name</th>
              <th className="hidden md:block">Care level</th>
              <th className="hidden md:block">Category</th>
              <th> Details </th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={plant._id}>
                <th className="hidden md:block">{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={plant.PhotoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {plant.name} </div>
                      <div className="text-sm opacity-50">
                        {" "}
                        {plant.HealthStatus}{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden md:block">
                  {plant.CareLevel}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {plant.lastDate}
                  </span>
                </td>
                <td className="hidden md:block"> {plant.Category} </td>
                <th>
                  <Link to={`/plantDetails/${plant._id}`}>
                    <button className="btn btn-info  ">View details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;

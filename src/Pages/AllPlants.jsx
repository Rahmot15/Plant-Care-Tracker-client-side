import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const initialPlants = useLoaderData();
  const [plants, setPlants] = useState(initialPlants);
  console.log(plants);

  return (
    <div>
      <div className="overflow-x-auto mt-12 w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Care level</th>
              <th>Category</th>
              <th> Details </th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={plant._id}>
                <th>{index + 1}</th>
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
                <td>
                  {plant.CareLevel}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {plant.lastDate}
                  </span>
                </td>
                <td> {plant.Category} </td>
                <th>
                  <Link to={"/plantDetails"}>
                    <button className="btn btn-info  ">Vew details</button>
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

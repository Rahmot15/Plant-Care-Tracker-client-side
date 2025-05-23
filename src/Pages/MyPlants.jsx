import React from 'react';
import { useLoaderData } from 'react-router';
import { MdDelete, MdEdit } from "react-icons/md";

const MyPlants = () => {
    const plants = useLoaderData();
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
              <th> Auction </th>
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
                  <div className="card-actions  gap-3">
            <button className="btn  btn-primary"><MdEdit size={20}/></button>
            <button className="btn  btn-primary"><MdDelete size={20}/> </button>
          </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyPlants;
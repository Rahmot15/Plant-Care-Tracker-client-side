import React, {  use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";

const AddPlants = () => {
  const { user } = use(AuthContext);

  

  const handleAddPlant = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPlant = Object.fromEntries(formData.entries());
    newPlant.email = user.email;
    console.log(newPlant);

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Plant added successfully!",
            icon: "success",
            draggable: true,
          });

          e.target.reset()
        }
      });
  };

  return (
    <div className="relative min-h-screen pt-20 pb-5 -mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/p6L4kF3W/0eec91f7-f961-4f7c-a1fe-bac53dd90f57.png")',
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="relative z-20 md:w-10/12 w-[96%] mx-auto  border-2 border-blue-400 rounded-lg bg-gray-900 ">
        <div className="mt-8 text-center text-4xl font-bold">Add Plants</div>
        <form onSubmit={handleAddPlant} className="p-3 md:p-12">
          {/* name and Health Status field  */}
          <div className="flex gap-4">
            <input
              type="Name"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Plant Name"
            />
            <input
              type="text"
              name="HealthStatus"
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Health Status"
            />
          </div>

          {/* Photo Url  */}
          <div>
            <input
              type="text"
              name="PhotoUrl"
              className=" block w-full mt-6 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Photo URL"
            />
          </div>

          {/* Dropdown field  */}
          <div className="my-6 flex gap-4">
            <select
              className="block w-1/2 rounded-md border border-slate-300 px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              
              name="Category"
              required
            >
              <option disabled value="">
                Category
              </option>
              <option>Flowering</option>
              <option>Fern</option>
              <option>Flowering</option>
            </select>
            <select
              className="block w-1/2 rounded-md border border-slate-300 px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              
              name="CareLevel"
              required
            >
              <option disabled value="">
                Care level
              </option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Difficult</option>
            </select>
          </div>

          {/* date field  */}
          <div className="flex gap-1 md:gap-4 my-6">
            <input
              type="date"
              name="lastDate"
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Full Name *"
            />
            <input
              type="date"
              name="nextDate"
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email *"
            />
          </div>

          {/* email and name field */}
          <div className="">
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              className="mt-1 block w-full rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email"
            />
            <input
              type="name"
              name="name"
              defaultValue={user.displayName}
              className="my-6 block w-full rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Name"
            />
          </div>

          {/* description field */}
          <div className="">
            <textarea
              name="textarea"
              id="text"
              cols="30"
              rows="10"
              placeholder="Description"
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
            ></textarea>
          </div>

          {/* button  */}
          <div className="  ">
            <button
              type="submit"
              className="btn btn-info w-full py-6 text-lg font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlants;

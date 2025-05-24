import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const plants = useLoaderData();
  console.log(plants);
  const [Category, setCategory] = useState(plants.Category) || "";
  const [CareLevel, setCareLevel] = useState(plants.CareLevel) || "";
  const [lastDate, setLastDate] = useState(plants.lastDate) || "";
  const [nextDate, setNextDate] = useState(plants.nextDate) || "";

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPlant = Object.fromEntries(formData.entries());

    // Overwrite dropdowns and date fields from state
    updatedPlant.Category = Category;
    updatedPlant.CareLevel = CareLevel;
    updatedPlant.lastDate = lastDate;
    updatedPlant.nextDate = nextDate;

    fetch(`https://plant-server-side-iceeeflhw-rahmatullahs-projects-5d1688dc.vercel.app/plants/${plants._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Plant Update Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <div>
      <div className="my-12 w-10/12 mx-auto  border-2 border-blue-400 rounded-lg bg-gray-900 ">
        <div className="mt-8 text-center text-4xl font-bold">Update Plants</div>
        <form onSubmit={handleUpdatePlant} className="p-12">
          {/* name and Health Status field  */}
          <div className="flex gap-4">
            <input
              type="Name"
              defaultValue={plants.name}
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Plant Name"
            />
            <input
              type="text"
              defaultValue={plants.HealthStatus}
              name="HealthStatus"
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Health Status"
            />
          </div>

          {/* Photo Url  */}
          <div>
            <input
              type="text"
              defaultValue={plants.PhotoUrl}
              name="PhotoUrl"
              className=" block w-full mt-6 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Photo URL"
            />
          </div>

          {/* Dropdown field  */}
          <div className="my-6 flex gap-4">
            <select
              className="block w-1/2 rounded-md border border-slate-300 text-gray-500 px-3 py-4 font-semibold  shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              value={Category}
              name="Category"
              onChange={(e) => setCategory(e.target.value)}
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
              value={CareLevel}
              name="CareLevel"
              onChange={(e) => setCareLevel(e.target.value)}
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
          <div className="flex gap-4 my-6">
            <input
              type="date"
              name="lastDate"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Full Name *"
            />
            <input
              type="date"
              name="nextDate"
              value={nextDate}
              onChange={(e) => setNextDate(e.target.value)}
              className="mt-1 block w-1/2 rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </div>

          {/* email and password field */}
          <div className="">
            <input
              type="email"
              defaultValue={plants.email}
              name="email"
              className="mt-1 block w-full rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email"
            />
            <input
              type="password"
              defaultValue={plants.password}
              name="password"
              className="my-6 block w-full rounded-md border border-slate-300  px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          {/* description field */}
          <div className="">
            <textarea
              name="textarea"
              defaultValue={plants.textarea}
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

export default UpdatePlant;

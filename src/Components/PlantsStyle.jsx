import React from "react";

const PlantsStyle = () => {
  const imageURL = "https://i.ibb.co/392Npyvc/image.png";

  return (
    <div>
      <div className="w-11/12 mx-auto py-16 md:px-35 space-y-20 mt-24">
      {/* Section 1 */}
      <div className="md:grid flex flex-col-reverse md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative">
          <img src={imageURL} alt="Office Plants" className="rounded-lg shadow-lg" />
          
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-light ">
            Plants for <span className="italic font-medium">offices</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Office plants are an excellent way to bring nature indoors, improve air quality, and boost productivity. These low-maintenance plants thrive in indoor environments with limited sunlight and require minimal watering, making them perfect for busy workplaces. Popular choices include Snake Plant, ZZ Plant, and Pothos, which not only enhance the aesthetic appeal but also reduce stress and noise levels in the office. Adding greenery to your workspace can create a more pleasant, refreshing, and motivating atmosphere.
          </p>
          <button className="mt-6 btn  bg-green-900 text-white hover:bg-green-800">Shop Collection</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-light ">
            Sets for all <span className="italic font-medium">styles</span>
          </h2>
          <p className="mt-4 text-gray-400">
            No matter your taste or space, there’s a perfect plant set waiting for you. From minimalist succulents for modern desks to lush, leafy greens for cozy corners, our curated collections are designed to match every aesthetic. Whether you prefer clean lines, boho vibes, rustic warmth, or a splash of color, you’ll find plant sets that complement your unique style. These ready-to-place combinations not only enhance visual appeal but also bring a fresh, calming energy to your home or workspace. With options ranging from statement pieces to subtle accents, greenery has never been so easy to match with your personal decor.
          </p>
          <button className="mt-6 btn  bg-green-900 text-white hover:bg-green-800">Shop Collection</button>
        </div>

        {/* Image */}
        <div className="relative">
          <img src="https://i.ibb.co/zhFhCL8N/image.png" alt="Plant Styles" className="rounded-lg shadow-lg" />
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlantsStyle;

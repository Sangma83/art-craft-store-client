import React, { useEffect, useState, useRef } from "react";
import Reveal from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';

const AllCategrieSection = () => {
  const [categories, setCategories] = useState([]);
  const textRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-yellow-700">
        <Typewriter
          loop
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={3000}
          words={["Categories Of Art & Craft Gallery"]}
          onLoop={(loopCount) => {
            console.log(loopCount);
          }}
          ref={(r) => (textRef.current = r)}
        />
      </h1>
      <p className="text-center font-bold text-xl mt-8">
        Crafting beauty from imagination, our gallery is a testament to creativitys boundless possibilities
      </p>
      <div className="grid md:grid-cols-3 gap-10 my-10">
        {categories.map((category) => (
          <Reveal key={category._id} effect="fadeInUp">
            <div className="card w-96 bg-base-100  shadow-lg">
              <div className="card-body">
                <h2 className="card-title">{category.name} || {category.subcategory}</h2>
                <p>{category.details}</p>
              </div>
              <figure><img src={category.photo} alt="photo" /></figure>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default AllCategrieSection;

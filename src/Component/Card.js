import React from "react";
// importing AirFillEye icon from react icon
import { AiFillEye } from "react-icons/ai";

// passing ProjectItem state props
function Card({ ProjectItem }) {
  return (
    <>
      <div className="project-container">
        {/* rendering multiple reusable card component using Array.map() method */}
        {ProjectItem.map((curItem) => {
          // destructuring props
          const { id, image, name, description } = curItem;
          return (
            // passing unique props id
            <div className="card" key={id}>
              <img className="card-img-top" src={image} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn">
                  <AiFillEye className="icon" />
                  Preview
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;

import React from "react";
import { AiFillEye } from "react-icons/ai";

function Card({ ProjectData }) {
  return (
    <>
      <div className="project-container">
        {ProjectData.map((curEle) => {
          const { id, image, name, description } = curEle;
          return (
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

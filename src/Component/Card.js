import React from "react";
import { AiFillEye } from "react-icons/ai";

function Card({ ProjectItem }) {
  return (
    <>
      <div className="project-container">
        {ProjectItem.map((curItem) => {
          const { id, image, name, description } = curItem;
          return (
            <div className="card" key={id}>
              <img className="card-img-top" src={image} alt="Card cap" />
              <div className="card-body">
                <span className="id">{id}</span>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn">
                  <AiFillEye className="icon" />
                  Demo
                </a>
                <a href="#" className="btn">
                  <AiFillEye className="icon" />
                  Source code
                </a>
                <a href="#" className="btn">
                  <AiFillEye className="icon" />
                  Tutorial
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

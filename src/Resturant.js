import { React, useState } from "react";
import Card from "./Card";
import "./index.css";
import Navbar from "./Navbar";
import Data from "./ProjectData";

// console.log(Data);

const uniqueValue = [
  "ALL",
  ...new Set(
    Data.map((curEle) => {
      return curEle.category;
    })
  ),
];

// console.log(uniqueValue);

const Resturant = () => {
  const [ProjectData, setProjectData] = useState(Data);
  const [List, setList] = useState(uniqueValue);

  const filterItem = (category) => {
    if (category === "ALL") {
      setProjectData(Data);
      return;
    }
    const updatedList = Data.filter((curElem) => {
      return curElem.category === category;
    });
    setProjectData(updatedList);
  };

  return (
    <>
      <Navbar List={List} filterItem={filterItem} />
      <Card ProjectData={ProjectData} />
    </>
  );
};

export default Resturant;

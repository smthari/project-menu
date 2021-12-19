import { React, useState } from "react";
import "../index.css";
import Item from "./ProjectItems";
import Navbar from "./Navbar";
import Card from "./Card";

// console.log(Item);

// getting unique category from Item
// array map method Item.map just list out all category with multiple same value
// that's why we used ... new Set method to get unique value
const uniqueCategory = [
  "ALL",
  ...new Set(
    Item.map((curItem) => {
      return curItem.category;
    })
  ),
];

// console.log(uniqueCategory);

const Resturant = () => {
  const [ProjectItem, setProjectItem] = useState(Item);
  const [categoryList, setcategoryList] = useState(uniqueCategory);

  // filter function
  const filterItem = (category) => {
    // condition for all button
    if (category === "ALL") {
      setProjectItem(Item);
      return;
    }
    // condition for all button except "all" button
    // when curItem.cateogyr equal to category parameter of function setProjectItem to updatedLIst
    const updatedList = Item.filter((curItem) => {
      return curItem.category === category;
    });
    setProjectItem(updatedList);
  };

  return (
    <>
      {/* passing List state and filterItem function as props  */}
      <Navbar categoryList={categoryList} filterItem={filterItem} />
      {/* passing ProjectItem state as a props  */}
      <Card ProjectItem={ProjectItem} />
    </>
  );
};

export default Resturant;

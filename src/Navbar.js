import React from "react";

function Navbar({ List, filterItem }) {
  return (
    <>
      <nav>
        {List.map((curEle) => {
          return <button onClick={() => filterItem(curEle)}>{curEle}</button>;
        })}
      </nav>
    </>
  );
}

export default Navbar;

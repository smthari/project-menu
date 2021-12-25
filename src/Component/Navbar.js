import React from "react";

function Navbar({ categoryList, filterItem }) {
  return (
    <>
      <nav>
        {categoryList.map((curCategory) => {
          return (
            <button onClick={() => filterItem(curCategory)}>
              {curCategory}
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default Navbar;

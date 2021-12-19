import React from "react";

// passed categoryList and filterItems props
function Navbar({ categoryList, filterItem }) {
  return (
    <>
      <nav>
        {/* rendering multiple reusable button component using Array.map() method */}
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

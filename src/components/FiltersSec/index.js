import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import FilteredProducts from "./FilteredProducts";
import Style from "./styles.module.css";

const FiltersSec = ({ data, sortby }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className={Style.filtered}>
      <div className={Style.mainContainer}>
      <Filter data={data} select={setSelectedCategory} />
      <FilteredProducts
        data={data}
        selected={selectedCategory}
        sortby={sortby}
      />
    </div>
    </div>
    
  );
};

export default FiltersSec;

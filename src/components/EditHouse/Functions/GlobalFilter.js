import React from "react";

import { GlobalFilterSpan } from "../EditHouseElements";


const Search = ({ filter, setFilter }) => {
  return (
      <GlobalFilterSpan>
    <span>
        {/* //set empty init value */}
      Search: {""}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
      </GlobalFilterSpan>

  );
};

export default Search;

import React, {useState} from "react";
import { useAsyncDebounce } from "react-table";

import { GlobalFilterSpan } from "../EditHouseElements";


const Search = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)

  // wait .2 ms for fetching

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 200)

  return (
      <GlobalFilterSpan>
    <span>
        {/* //set empty init value */}
      Search: {""}
      <input value={value || ""} onChange={(e) =>{ setValue(e.target.value)
                                                  onChange(e.target.value)}} />
    </span>
      </GlobalFilterSpan>

  );
};

export default Search;

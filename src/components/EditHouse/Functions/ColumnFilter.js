import React from "react";



const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
  return (
    
      <span>
        {/* //set empty init value */}
         {""}
        <input
          value={filterValue || ''}
          onChange={(e) => setFilter(e.target.value)}
          placeholder='Search'
        />
      </span>
   
  );
};

export default ColumnFilter;

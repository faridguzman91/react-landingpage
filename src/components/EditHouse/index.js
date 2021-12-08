import React from "react";
import {
  Container,
  TableWrapper,
  TableButtonEdit,
  TableButtonContainer,
  TableButtonRemove,
  TableButtonAddHouse,
  TableButtonRowEdit,
  TableButtonAddColumn,
} from "./EditHouseElements";
import Table from "./Table/Table";
import SortingTable from "./Table/SortingTable";
import FilteringTable from "./Table/FilteringTable";
import PaginationTable from "./Table/PaginationTable";
import RowSelectionTable from "./Table/RowSelectionTable";
import * as AiIcons from "react-icons/ai";

const EditHouse = () => {
  return (
    <div>
      <Container>
        <TableWrapper>
          <TableButtonContainer>
            <TableButtonEdit title="Edit Bulk Row">
              <AiIcons.AiFillEdit />
            </TableButtonEdit>

            <TableButtonRemove title="Remove Row(s)">
              <AiIcons.AiFillDelete />
            </TableButtonRemove>

            <TableButtonRowEdit title="Edit Row">
              <AiIcons.AiOutlineEdit />
            </TableButtonRowEdit>

            <TableButtonAddHouse title="Add Row">
              <AiIcons.AiOutlineInsertRowBelow />
            </TableButtonAddHouse>

            <TableButtonAddColumn title="Add Column">
              <AiIcons.AiOutlineInsertRowRight />
            </TableButtonAddColumn>
          </TableButtonContainer>
          {/* <Table />
                    <SortingTable /> */}
          {/* <FilteringTable /> */}
          {/* <PaginationTable/> */}
          <RowSelectionTable />
        </TableWrapper>
      </Container>
    </div>
  );
};

export default EditHouse;

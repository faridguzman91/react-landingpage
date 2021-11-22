import React from 'react'
import {Container, TableWrapper} from './EditHouseElements'
import Table from './Table/Table'
import SortingTable from './Table/SortingTable'
import FilteringTable from './Table/FilteringTable'
import PaginationTable from './Table/PaginationTable'

const EditHouse = () => {
    return (
        <div>
            <Container>
                <TableWrapper>
                    {/* <Table />
                    <SortingTable /> */}
                    {/* <FilteringTable /> */}
                    <PaginationTable/>
                </TableWrapper>

            </Container>
            
        </div>
    )
}

export default EditHouse

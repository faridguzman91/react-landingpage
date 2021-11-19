import React from 'react'
import {Container, TableWrapper} from './EditHouseElements'
import Table from './Table/Table'
import SortingTable from './Table/SortingTable'
import FilteringTable from './Table/FilteringTable'

const EditHouse = () => {
    return (
        <div>
            <Container>
                <TableWrapper>
                    {/* <Table />
                    <SortingTable /> */}
                    <FilteringTable />
                </TableWrapper>

            </Container>
            
        </div>
    )
}

export default EditHouse

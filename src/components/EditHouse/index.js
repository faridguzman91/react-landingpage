import React from 'react'
import {Container, TableWrapper} from './EditHouseElements'
import Table from './Table/Table'
import SortingTable from './Table/SortingTable'

const EditHouse = () => {
    return (
        <div>
            <Container>
                <TableWrapper>
                    <SortingTable />
                </TableWrapper>

            </Container>
            
        </div>
    )
}

export default EditHouse

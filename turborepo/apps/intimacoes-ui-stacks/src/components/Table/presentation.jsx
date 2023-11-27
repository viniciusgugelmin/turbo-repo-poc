import { styled } from 'twin.macro'

import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"

const Table = styled(DataTable)``

const TablePresentation = ({ value, columns }) => {
    return (
        <Table value={value}>
            {columns.map((props) => <Column {...props} />)}
        </Table>
    )
}

export default TablePresentation

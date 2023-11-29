import { styled } from 'twin.macro'

import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"

const Table = styled(DataTable)``

const TablePresentation = ({ value, columns }) => {
    return (
        <Table
            resizableColumns
            value={value}
            className="p-4"
            pt={{
                root: "w-full",
                thead: "text-gray-400",
                headerRow: "border-b-2 border-gray-200",
            }}
        >
            {columns.map((props) => (
                <Column
                    pt={{
                        root: "border border-gray-200"
                    }}
                    {...props}
                />
            ))}
        </Table>
    )
}

export default TablePresentation

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";

const Restaurent = (props) => {
    const [tutorials, setTutorials] = useState([]);
    const deleteRow = (rowIndex) => {

    };

    const columns = useMemo(
        () => [
            {
                Header: "Person",
                accessor: "person",
            },
            {
                Header: "Job",
                accessor: "job",
            },
            {
                Header: "Position",
                accessor: "position",
            },
            {
                Header: "Employee No",
                accessor: "employeeNo",
            },
            {
                Header: "Action",
                accessor: "action",
            }, {
                Header: "Actions",
                accessor: "actions",
                Cell: (props) => {
                    const rowIdx = props.row.id;
                    return (
                        <div>
                            <span>
                                <i className="far fa-edit action mr-2"></i>
                            </span>

                            <span onClick={() => deleteRow(rowIdx)}>
                                <i className="fas fa-trash action"></i>
                            </span>
                        </div>
                    );
                },
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: tutorials,
    });

    return (
        <div className="list row">

            <div className="col-md-12 list">
                <table
                    className="table table-striped table-bordered"
                    {...getTableProps()}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Restaurent;
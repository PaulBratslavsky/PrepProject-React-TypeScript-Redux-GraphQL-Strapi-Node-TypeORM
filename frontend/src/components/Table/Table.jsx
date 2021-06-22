import { useState, useEffect, Children } from "react";
import { Table as ReactTable } from "react-bootstrap";
import TableRow from "./TableRow";
import styles from "./table.module.scss";

export default function Table({ children, sourceData }) {
  const columns = Children.toArray(children);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (sourceData) setData(sourceData);
  }, [sourceData]);

  return (
    <div className={styles.tableStyles}>
    <ReactTable responsive="xl">
      <thead>
        <tr>
          <th>#</th>
          {columns.map((column) => (
            <th>{column.props.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={row.id} row={row} columns={columns} index={index} />
        ))}
      </tbody>
    </ReactTable>
    </div>
  );
}

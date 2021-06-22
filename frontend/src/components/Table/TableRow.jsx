import { LinkContainer } from "react-router-bootstrap";
import { useRouteMatch } from "react-router-dom";
export default function TableRow({ row, columns, index }) {
  const { url } = useRouteMatch()
  console.log(url, row.id)
  return (
    <LinkContainer to={`${url}/${row.id}/taskquicklook`}>
    <tr>
      <td>{index + 1}</td>
      {columns.map((column) => {
        const result = Object.keys(row).find(
          (item) => item === column.props.source
        );

        if (column.props.render)
          return <td>{column.props.render(row[result])}</td>;

        return <td>{row[result]}</td>;
      })}
    </tr>
    </LinkContainer>
  );
}

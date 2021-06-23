import Table from "../Table/Table";
import TableColumn from "../Table/TableColumn";
import { useQuery } from "@apollo/client";
import { GET_STEPS_BY_MILESTONE_ID } from "../../apollo/quiries";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function StepsTable() {
  const { stepsId } = useParams();

  const { loading, error, data }  = useQuery(GET_STEPS_BY_MILESTONE_ID, {
    variables: { input: stepsId },
  });

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;
  if (!data.steps.length) return null;

  console.log(data.steps);

  return (
    <Table sourceData={data.steps}>
      <TableColumn source="name" label="name" />
      <TableColumn source="type" label="type" />
      <TableColumn source="completed" label="completed" render={data => <span className="text-warning">{data ? "Yes" : "No"}</span>}/>
    </Table>
  );
}

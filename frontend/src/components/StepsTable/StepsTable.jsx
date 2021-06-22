import Table from "../Table/Table";
import TableColumn from "../Table/TableColumn";
import GetStepsByMilestoneId from "../../hooks/getStepsByMilestoneId";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function StepsTable() {
  const { stepsId } = useParams();
  const { loading, error, data } = GetStepsByMilestoneId(stepsId);

  console.log(stepsId, "WHAHTH")

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;
  if (!data.steps.length) return null;

  console.log(data.steps);

  return (
    <Table sourceData={data.steps}>
      <TableColumn source="name" label="name" />
      <TableColumn source="type" label="type" />
      <TableColumn source="completed" label="completed" />
    </Table>
  );
}

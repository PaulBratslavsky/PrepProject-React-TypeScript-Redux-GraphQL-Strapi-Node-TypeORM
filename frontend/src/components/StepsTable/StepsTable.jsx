import Table  from "../Table/Table"
import TableColumn from "../Table/TableColumn"
import GetAssetById from "../../hooks/getAssetById" 


export default function StepsTable({stepsId}) {
  console.log(stepsId, "helo")
  return (
    <Table sourceData={[]}>
      <TableColumn source="id" label="id" />
    </Table>
  )
}

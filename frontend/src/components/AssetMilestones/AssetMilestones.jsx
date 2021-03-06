import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ASSET_BY_ID } from "../../apollo/quiries";
import MilestoneList from "../MilestoneList/MilestoneList";

export default function AssetMilestones() {
  const { assetId } = useParams();

  const { loading, error, data }  = useQuery(GET_ASSET_BY_ID, {
    variables: { input: assetId },
  });

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;

  return (
    <div>
      <h2 style={{fontSize: "1.6rem"}} className="mb-3">
          {data.asset.name}{" "}
          <span className="text-warning">
            Milestone{data.asset.milestones.length > 1 ? "s" : ""} (
            <span className="text-light">
              {data.asset.milestones.length}
            </span>
            )
          </span>
        </h2>
      <MilestoneList listItems={data.asset.milestones} />
    </div>
  )
}

import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ORGANIZATION_BY_ID } from "../../apollo/quiries";
import AssetsList from "../AssetList/AssetList";

export default function OrganizationAssets() {
  const params = useParams();

  const { loading, error, data }  = useQuery(GET_ORGANIZATION_BY_ID, {
    variables: { input: params.organizationId },
  });

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;

  return (
    <div>
      <h2 style={{ fontSize: "1.6rem" }} className="mb-3">
        {data.organization.name}{" "}
        <span className="text-secondary">
          Asset{data.organization.assets.length > 1 ? "s" : ""} (
          <span className="text-light">{data.organization.assets.length}</span>)
        </span>{" "}
      </h2>
      <AssetsList listItems={data.organization.assets} />
    </div>
  );
}

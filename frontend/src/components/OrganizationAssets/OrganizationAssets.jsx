import { useParams } from "react-router-dom";
import { Container, Col, Spinner } from "react-bootstrap";
import GetOrganizationById from "../../hooks/getOrganizationById";
import AssetsList from "../AssetList/AssetList";

export default function OrganizationAssets() {
  const { id } = useParams();

  const { loading, error, data } = GetOrganizationById(id);

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;

  console.log(loading, error, data);
  console.log(data.organization.assets);
  return (
    <div>
      <header className="d-flex justify-content-between align-items-center px-3 pb-3">
        <h2>
          {data.organization.name}{" "}
          <span className="text-secondary">
            Asset{data.organization.assets.length > 1 ? "s" : ""} (
            <span className="text-light">
              {data.organization.assets.length}
            </span>
            )
          </span>{" "}
        </h2>
        <h2>
          <span className="text-warning">
            Members (
            <span className="text-light">{data.organization.users.length}</span>
            )
          </span>
        </h2>
      </header>
      <Col xl={4} lg={6} md={12}>
        <AssetsList listItems={data.organization.assets} />
      </Col>
    </div>
  );
}

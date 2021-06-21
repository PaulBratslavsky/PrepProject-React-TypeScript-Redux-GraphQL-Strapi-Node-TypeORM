import { useParams } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
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
    <Row>
      <Col xl={4} lg={6} md={12}>
        <div>
          <h2>
            {data.organization.name}{" "}
            <span className="text-secondary">
              Asset{data.organization.assets.length > 1 ? "s" : ""}
            </span>
          </h2>
        </div>
        <AssetsList listItems={data.organization.assets} />
      </Col>
    </Row>
  );
}

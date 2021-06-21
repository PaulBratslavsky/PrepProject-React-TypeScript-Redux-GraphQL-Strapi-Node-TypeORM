import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { Col, Row, Spinner } from "react-bootstrap";
import GetOrganizationById from "../../hooks/getOrganizationById";
import AssetsList from "../AssetList/AssetList";
import OrganizationHeader from "../OrganizationHeader/OrganizationHeader";

export default function OrganizationAssets() {
  const { id } = useParams();
  const { path } = useRouteMatch();

  const { loading, error, data } = GetOrganizationById(id);

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;

  console.log(loading, error, data);
  return (
    <div>
      <Row>
        <Col xl={4} lg={6} md={12}>
        <h2 style={{fontSize: "1.6rem"}} className="mb-3">
          {data.organization.name}{" "}
          <span className="text-secondary">
            Asset{data.organization.assets.length > 1 ? "s" : ""} (
            <span className="text-light">
              {data.organization.assets.length}
            </span>
            )
          </span>{" "}
        </h2>
          <AssetsList listItems={data.organization.assets} />
        </Col>
        <Col xl={8} lg={6} md={12}>
          <Switch>
          <Route path={`${path}/:id/milestones`}>
            <p>create milestone section</p>
          </Route> 
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

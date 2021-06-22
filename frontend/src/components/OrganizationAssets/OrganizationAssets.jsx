import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import GetOrganizationById from "../../hooks/getOrganizationById";
import AssetsList from "../AssetList/AssetList";
import AssetMilestones from "../AssetMilestones/AssetMilestones";
import StepsTable from "../Table/Table";
import styles from "./organization-assets.module.scss";

export default function OrganizationAssets() {
  const params = useParams();
  const { path } = useRouteMatch();

  console.log(params, path, "hello")

  const { loading, error, data } = GetOrganizationById(params.organizationId);

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;

  return (
    <Container fluid className={styles.organizationGrid}>
      <Row className={styles.scroll}>
        <Col xl={4} lg={6} md={12} className="my-3">
          <h2 style={{ fontSize: "1.6rem" }} className="mb-3">
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
        <Col xl={8} lg={6} md={12} className="my-3">
          <Switch>
            <Route path={`${path}/:assetId/milestones/`}>
              <AssetMilestones />
            </Route>
          </Switch>
        </Col>
      </Row>
      <Row className={styles.scroll}>
        <Container fluid>
          <Switch>
            <Route path={`${path}/:assetId/milestones/:stepsId/steps`}>
              <StepsTable />
            </Route>
          </Switch>
        </Container>
      </Row>
    </Container>
  );
}

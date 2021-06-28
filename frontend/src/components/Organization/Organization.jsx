import { Route, useRouteMatch, useHistory } from "react-router-dom";
import OrganizationAssets from "../OrganizationAssets/OrganizationAssets";
import AssetMilestones from "../AssetMilestones/AssetMilestones";
import StepsTable from "../StepsTable/StepsTable";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Organization() {
  const { path } = useRouteMatch();
  const history = useHistory();

  return (
    <Container fluid className="h-100">
      <Row className="h-50 scroll">
        <Col xl={4} className="my-3">
          <Route path={`${path}/:organizationId/assets`}>
            <OrganizationAssets />
          </Route>
        </Col>
        <Col xl={8} className="my-3">
          <Route path={`${path}/:organizationId/assets/:assetId/milestones/`}>
            <AssetMilestones />
          </Route>
        </Col>
      </Row>
      <Row className="h-50 scroll bg-dark">
        <Col xl={12} className="my-3">
          <Route
            exact
            path={`${path}/:organizationId/assets/:assetId/milestones/:stepsId/steps`}
          > <StepsTable />
           
          </Route>
          <Route
            path={`${path}/:organizationId/assets/:assetId/milestones/:stepsId/steps/:taskId/taskquicklook`}
          >
            <h1>task quick look</h1>{" "}
            <Button variant="warning" onClick={() => history.goBack()}>
              Back
            </Button>
          </Route>
        </Col>
      </Row>
    </Container>
  );
}

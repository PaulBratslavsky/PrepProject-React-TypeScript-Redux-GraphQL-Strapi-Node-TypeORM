import { Switch, Route, useRouteMatch } from "react-router-dom";
import OrganizationAssets from "../OrganizationAssets/OrganizationAssets";

export default function Organization() {
  const { path } = useRouteMatch()
  return (
      <Switch>
        <Route path={`${path}/:organizationId/assets`}>
          <OrganizationAssets />
        </Route> 
      </Switch>
  )
}

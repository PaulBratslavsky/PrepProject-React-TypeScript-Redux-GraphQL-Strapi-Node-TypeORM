import { Switch, Route, useRouteMatch } from "react-router-dom";
import OrganizationAssets from "../OrganizationAssets/OrganizationAssets";

export default function Assets() {
  const { path } = useRouteMatch()
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h2>Please select an organization.</h2>
        </Route>
        <Route path={`${path}/:id`}>
          <OrganizationAssets />
        </Route> 
      </Switch>
    </div>
  )
}

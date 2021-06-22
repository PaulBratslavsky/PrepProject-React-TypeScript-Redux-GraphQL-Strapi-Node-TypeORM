import { Switch, Route, useRouteMatch } from "react-router-dom";
import OrganizationAssets from "../OrganizationAssets/OrganizationAssets";

export default function Organization() {
  const { path } = useRouteMatch()
  return (
    <div>
      <Switch>
        <Route path={`${path}/:id/assets`}>
          <OrganizationAssets />
        </Route> 
      </Switch>
    </div>
  )
}

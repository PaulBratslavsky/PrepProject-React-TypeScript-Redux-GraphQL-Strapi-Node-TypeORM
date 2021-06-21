import UserAvatar from "../UserAvatar/UserAvatar";
import Organizations from "../Organizations/Organizations";
import GetOrganizationsByUser from "../../hooks/getOrganizationsByUser";
import { Spinner } from "react-bootstrap";

export default function SideMenu() {
  const { loading, error, data } =  GetOrganizationsByUser();

  if (loading) return <Spinner animation="grow" variant="primary" />
  if (error) return <p>error</p>
  return (
    <div>
      <UserAvatar showName user={data.user} />
      <Organizations listItems={data.user.organizations} />
    </div>
  );
}

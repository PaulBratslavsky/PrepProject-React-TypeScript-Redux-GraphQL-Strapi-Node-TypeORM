import UserAvatar from "../UserAvatar/UserAvatar";
import List from "../List/Organizations";
import GetOrganizationByUser from "../../hooks/getOrganizationByUser";
import { Spinner } from "react-bootstrap";

export default function SideMenu() {
  const { loading, error, data } =  GetOrganizationByUser();

  if (loading) return <Spinner animation="grow" variant="primary" />
  if (error) return <p>error</p>
  return (
    <div>
      <UserAvatar showName user={data.user} />
      <List listItems={data.user.organizations} />
    </div>
  );
}

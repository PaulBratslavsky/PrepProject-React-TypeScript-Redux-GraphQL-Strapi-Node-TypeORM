import OrganizationItem from "../OrganizationItem/OrganizationItem";
import { Nav, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ORGANIZATIONS } from "../../apollo/quiries/getOrganizations";

export default function Organizations() {
  const { loading, error, data } =  useQuery(GET_ORGANIZATIONS);

  if (loading) return <Spinner animation="grow" variant="primary" />
  if (error) return <p>error</p>

  return (
    <div>
      <h3 className="px-3 text-secondary">Organization{data.organizations.length > 1 ? "s" : ""}</h3>
      <Nav className="flex-column">
        {data.organizations.map((item) => (
          <OrganizationItem key={item.id} {...item} />
        ))}
      </Nav>
    </div>
  );
}


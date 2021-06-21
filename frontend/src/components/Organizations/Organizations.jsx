import OrganizationItem from "../OrganizationItem/OrganizationItem";
import { Nav } from "react-bootstrap";

export default function Organizations({ listItems = [] }) {
  return (
    <div>
      <h3 className="px-3 text-secondary">Organization{listItems.length > 1 ? "s" : ""}</h3>
      <Nav className="flex-column">
        {listItems.map((item) => (
          <OrganizationItem key={item.id} {...item} />
        ))}
      </Nav>
    </div>
  );
}


import ListItem from "../ListItem/OrganizationItem";
import { Nav } from "react-bootstrap";

export default function Organizations({ listItems = [] }) {
  console.log(listItems);
  return (
    <div>
      <h3 className="px-3 text-secondary">Organization{listItems.length > 0 ? "s" : ""}</h3>
      <Nav className="flex-column">
        {listItems.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </Nav>
    </div>
  );
}


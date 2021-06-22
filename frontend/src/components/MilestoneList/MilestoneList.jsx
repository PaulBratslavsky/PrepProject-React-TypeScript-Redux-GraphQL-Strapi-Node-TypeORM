import MilestoneItem from "../MilestoneItem/MilestoneItem";
import { Nav } from "react-bootstrap";

export default function MilestoneList({ listItems = [] }) {
  return (
    <div>
      <Nav className="flex-column">
        {listItems.map((item) => (
          <MilestoneItem key={item.id} {...item} />
        ))}
      </Nav>
    </div>
  );
}


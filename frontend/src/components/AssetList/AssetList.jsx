import AssetItem from "../AssetItem/AssetItem";
import { Nav } from "react-bootstrap";

export default function AssetsList({ listItems = [] }) {
  console.log(listItems);
  return (
    <div>
      <Nav className="flex-column">
        {listItems.map((item) => (
          <AssetItem key={item.id} {...item} />
        ))}
      </Nav>
    </div>
  );
}


import { LinkContainer } from "react-router-bootstrap";
import styled from "./organization-item.module.scss";
import { Badge } from "react-bootstrap";
export default function OrganizationItem({ id, name, assets }) {
  return (
    <LinkContainer to={"/assets/" + id} className={styled.organizationItem}>
      <div className={styled.itemContainer}>
      <span>{name}</span>
      <Badge pill variant="primary">
        {assets.length}
      </Badge>
      </div>
    </LinkContainer>
  );
}
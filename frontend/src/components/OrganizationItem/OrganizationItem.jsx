import { LinkContainer } from "react-router-bootstrap";
import styled from "./organization-item.module.scss";
import { Badge } from "react-bootstrap";
export default function OrganizationItem({ id, name, assets }) {
  return (
    <LinkContainer to={"/organization/" + id + "/assets"} className={styled.organizationItem}>
      <div className={styled.organizationContainer}>
      <span>{name}</span>
      <Badge pill variant="primary">
        {assets.length}
      </Badge>
      </div>
    </LinkContainer>
  );
}
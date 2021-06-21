import { LinkContainer } from "react-router-bootstrap";
import { useRouteMatch  } from "react-router";
import styled from "./asset-item.module.scss";
export default function OrganizationItem({ id, name, milestones }) {
  const { url } = useRouteMatch();

  console.log(url);
  return (
    <LinkContainer to={`${url}/${id}/milestones`} className={styled.assetItem}>
      <div className={styled.assetContainer}>
        <span>{name}</span>
        <span className="text-secondary font-weight-bold">{milestones.length}</span>
      </div>
    </LinkContainer>
  );
}

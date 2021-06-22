import { LinkContainer } from "react-router-bootstrap";
import { useRouteMatch  } from "react-router";
import styled from "./asset-item.module.scss";
export default function OrganizationItem({ id, name, milestones }) {
  const { url } = useRouteMatch();
  return (
    <LinkContainer to={`${url}/${id}/milestones`} className={styled.assetItem}>
      <div className={styled.assetContainer}>
        <span className='text-light'>{name}</span>
        <span className="font-weight-bold">{milestones.length}</span>
      </div>
    </LinkContainer>
  );
}

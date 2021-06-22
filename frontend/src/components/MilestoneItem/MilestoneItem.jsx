import { LinkContainer } from "react-router-bootstrap";
import { useRouteMatch  } from "react-router";
import styled from "./milestone-item.module.scss";
export default function MilestoneItem({ id, name, steps }) {
  const { url } = useRouteMatch();

  console.log(url);
  return (
    <LinkContainer to={`${url}/${id}/milestones`} className={styled.milestoneItem}>
      <div className={styled.milestoneContainer}>
        <span>{name}</span>
        {/* <span className="text-secondary font-weight-bold">{steps.length}</span> */}
      </div>
    </LinkContainer>
  );
}

import { LinkContainer } from "react-router-bootstrap";
import { useRouteMatch, useParams  } from "react-router-dom";
import styled from "./milestone-item.module.scss";
export default function MilestoneItem({ id, name, steps = [] }) {
  const { url } = useRouteMatch();
  const params = useParams()
  console.log(`${url}/${id}/steps`, params)
  return (
    <LinkContainer to={`${url}/${id}/steps`} className={styled.milestoneItem}>
      <div className={styled.milestoneContainer}>
        <span>{name}</span>
        <span className="text-warning font-weight-bold">{steps.length}</span>
      </div>
    </LinkContainer>
  );
}

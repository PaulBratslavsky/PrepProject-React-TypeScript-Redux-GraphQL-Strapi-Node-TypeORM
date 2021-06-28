import { useState, Fragment } from "react";
import Table from "../Table/Table";
import TableColumn from "../Table/TableColumn";
import { useQuery } from "@apollo/client";
import { GET_MILESTONE_BY_MILESTONE_ID } from "../../apollo/quiries";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ModalHeader from "../ModalContainer/ModalHeader";
import ModalContainer from "../ModalContainer/ModalContainer";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { useSelector } from "react-redux";
import AgGrid from "../AgGrid/AgGrid";


export default function StepsTable({setRefresh}) {
  const { stepsId } = useParams();
  const userId = useSelector((state) => state.user.id);

  const { loading, error, data } = useQuery(GET_MILESTONE_BY_MILESTONE_ID, {
    variables: { input: stepsId },
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  console.log(data, "WHAT");

  if (loading) return <Spinner animation="grow" variant="primary" />;
  if (error) return <p>error</p>;
  if (!data.milestone.steps.length) return null;

  console.log(data.milestone.name);

  return (
    <Fragment>
  
      <ModalHeader onClick={setIsOpen} name={data.milestone.name}/>
      <AgGrid rowData={data.milestone.steps} />
      <ModalContainer
        isOpen={isOpen}
        handleClose={handleClose}
        heading="Add New Task"
      >
        <AddTaskForm milestoneId={data.milestone.id} userId={userId} setRefresh={setRefresh}/>
      </ModalContainer>
    </Fragment>
  );
}

import { Button } from "react-bootstrap";

export default function ModalHeader({onClick, name}) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2>{name} - Tasks</h2>
      <Button variant="primary" onClick={() => onClick(true)}>
        Add Task
      </Button>
    </div>
  );
}

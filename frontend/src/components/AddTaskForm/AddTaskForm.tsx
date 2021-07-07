// import { Redirect } from "react-router";
import { useMutation } from "@apollo/client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Form, Button, Spinner } from "react-bootstrap";
import styles from "./add-task-form.module.scss";
import { POST_CREATE_STEP } from "../../apollo/mutations";
import { GET_MILESTONE_BY_MILESTONE_ID } from "../../apollo/quiries";

interface IFormInput {
  type: string;
  name: string;
  description: string;
  completed: boolean;
  dueData: string;
  milestone: string;
}

interface IAddTaskForm {
  milestoneId: string;
  userId: string;
}

export default function AddTaskForm({ milestoneId, userId }: IAddTaskForm) {
  console.log(milestoneId, "Is this missing")
  const [CreateStep, { data, error, loading }] = useMutation(POST_CREATE_STEP, {
    refetchQueries: [
      {
        query: GET_MILESTONE_BY_MILESTONE_ID,
        variables: { input: milestoneId }, 
      },
    ],
  });

  const {
    control,
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    CreateStep({
      variables: {
        type: data.type,
        name: data.name,
        description: data.description,
        completed: false,
        milestone: milestoneId,
        created_by: userId,
      },
    });
    reset({ name: "", description: "" });
  };

  if (loading) return <Spinner animation="grow" variant="primary" />;
  // if (data) return <Redirect to="/" />;
  /* 
    TODO 1: Add todo Type Select Box (default to task)
    TODO 2: Add name input field (required )
    TODO 3: Add description textfield (optional)
    TODO 4: Add date due box (optional)
    TODO 5: completed should automaticaly be set to false
    TODO 6: milestone should be automaticaly set
  */
  return (
    <Form className={styles.addTaskForm} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Controller
          name="type"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              className="form-select"
              aria-label="Default select example"
              {...register("type", { required: true })}
              {...field}
            >
              <option value="step">Step</option>
              <option value="blocker">Blocker</option>
              <option value="bug">Bug</option>
            </select>
          )}
        />
        <Form.Control.Feedback type="invalid">
          Task Name is Required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              type="text"
              placeholder="Task Name"
              isInvalid={!!errors.name}
              {...register("name", { required: true })}
              {...field}
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          Task Name is Required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              type="text"
              placeholder="description"
              isInvalid={!!errors.description}
              {...register("description", { required: false })}
              {...field}
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Row className="mx-0">
        <Button className="ml-auto" variant="primary" type="submit">
          Login
        </Button>
        {error && <h4>Server Error: {error?.message}</h4>}
      </Form.Row>
    </Form>
  );
}

import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../redux/slice/userSlice";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import styles from "./login-form.module.scss";

interface IFormInput {
  username: string;
  password: string;
}

export default function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { control, register, reset, formState: { errors }, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data, event) => {
    console.log(data, "message");
    dispatch(loginUser({user: data, token: "435h23j5h234kj5h"}))
    reset({username: '', password: ''}); 
    history.push('/')
  };

  console.log(errors, "error")

  return (
    <Form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({field}) => (
            <Form.Control
              type="text"
              placeholder="Username"
              isInvalid={!!errors.username}
              {...register("username", { required: true  } )}
              {...field}
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid username.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          
          render={({ field }) => (
            <Form.Control
              type="password"
              placeholder="Password"
              isInvalid={!!errors.password}
              {...register("password", { required: true } )}
              {...field}
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

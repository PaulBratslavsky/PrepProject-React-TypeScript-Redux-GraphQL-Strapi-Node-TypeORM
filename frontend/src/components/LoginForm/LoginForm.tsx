import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../redux/slice/userSlice";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import styles from "./login-form.module.scss";

const LOGIN_USER = gql`
  mutation loginMutation($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
      }
    }
  }
`;

interface IFormInput {
  username: string;
  password: string;
}

export default function LoginForm() {
  const dispatch = useDispatch();
  const [loginMutation, { data, error, loading }] = useMutation(LOGIN_USER);
  
  useEffect(() => {
    if (data) {
      dispatch(loginUser({user: data.login.user, token: data.login.jwt}))
    }
  },[data, dispatch])

  const { control, register, reset, formState: { errors }, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    loginMutation({
      variables: {
        input: {
          identifier: data.username,
          password: data.password,
        },
      },
    });
    reset({username: '', password: ''}); 
  };

  if (loading) return <p>...loading</p>
  if (data) return <Redirect to="/" />

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
      <Form.Row className="mx-0">
      <Button className="ml-auto" variant="primary" type="submit">
        Login
      </Button>
      {error && <h4>Server Error: {error?.message}</h4>}
      </Form.Row>
    </Form>
  );
}


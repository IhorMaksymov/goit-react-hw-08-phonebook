import { useDispatch } from "react-redux";

import { register } from "redux/auth/authOperation";

import { Container, Form, Label, Input, BtnSub } from "./RegisterFormStyled";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <BtnSub type="submit">Register</BtnSub>
      </Form>
    </Container>
  );
};

export default RegisterForm;
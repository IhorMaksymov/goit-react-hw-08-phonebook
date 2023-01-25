import { useDispatch } from "react-redux";

import { logIn } from "redux/auth/authOperation";

import { Container, Form, Label, Input, BtnSub } from "./LoginFormStyled";

const LoginForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Label>
                    Email
                    <Input type='email' name='email' />
                </Label>
                <Label>
                    Password
                    <Input type='password' name='password' />
                </Label>
                <BtnSub type='submit'>Log In</BtnSub>
            </Form>
        </Container>
    )
}

export default LoginForm;
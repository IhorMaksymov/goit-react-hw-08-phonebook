import { Helmet } from "react-helmet";
import LoginForm from "components/LoginForm";

const Login = () => {
    return (
        <>
             <Helmet>
                <h2>Login</h2>
            </Helmet>
            <LoginForm />
        </>
    )
}

export default Login;
import { Helmet } from "react-helmet";
import RegisterForm from "components/RegisterForm";

const Register = () => {
    return (
        <>
             <Helmet>
                <h2>Registration</h2>
            </Helmet>
            <RegisterForm />
        </>
    )
}

export default Register;
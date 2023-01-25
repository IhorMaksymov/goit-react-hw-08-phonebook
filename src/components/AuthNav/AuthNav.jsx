import { NavRegister, NavLonIn } from "./AuthNavStyled";

const AuthNav = () => {
    return (
        <div>
            <NavRegister to='/register'>Register</NavRegister>
            <NavLonIn to='/login'>Log in</NavLonIn>
        </div>
    )
}

export default AuthNav;
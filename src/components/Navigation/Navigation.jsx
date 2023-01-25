import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/authSelectors";

import { NavHome, NavContacts } from "./NavigationStyled";

const Navigation = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavHome to='/'>Home</NavHome>
            {isLoggedIn && (
                <NavContacts to='/contacts'>
                    Contscts
                </NavContacts>
            )}
        </nav>
    )
}

export default Navigation;
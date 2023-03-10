import { useSelector } from "react-redux";

import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";

import { selectIsLoggedIn } from "redux/auth/authSelectors";

import { Header } from "./AppBarStyled"

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav /> }
        </Header>
    )
}

export default AppBar;
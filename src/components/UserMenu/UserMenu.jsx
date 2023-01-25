import { useSelector, useDispatch } from "react-redux";

import { logOut } from "redux/auth/authOperation";

import { selectUser } from "redux/auth/authSelectors";

import { UserWrapp, P, Btn } from "./UserMenuStyled";

const UserMenu = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <UserWrapp>
            <P>Welcome, {user.name}</P>
            <Btn type="button" onClick={() => dispatch(logOut())}>Logout</Btn>
        </UserWrapp>
    )
}

export default UserMenu;
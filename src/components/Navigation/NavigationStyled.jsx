import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavHome = styled(NavLink)`
    color: ${p => p.theme.colors.brColors};
    text-decoration: none;
    margin-right: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    &:hover {
        color: ${p => p.theme.colors.btnColor}
    };
    &.active {
        color: ${p => p.theme.colors.btnColor};
        text-decoration: underline;
    };
`;

const NavContacts = styled(NavLink)`
    color: ${p => p.theme.colors.brColors};
    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    &:hover {
        color: ${p => p.theme.colors.btnColor}
    };
    &.active {
        color: ${p => p.theme.colors.btnColor};
        text-decoration: underline;
    };
`;

export { NavHome, NavContacts };
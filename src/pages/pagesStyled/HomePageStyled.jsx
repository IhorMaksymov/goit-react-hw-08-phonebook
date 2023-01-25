import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    font-size: ${p => p.theme.fontSizes.xl};
    margin-bottom: ${p => p.theme.space[4]}px;
`;

const P = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
`;

const Link = styled(NavLink)`
    color: ${p => p.theme.colors.btnColor};
`;

export { Container, Title, P, Link }
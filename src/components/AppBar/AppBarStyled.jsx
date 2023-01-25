import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    box-shadow: 0px 10px 5px -5px rgba(0,0,0,0.3);
    margin-bottom: ${p => p.theme.space[5]}px;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
`;

export { Header }
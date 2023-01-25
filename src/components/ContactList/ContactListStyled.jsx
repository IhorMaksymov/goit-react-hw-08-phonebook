import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
    margin-right: ${p => p.theme.space[3]}px;
`;

export const Btn = styled.button`
    background: ${p => p.theme.colors.btnColor};
    color: ${p => p.theme.colors.baseWhite};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    border: none;
    border-radius: ${p => p.theme.radii.average};
    font-size: ${p => p.theme.fontSizes.s};
    padding: ${p => p.theme.space[2]}px;
    text-transform: uppercase;
    &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3);
    }
`;
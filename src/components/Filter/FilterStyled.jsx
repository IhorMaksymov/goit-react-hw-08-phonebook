import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin-top: ${p => p.theme.space[2]}px;
    border: none;
    outline: none;
    width: 270px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: ${p => p.theme.radii.average};
    &:hover, :focus {
       box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2); 
    };
`;
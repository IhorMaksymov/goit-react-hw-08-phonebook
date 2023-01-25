import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FieldForm = styled(Form)`
    padding: ${p => p.theme.space[4]}px;
    display: flex;
    flex-direction: column;
    width: 300px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3);
    border-radius: ${p => p.theme.radii.average};
    padding: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Input = styled(Field)`
    margin-top: ${p => p.theme.space[2]}px;
    border: none;
    outline: none;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: ${p => p.theme.radii.average};
    &:hover, :focus {
       box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2); 
    };
`;

export const BtnSub = styled.button`
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
import styled from 'styled-components';
import * as variable from '../../../variables';
interface Props {
    isDisabled?: boolean;
}
export const StyledButton = styled.button<Props>`
    color: ${variable.white};
    background: ${variable.veryDarkViolet};
    opacity: 0.9;
    padding: 16px 24px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    ${(props) =>
        !props.isDisabled &&
        `&:hover {
        background: ${variable.veryDarkViolet};
        opacity: 1;
    }`}
    ${(props) => props.isDisabled && `cursor:default; opacity: 0.7;`}
`;

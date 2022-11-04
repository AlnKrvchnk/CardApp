import styled from 'styled-components';
import * as variable from '../../../variables';
interface Props {
    isError: boolean;
}
export const StyledInput = styled.input<Props>`
    display: block;
    outline: none;
    font-size: 18px;
    color: ${variable.veryDarkViolet};
    border: 1px solid ${variable.lightGrayishViolet};
    border-radius: 8px;
    padding: 12px 16px;
    width: calc(100% - 32px);
    &:hover,
    &:active,
    &:focus {
        border-color: ${variable.darkViolet};
    }
    &::placeholder {
        color: ${variable.lightGrayishViolet};
    }
    ${(props) => props.isError && `border-color:${variable.red};`}
`;

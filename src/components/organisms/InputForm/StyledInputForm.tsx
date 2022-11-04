import styled from 'styled-components';
import * as variable from '../../../variables';

export const StyledInputForm = styled.form`
    display: grid;
    grid-row-gap: 24px;
    position: relative;
    height: 100%;
    width: 400px;
    @media (max-width: ${variable.sm}) {
        grid-row-gap: 20px;
        width: calc(100% - 24px);
    }
    & > * {
        width: inherit;
    }
`;

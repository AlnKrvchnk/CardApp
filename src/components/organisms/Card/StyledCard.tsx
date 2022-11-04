import styled from 'styled-components';
import * as variable from '../../../variables';

export const StyledCard = styled.div`
    position: relative;
    & > *:not(:first-of-type) {
        margin-top: 32px;
        margin-left: 80px;
    }
    @media (max-width: ${variable.sm}) {
        width: 100%;
        margin-bottom: 25%;
        & > *:not(:first-of-type) {
            margin-top: 0;
            margin-left: auto;
            margin-right: 0;
        }
        & > *:first-of-type {
            position: absolute;
            top: 55%;
            z-index: 1;
        }
    }
`;

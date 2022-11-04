import styled from 'styled-components';
import * as variable from '../../variables';
export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 50vh;
    transform: translateY(-50%);
    & > div {
        width: 100%;
    }
    & > *:first-child {
        display: flex;
        justify-content: flex-end;
    }
    & > *:not(:first-child) {
        & > * {
            margin-left: 7.8vw;
        }
    }
    @media (max-width: ${variable.sm}) {
        flex-direction: column;
        top: 0;
        transform: translate(0);
        padding: 32px 16px;
        & > *:not(:first-child) {
            margin-top: 64px;
            & > * {
                margin: auto;
            }
        }
    }
`;

import styled from 'styled-components';
import * as variable from '../../../variables';

export const StyledSendBox = styled.div`
    width: 400px;
    & > div {
        display: grid;
        grid-row-gap: 16px;

        & > img {
            margin-bottom: 8px;
            width: 75px;
        }
        & > p {
            font-size: 32px;
            color: ${variable.veryDarkViolet};
            text-transform: uppercase;
        }
        & > span {
            font-size: 20px;
            color: ${variable.darkGrayishViolet};
            display: block;
            margin-bottom: 24px;
        }
        & > button {
            width: 100%;
        }
        & > * {
            text-align: center;
            margin: auto;
            @media (max-width: ${variable.sm}) {
                width: calc(100% - 24px);
            }
        }
    }
`;

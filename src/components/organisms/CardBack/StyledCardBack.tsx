import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledCardBack = styled.div`
    display: block;
    background: url('cardAssets/images/bg-card-back.png');
    background-size: cover;
    border-radius: 12px;
    width: 30vw;
    height: 15vw;
    padding: 1.6vw 2.1vw;
    position: relative;
    box-shadow: 0px 0px 4px ${variable.veryDarkViolet};

    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 0px 8px ${variable.veryDarkViolet};
    }
    color: ${variable.white};

    & span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 60px;
        font-size: 1.2vw;
    }

    @media (max-width: ${variable.sm}) {
        width: 76vw;
        height: 38vw;
        padding: 4.2vw 4.3vw;
        border-radius: 1.5vw;
        font-size: 1.8vw;

        & span {
            right: 32px;
        }
    }
`;

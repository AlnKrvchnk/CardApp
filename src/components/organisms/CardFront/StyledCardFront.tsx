import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledCardFront = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url('cardAssets/images/bg-card-front.png');
    background-size: cover;
    border-radius: 1vw;
    width: 30vw;
    height: 15vw;
    padding: 1.6vw 2.1vw;
    box-shadow: 0px 0px 4px ${variable.veryDarkViolet};
    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 0px 8px ${variable.veryDarkViolet};
    }
    & > .top {
        height: 100%;
        > img {
            display: block;
            height: 3.2vw;
            width: fit-content;
        }
    }
    & > .bottom {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: ${variable.white};
        .number {
            font-size: 2.4vw;
            letter-spacing: 0.1vw;
            text-align: center;
        }
        & > span {
            display: flex;
            justify-content: space-between;
            letter-spacing: 0.1vw;
            text-transform: uppercase;
            & > p {
                margin: 0;
                font-size: 1.2vw;
            }
        }
    }
    @media (max-width: ${variable.sm}) {
        width: 76vw;
        height: 38vw;
        padding: 4.2vw 4.3vw;
        border-radius: 1.5vw;
        & > .top {
            > img {
                height: 8.5vw;
            }
        }
        & > .bottom {
            .number {
                font-size: 5.2vw;
            }
            .name {
                font-size: 3.2vw;
            }
            .date {
                font-size: 2.6vw;
            }
        }
    }
`;

import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledBackground = styled.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    & div {
        display: block;
        height: 100%;
        width: 30%;
        background: url('cardAssets/images/bg-main-desktop.png');
        @media (max-width: ${variable.sm}) {
            height: 30%;
            width: 100%;
            background: url('cardAssets/images/bg-main-mobile.png');
        }
    }
`;

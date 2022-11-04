import styled from 'styled-components';

export const StyledInputFormBottomDate = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    & > label {
        grid-column: span 2;
    }
`;

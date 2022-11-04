import { StyledCardBack } from './StyledCardBack';
interface Props {
    cvc: string;
}

const CardBack = ({ cvc = '123' }: Props) => {
    return (
        <StyledCardBack>
            <span>{cvc}</span>
        </StyledCardBack>
    );
};
export default CardBack;

import CardBack from '../CardBack/CardBack';
import CardFront from '../CardFront/CardFront';
import { StyledCard } from './StyledCard';
interface Props {
    number: string;
    name: string;
    date: string;
    cvc: string;
}
const Card = ({ number, name, date, cvc }: Props) => {
    return (
        <StyledCard>
            <CardFront number={number} name={name} date={date} />
            <CardBack cvc={cvc} />
        </StyledCard>
    );
};
export default Card;

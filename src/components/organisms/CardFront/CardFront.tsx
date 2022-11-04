import { StyledCardFront } from './StyledCardFront';
interface Props {
    number: string;
    name: string;
    date: string;
}
const CardFront = ({
    number = '00000000000000000',
    name = 'Jane Applesed',
    date = '09/07',
}: Props) => {
    return (
        <StyledCardFront>
            <div className="top">
                <img src="cardAssets/images/card-logo.svg" />
            </div>
            <div className="bottom">
                <p className="number">{number}</p>
                <span>
                    <p className="name">{name}</p>
                    <p className="date">{date}</p>
                </span>
            </div>
        </StyledCardFront>
    );
};
export default CardFront;

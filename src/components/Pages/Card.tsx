import GlobalStyle from '../../globalStyles';
import InputFormContainer from '../containers/InputFormContainer/InputFormContainer';
import { StyledCard } from './StyledCard';
import Background from '../organisms/Background/Background';
import CardBox from '../organisms/Card/Card';
import { useReducer, useState } from 'react';
import SendBox from '../organisms/SendBox/SendBox';

const Card = () => {
    const [number, setNumber] = useState<string>('0000 0000 0000 0000');
    const [name, setName] = useState<string>('Jane Appleseed');
    const [date, setDate] = useState<string>('00/00');
    const [cvc, setCvc] = useState<string>('000');
    const [isSend, toggleSend] = useReducer((isSend) => !isSend, false);
    return (
        <>
            <Background />
            <StyledCard>
                <div>
                    <CardBox
                        number={number}
                        name={name}
                        date={date}
                        cvc={cvc}
                    />
                </div>
                <div>
                    {!isSend ? (
                        <InputFormContainer
                            setCardCVC={(value) => {
                                setCvc(value);
                            }}
                            setCardDate={(value) => {
                                setDate(value);
                            }}
                            setCardName={(value) => {
                                setName(value);
                            }}
                            setCardNumber={(value) => {
                                setNumber(value);
                            }}
                            onSubmitForm={toggleSend}
                        />
                    ) : (
                        <SendBox onSubmitForm={toggleSend} />
                    )}
                </div>
            </StyledCard>
            <GlobalStyle />
        </>
    );
};
export default Card;

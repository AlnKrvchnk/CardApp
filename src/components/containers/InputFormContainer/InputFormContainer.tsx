import { useEffect, useMemo, useReducer, useState } from 'react';
import InputForm from '../../organisms/InputForm/InputForm';
import { validate } from '../../../hooks/validation';

interface Props {
    setCardName: (value: string) => void;
    setCardNumber: (value: string) => void;
    setCardDate: (value: string) => void;
    setCardCVC: (value: string) => void;
    onSubmitForm: () => void;
}

const InputFormContainer = ({
    setCardCVC,
    setCardName,
    setCardDate,
    setCardNumber,
    onSubmitForm,
}: Props) => {
    const [errorDate, setErrorDate] = useState<string | undefined>('');
    const [errorCVC, setErrorCVC] = useState<string | undefined>('');
    const [errorName, setErrorName] = useState<string | undefined>('');
    const [errorNumber, setErrorNumber] = useState<string | undefined>('');

    const [name, setName] = useState<string | undefined>();
    const [number, setNumber] = useState<string | undefined>();
    const [MM, setMM] = useState<string | undefined>();
    const [YY, setYY] = useState<string | undefined>();
    const [CVC, setCVC] = useState<string | undefined>();
    const isDisabled = useMemo(() => {
        return (
            errorDate !== undefined ||
            errorCVC !== undefined ||
            errorName !== undefined ||
            errorNumber !== undefined
        );
    }, [errorDate, errorCVC, errorName, errorNumber]);
    useEffect(() => {
        let cardDate = '00/00';
        if (name) {
            const error = validate(name, 'symbol');
            setErrorName(error);
            error ? setCardName('Jane Appleseed') : setCardName(name);
        }
        if (number) {
            const error = validate(number, 'number');
            if (error) {
                setCardNumber('0000 0000 0000 0000');
            } else {
                let cardNumber = '';
                for (let i = 0; i < 16; i++) {
                    cardNumber = `${cardNumber}${number[i] || '0'}`;
                    if ((i + 1) % 4 === 0) cardNumber = `${cardNumber} `;
                }
                setCardNumber(cardNumber);
            }
            setErrorNumber(validate(number, 'number', 16));
        }
        if (MM) {
            const error = validate(MM, 'number');
            let date = '';
            if (error) {
                date = `00/`;
            } else {
                MM.length === 2 ? (date = `${MM}/`) : (date = `0${MM}/`);
            }
            cardDate = `${date}${cardDate[3]}${cardDate[4]}`;
            setErrorDate(validate(MM, 'number', 2));
        }
        if (YY) {
            const error = validate(YY, 'number');
            let date = '';
            if (error) {
                date = `00`;
            } else {
                YY.length === 2 ? (date = `${YY}`) : (date = `0${YY}`);
            }
            cardDate = `${cardDate[0]}${cardDate[1]}/${date}`;
            setErrorDate(validate(YY, 'number', 2));
        }
        if (CVC) {
            const error = validate(CVC, 'number');
            if (error) {
                setCardNumber('000');
            } else {
                let cardCVC = '';
                for (let i = 0; i < 3; i++) {
                    cardCVC = `${cardCVC}${CVC[i] || '0'}`;
                }
                setCardCVC(cardCVC);
                setErrorCVC(validate(CVC, 'number', 3));
            }
        }
        setCardDate(cardDate);
    }, [name, number, MM, YY, CVC]);

    const onSubmit = () => {
        !isDisabled && onSubmitForm();
    };

    return (
        <InputForm
            errorDate={errorDate}
            onSetMM={setMM}
            onSetYY={setYY}
            errorCVC={errorCVC}
            onSetCVC={setCVC}
            errorName={errorName}
            onSetName={setName}
            errorNumber={errorNumber}
            onSetNumber={setNumber}
            onSubmit={onSubmit}
            isButtonDisabled={isDisabled}
        />
    );
};
export default InputFormContainer;

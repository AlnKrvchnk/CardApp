import { useEffect, useId, useState } from 'react';
import ErrorLabel from '../../atoms/ErrorLabel/ErrorLabel';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import { StyledInputFormBottomDate } from './StyledInputFormBottomDate';
interface Props {
    inputValue: string;
    error?: string;
    maxLength: number;

    onSetMM: (value: string) => void;
    onSetYY: (value: string) => void;
}
const InputFormBottomDate = ({
    inputValue,
    error,
    onSetMM,
    onSetYY,
    maxLength,
}: Props) => {
    const id: string = useId();
    const [mm, setValueMM] = useState<string>(inputValue);
    const [yy, setValueYY] = useState<string>(inputValue);
    useEffect(() => {
        onSetMM(mm);
    }, [mm]);
    useEffect(() => {
        onSetYY(yy);
    }, [yy]);
    return (
        <StyledInputFormBottomDate>
            <Label id={id} text={'exp. date (mm/yy)'}></Label>
            <Input
                placeholder="MM"
                inputValue={mm}
                id={id}
                onChange={(inputValue) => setValueMM(inputValue)}
                maxLength={maxLength}
            ></Input>
            <Input
                placeholder="YY"
                inputValue={yy}
                id={id}
                onChange={(inputValue) => setValueYY(inputValue)}
                maxLength={maxLength}
            ></Input>
            {error && <ErrorLabel id={id} text={error}></ErrorLabel>}
        </StyledInputFormBottomDate>
    );
};
export default InputFormBottomDate;

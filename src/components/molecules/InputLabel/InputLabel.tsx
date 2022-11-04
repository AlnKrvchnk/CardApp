import { useEffect, useId, useState } from 'react';
import ErrorLabel from '../../atoms/ErrorLabel/ErrorLabel';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import { StyledInputLabel } from './StyledInputLabel';
interface Props {
    placeholder: string;
    inputValue: string;
    error?: string;
    label: string;

    maxLength?: number;
    onChange: (value: string) => void;
}
const InputLabel = ({
    placeholder,
    inputValue,
    error,
    label,
    maxLength,

    onChange,
}: Props) => {
    const id = useId();
    const [value, setValue] = useState<string>(inputValue);
    useEffect(() => {
        onChange(value);
    }, [value]);
    return (
        <StyledInputLabel>
            <Label id={id} text={label}></Label>
            <Input
                placeholder={placeholder}
                inputValue={value}
                id={id}
                onChange={(value) => setValue(value)}
                maxLength={maxLength}
            ></Input>
            {error && <ErrorLabel id={id} text={error}></ErrorLabel>}
        </StyledInputLabel>
    );
};
export default InputLabel;

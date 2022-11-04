import { useRef, useState } from 'react';
import { useEffect, useMemo } from 'react';
import { StyledInput } from './StyledInput';
interface Props {
    id: string;
    placeholder?: string;
    inputValue: string;
    error?: string;
    isFocuse?: boolean;
    maxLength?: number;
    onChange: (value: string) => void;
}
const Input = ({
    id,
    placeholder,
    inputValue,
    error,
    onChange,
    maxLength,
    isFocuse,
}: Props) => {
    const isError = useMemo(() => {
        return (error && error.length > 0) as boolean;
    }, [error]);
    const [value, setValue] = useState<string>(inputValue);
    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <>
            <StyledInput
                isError={isError}
                type="text"
                placeholder={placeholder}
                value={value}
                id={id}
                onChange={(e) => setValue(e.target.value)}
                maxLength={maxLength}
                ref={(input) => input && isFocuse && input.focus()}
            ></StyledInput>
        </>
    );
};
export default Input;

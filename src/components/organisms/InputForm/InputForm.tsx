import Button from '../../atoms/Button/Button';
import InputFormBottom from '../../molecules/InputFormBottom/InputFormBottom';
import InputLabel from '../../molecules/InputLabel/InputLabel';
import { StyledInputForm } from './StyledInputForm';
interface Props {
    errorDate: string | undefined;
    onSetMM: (value: string) => void;
    onSetYY: (value: string) => void;

    errorCVC: string | undefined;
    onSetCVC: (value: string) => void;

    errorName: string | undefined;
    onSetName: (value: string) => void;

    errorNumber: string | undefined;
    onSetNumber: (value: string) => void;

    onSubmit: () => void;
    isButtonDisabled: boolean;
}
const InputForm = ({
    errorDate,
    onSetMM,
    onSetYY,

    errorCVC,
    onSetCVC,

    errorName,
    onSetName,

    errorNumber,
    onSetNumber,

    onSubmit,
    isButtonDisabled,
}: Props) => {
    const onSubmitForm = (
        e:
            | React.MouseEvent<HTMLButtonElement | MouseEvent>
            | React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        onSubmit();
    };
    return (
        <StyledInputForm onSubmit={(e) => onSubmitForm(e)}>
            <InputLabel
                placeholder="e.g. Jane Appleseed"
                label="cardholder name"
                inputValue=""
                error={errorName}
                onChange={onSetName}
            ></InputLabel>
            <InputLabel
                placeholder="e.g. 1234 5678 9123 0000"
                label="card number"
                inputValue=""
                error={errorNumber}
                onChange={onSetNumber}
                maxLength={16}
            ></InputLabel>
            <InputFormBottom
                errorDate={errorDate}
                onSetMM={onSetMM}
                onSetYY={onSetYY}
                errorCVC={errorCVC}
                onSetCVC={onSetCVC}
            />
            <Button
                onClick={(e) => onSubmitForm(e)}
                isDisabled={isButtonDisabled}
                children={'Confirm'}
            />
        </StyledInputForm>
    );
};
export default InputForm;

import InputFormBottomDate from '../InputFormBottomDate/InputFormBottomDate';
import InputLabel from '../InputLabel/InputLabel';
import { StyledInputFormBottom } from './StyledInputFormBottom';
interface Props {
    errorDate: string | undefined;
    onSetMM: (value: string) => void;
    onSetYY: (value: string) => void;

    errorCVC: string | undefined;
    onSetCVC: (value: string) => void;
}
const InputFormBottom = ({
    errorDate,
    onSetMM,
    onSetYY,

    errorCVC,
    onSetCVC,
}: Props) => {
    return (
        <StyledInputFormBottom>
            <InputFormBottomDate
                inputValue=""
                error={errorDate}
                onSetMM={onSetMM}
                onSetYY={onSetYY}
                maxLength={2}
            ></InputFormBottomDate>
            <InputLabel
                placeholder="e.g. 123"
                label="cvc"
                inputValue=""
                error={errorCVC}
                onChange={onSetCVC}
                maxLength={3}
            ></InputLabel>
        </StyledInputFormBottom>
    );
};
export default InputFormBottom;

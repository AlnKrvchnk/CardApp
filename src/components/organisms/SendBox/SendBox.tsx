import Button from '../../atoms/Button/Button';
import { StyledSendBox } from './StyledSendBox';
interface Props {
    onSubmitForm: () => void;
}
const SendBox = ({ onSubmitForm }: Props) => {
    return (
        <StyledSendBox>
            <div>
                <img src="cardAssets/images/icon-complete.svg" />
                <p>Thank you!</p>
                <span>We've added your card detail</span>
                <Button
                    onClick={() => onSubmitForm()}
                    children={'Continue'}
                    isDisabled={false}
                />
            </div>
        </StyledSendBox>
    );
};
export default SendBox;

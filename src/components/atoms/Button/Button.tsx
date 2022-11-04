import { StyledButton } from './StyledButton';
interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => void;
    isDisabled: boolean;
    children: string;
}
const Button = ({ onClick, isDisabled, children = 'Press' }: Props) => {
    return (
        <StyledButton
            onClick={(e) => onClick(e)}
            isDisabled={isDisabled}
            children={children}
        />
    );
};
export default Button;

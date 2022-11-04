import { StyledErrorLabel } from './StyledErrorLabel';

interface Props {
    id: string;
    text?: string;
}

const ErrorLabel = ({ id, text }: Props) => {
    return <StyledErrorLabel htmlFor={id} children={text} />;
};
export default ErrorLabel;

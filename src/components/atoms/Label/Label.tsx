import { StyledLabel } from './StyledLabel';
interface Props {
    id: string;
    text?: string;
}
const Label = ({ id, text }: Props) => {
    return <StyledLabel htmlFor={id} children={text} />;
};
export default Label;

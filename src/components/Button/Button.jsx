import { StyledButton } from './ButtonStyled';

const Button = ({ onClick = null, text, type = 'button', variant }) => {
  return (
    <StyledButton type={type} onClick={onClick} $variant={variant}>
      {text}
    </StyledButton>
  );
};
export default Button;

import { BtnAuth } from './ButtonAuthStyled';

const ButtonAuth = ({
  onClick = null,
  text,
  type = 'button',
  variant,
  children,
}) => {
  return (
    <BtnAuth type={type} onClick={onClick} $variant={variant}>
      {children}
      {text}
    </BtnAuth>
  );
};
export default ButtonAuth;

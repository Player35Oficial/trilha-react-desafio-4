import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ type, title, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonContainer
      disabled={disabled ? false : true}
      type={type}
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;

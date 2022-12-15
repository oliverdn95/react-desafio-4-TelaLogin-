import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={isValid} >{ isValid? true : title }</ButtonContainer>;
};

export default Button;

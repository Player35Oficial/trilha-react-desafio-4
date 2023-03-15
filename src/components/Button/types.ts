export interface IButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

import * as C from "./styles";

type Props = {
  label: string;
  icon?: any;
  OnClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const Button = ({ label, icon, OnClick }: Props) => {
  return (
    <C.Container onClick={OnClick}>
      {icon &&
      <C.IconArea>
          <img src={icon}/>
      </C.IconArea>}
      <C.Label>{label}</C.Label>
    </C.Container>
  );
};

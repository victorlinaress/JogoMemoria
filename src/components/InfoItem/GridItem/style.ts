import styled from "styled-components";

type ContainerProps = {
  showBackGround: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.showBackGround ? "#1550ff" : "#e2e3e3"};
    width: 120px;
    height: 120px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer

`;

type IconProps = {
  opacity?: number;
}

export const Icon = styled.img <IconProps>`
  width: 50px;
  height: 50px;
  opacity: &{props => props.opacity ?? 1};
`;

import { GridItemType } from "../../../types/GridItemType";
import * as C from "./style";
import { items } from "../../../data/items";
import b7Svg from "../../../svgs/b7.svg";
import ponto from "../../../svgs/ponto.png"

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container 
      showBackGround={item.permanentShown || item.shown}
      onClick={onClick}
    >
      {item.permanentShown === false && item.shown === false && (
        <C.Icon src={ponto} />
      )}

      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="" />
      )}
    </C.Container>
  );
};

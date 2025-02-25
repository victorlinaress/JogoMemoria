import * as C from "./appStyles";
import logoImage from "./assets/DevMemory.png";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/InfoItem/botton";
import RestartIcon from "./svgs/restart.svg";
import { useEffect, useState } from "react";
import { GridItemType } from "./types/GridItemType";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  const resetAndCreateGrid = () => {
    // Step 1 - reset the game
    setTimeElapsed(0);
    setShowCount(0);
    setMoveCount(0);
    setGridItems([]);

    // Step 2 - create the grid and start the game

    // Step 2.1 - create the grid empty
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      tmpGrid.push({
        item: null,
        show: false,
        permanentShown: false,
      });
    }

    // Step 2.2 - complete the grid

    // Step 2.3 - play the state
    setGridItems(tmpGrid);

    // Step 3.0 - start the game
    setPlaying(true);
  };

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width={150} alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} OnClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Area></C.Area>
      </C.GridArea>
    </C.Container>
  );
};

export default App;

import * as C from "./appStyles";
import logoImage from "./assets/DevMemory.png";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/InfoItem/botton";
import RestartIcon from "./svgs/restart.svg";
import { useEffect, useState } from "react";

const App = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0)
  const [showCount, setShowCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<>([])



  useEffect(() => resetAndCreateGrid(), []);

  const resetAndCreateGrid = () => {};

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

        <Button
          label="Reiniciar"
          icon={RestartIcon}
          OnClick={resetAndCreateGrid}
        />
      </C.Info>

      <C.GridArea>
        <C.Area></C.Area>
      </C.GridArea>
    </C.Container>
  );
};

export default App;

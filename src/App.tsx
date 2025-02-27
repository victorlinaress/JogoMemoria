import * as C from "./appStyles";
import logoImage from "./assets/DevMemory.png";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/InfoItem/botton";
import RestartIcon from "./svgs/restart.svg";
import { useEffect, useState } from "react";
import { GridItemType } from "./types/GridItemType";
import { GridItem } from "./components/InfoItem/GridItem";
import { items } from "./data/items";
import { formartTimeElapsed } from "./helpers/formatTimeElapsed";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false); // o estado do jogo
  const [timeElapsed, setTimeElapsed] = useState<number>(0); // armazena o tempo corrido
  const [moveCount, setMoveCount] = useState<number>(0); // número de movimentos
  const [showCount, setShowCount] = useState<number>(0); // quantidade de cartas visíveis
  const [gridItems, setGridItems] = useState<GridItemType[]>([]); // o estado do grid

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed((timeElapsed) => timeElapsed + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  // verificar se está aberto
  useEffect(() => {
    if (showCount === 2) {// vai virar 2 cartas
      let opened = gridItems.filter((item) => item.shown === true);// filtra as cartas que estão visíveis no momento
      if (opened.length === 2) { //se for 2 cartas
        // se ambos estão abertos, deixe o "show" permanente

        if (opened[0].item === opened[1].item) { //verificar se a carta 1 e as 2 são parecidas
          let tpmGrid = [...gridItems];// vai copiar os items atuais
          for (let i in tpmGrid) {// um for para passar pelos intems
            if (tpmGrid[i].shown) {//se mostrar a carta
              tpmGrid[i].permanentShown = true;//ela vai permanecer virada
              tpmGrid[i].shown = false;// e não tem como virar mais ela
            }
          }
          setGridItems(tpmGrid);//passando a atualizacao
          setShowCount(0);//resetar as cartas
        }
      }
    }
  }, [showCount, gridItems]);

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
      // loop para criar o grid com o dobro da quantidade de itens (pares de cartas)
      tmpGrid.push({
        item: null, // armazena o índice do item correspondente
        shown: false, // indica se mostra a carta ou não
        permanentShown: false, // indica se o item foi encontrado
      });
    }

    // Step 2.2 - complete the grid
    for (let w = 0; w < 2; w++) {
      // roda duas vezes
      for (let i = 0; i < items.length; i++) {
        // percorrer os itens
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          // encontrar posição vazia
          pos = Math.floor(Math.random() * (items.length * 2));
          // gera uma posição aleatória no grid, multiplicando o tamanho do array por 2
        }
        tmpGrid[pos].item = i; // coloca o item na posição aleatória encontrada
      }
    }

    // Step 2.3 - play the state
    setGridItems(tmpGrid);

    // Step 3.0 - start the game
    setPlaying(true);
  };

  const handleItemClick = (index: number) => {
    // para virar somente 2 items
    if (playing && index !== null && showCount < 2) {
      let tpmGrid = [...gridItems];
      if (
        tpmGrid[index].permanentShown === false && // verifica se a carta não foi encontrada ainda
        tpmGrid[index].shown === false // verifica se a carta não está virada no momento
      ) {
        tpmGrid[index].shown = true;
        setShowCount(showCount + 1);
      }

      setGridItems(tpmGrid);
    }
  };

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width={150} alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formartTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <Button
          label="Reiniciar"
          icon={RestartIcon}
          OnClick={resetAndCreateGrid}
        />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
};

export default App;

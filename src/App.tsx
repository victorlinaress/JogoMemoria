import * as C from './appStyles';
import logoImage from './assets/DevMemory.png';
import { InfoItem } from './components/InfoItem';

const App = () => {
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

        <button>Reiniciar</button>
      </C.Info>

      <C.GridArea>
        {/* Área do Grid */}
      </C.GridArea>
    </C.Container>
  );
};

export default App;

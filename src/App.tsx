import * as C from './appStyles';
import logoImage from './assets/DevMemory.png'

const App = () => {
  return (
    <>
      <C.Container>
        <C.Info>
          <C.LogoLink href="">
            <img src={logoImage} width={200} alt=""/>
          </C.LogoLink>

          <C.InfoArea>
            {/* Informações adicionais aqui */}
          </C.InfoArea>

          <button>Reiniciar</button>
        </C.Info>

        <C.GridArea>
          {/* Área do Grid */}
        </C.GridArea>
      </C.Container>
    </>
  );
};

export default App;

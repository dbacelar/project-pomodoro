import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div>
            <label htmlFor='input'>Task</label>
            <input id='input' type='text' />
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <p>Ciclos</p>
          </div>

          <div>
            <p>0 0 0 0 0 0 0 0</p>
          </div>
          <div>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      </Container>

      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}

export default App;

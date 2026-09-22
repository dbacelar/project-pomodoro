import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <>
      <Container>
        <Heading>Pomodoro Timer</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
      <Container>
        <Heading>Timer</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}

export default App;

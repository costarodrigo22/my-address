import { GlobalStyle } from '../../styles/GlobalStyles';
import { Container } from './styles';

import { Header } from '../Header';
import Home from '../../Pages/Home';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Home />
      </Container>
    </>
  );
}


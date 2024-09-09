import './App.css';
import { Container, MainContainer } from './Components/Container/Container';
import Header from './Components/Header/Header';
import { Main } from './Components/Main/Main';

function App() {
  return (
    <MainContainer>
      <Header/>
      <Main/>
    </MainContainer>
  );
}

export default App;

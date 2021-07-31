import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Content />
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Pokedex from './components/Pokedex';
import pokemonsData from './data'

function App() {
  return (
    <div>
      <Pokedex lista={pokemonsData}/>

    </div>
  );
}

export default App;

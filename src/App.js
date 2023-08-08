import './App.css';
import {Hi} from "./components/Hi";
import {Bye} from "./components/Bye";

function App() {
    const custom = 'murzik'
  return (
    <div className="App">
      <Hi name={custom}/>
      <Bye />
    </div>
  );
}

export default App;

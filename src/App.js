import logo from './logo.svg';
import './App.css';
import { BasicTable } from './Components/BasicTable';
import { SortingTable } from './Components/SortingTable';
import { FilteringGlobal } from './Components/FilteringGlobal';
import { FilteringColumn } from './Components/FilteringColumn';

function App() {
  return (
    <div className="App">
        <FilteringColumn></FilteringColumn>
    </div>
  );
}

export default App;

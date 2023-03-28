import './App.css';
import ComicsList from './ComicsList'
import RaccoonsList from "./RaccoonsList"

function App() {
  return (
    <div className="App">

      <h1>React useEffect and Fetching</h1>

      <RaccoonsList />

      <ComicsList />

    </div>
  );
}

export default App;

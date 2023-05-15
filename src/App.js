import Home from './containers/Home'
import 'font-awesome/css/font-awesome.min.css';
import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <GlobalState>
    <div className="App">
      <Home />
    </div>
    </GlobalState>
  );
}

export default App;


import Demo1 from './Demo1'
import Demo2 from './Demo2'
import {createStore,enchancer} from './createStore'
import firtsReducer from './reduce'
const store = createStore(firtsReducer,enchancer)
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Demo1  store={store}/>
          <Demo2  store={store}/>
      </header>
    </div>
  );
}

export default App;

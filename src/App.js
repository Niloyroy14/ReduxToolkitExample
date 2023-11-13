import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CounterView from './features/counter/CounterView';
import Todos from './Components/Todos';
import Post from './features/posts/Post';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1>Welcome To React Redux</h1> 
          <CounterView />
          <Post/>
           {/* <Counter/> */}
            {/* <Todos/> */}
      </header>
    </div>
  );
}

export default App;

import './App.css';
import AnimationWindow from './Components/AnimationTab/AnimationWindow';
import Sidebar from './Components/Sidebar/Sidebar';
import Titlebar from './Components/Titlebar/Titlebar';

function App() {

  return (
    <div className="App">
      <Titlebar />
      <div className='App-body'>
        <Sidebar />
        <AnimationWindow />
      </div>  
    </div>
  );
}

export default App;
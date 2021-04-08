import './App.css';
import MainComponent from './components/MainComponent';
import {TaskProvider} from './context/context';
function App() {
  return (
    <div>
      <TaskProvider>
      <MainComponent/>
      </TaskProvider>
    </div>
  );
}

export default App;

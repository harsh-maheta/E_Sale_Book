// import logo from './logo.svg';
import './App.css';
import Harsh from './compponets/Harsh';
import Leftnav from './compponets/Leftnav';
import './compponets/H1.css';
import Fut from './compponets/Fut';
import Rightnav from './compponets/Rightnav';
import Login from './compponets/Login';

function App() {
  return (
    <div className="App">
      <Harsh />
      {/* <Leftnav />
      <Rightnav /> */}
      <Login/>
      <Fut />
      
    </div>

  );
}

export default App;

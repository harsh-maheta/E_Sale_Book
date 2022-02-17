
import './App.css';

import './compponets/H1.css';

import Login_page from './compponets/Login_page';
import { Routes, Route } from 'react-router-dom'
import Register from './registerpage/Register';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='login' element={<Login_page />} ></Route>
          <Route path='register' element={<Register />} > </Route>
          <Route path='*' element={<Login_page />} > </Route>
        </Routes>

      </div>

    </>

  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import AboutMe from './components/About-me/AboutMe'
import Login from './components/Log_In/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import CheakOut from './components/CheakOut/CheakOut';
import Regester from './components/Regester/Regester';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about_me' element={<AboutMe/>}></Route>
        <Route path='/regester' element={<Regester/>}></Route>
        <Route path='/cheakout' element={<CheakOut/>}></Route>

        
      </Routes>
       
      
    </div>
  );
}

export default App;

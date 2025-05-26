import './App.css'
import { Firstpage } from '../pages/firstpage';
import {Registerpage} from '../pages/register';
import { Loginpage } from '../pages/loginpage';
import { Addnotes } from '../pages/Addnotes';
import { Notes } from '../pages/Notes';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
const App=()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Firstpage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/Register' element={<Registerpage/>}/>
      <Route path='/addnotes' element={<Addnotes/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;



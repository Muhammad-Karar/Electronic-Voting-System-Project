import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Home from './MyComponent/Home';
import '../src/style/header.css'
import '../src/style/home.css'
import Footer from './MyComponent/Footer';
import Signup from './MyComponent/Signup';
import Login from './MyComponent/Login';
import Contact from './MyComponent/Contact';
import { Route, Routes } from 'react-router-dom';
import Candidates from './MyComponent/Candidates';
import About from './MyComponent/About';
import Result from './MyComponent/Result';
import Castvote from './MyComponent/Castvote';

function App() {
  return (
    <div>
         <Header/>
      <Routes>
        <Route path='/sigup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element = {<Home/>}/>  
        <Route path='/about' element = {<About/>}/> 
        <Route path='/result' element = {<Result/>}/> 
        <Route path='/contactinfo' element = {<Contact/>}/>   
        <Route path='/candidate' element = {<Candidates/>}/> 
        <Route path='/castvote' element = {<Castvote/>}/>   
        </Routes>
   
  
      <Footer/> 
       
    
     
      
    </div>
    
  );
}

export default App;

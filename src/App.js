import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Home from './MyComponent/Home';
import '../src/style/header.css'
import '../src/style/home.css'
import Footer from './MyComponent/Footer';
import Signup from './MyComponent/Signup';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
         <Header/>
      <Routes>
        <Route path='/sigup' element={<Signup/>}/>
        <Route path='/' element = {<Home/>}/>       
        </Routes>
   
  
      <Footer/> 
       
    
     
      
    </div>
    
  );
}

export default App;

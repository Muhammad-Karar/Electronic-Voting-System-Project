import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Home from './MyComponent/Home';
import '../src/style/header.css'
import '../src/style/home.css'


function App() {
  return (
    <div>
      <Header/>
      <Home/> 
    </div>
    
  );
}

export default App;

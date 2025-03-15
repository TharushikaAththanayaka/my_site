
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Edu from "./components/Edu";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
   
    <Edu/>
   
   <Project/>
  
    <Skills/>
   
    <Contact/>
    </div>
  );
}

export default App;

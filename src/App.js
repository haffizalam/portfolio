
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './container/logo_hfz.png'
import Home from './container/home';
import Slider from './container/slider'
import Skill from './container/skill';
import Service from './container/service';
import Contact from './container/contact';



function App() {
  return (
    <div className="App">
    
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
		<img src={logo} alt="logo" width="50px" height="50px" className='logo'/>&nbsp;
             <h5>HFZ Portfolio</h5>
		
		<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#menubar">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="menubar">
		<ul className="navbar-nav ml-auto">
			<li><a href="#home" className="menu"><i class="fa fa-home" aria-hidden="true">Home</i></a> </li>
			<li><a href="#about" className="menu"><i class="fa fa-user" aria-hidden="true">About</i></a> </li>
			<li><a href="#service" className="menu"><i class="fa fa-shopping-basket" aria-hidden="true">Services</i></a> </li>
			<li><a href="#skill" className="menu"><i class="fa fa-braille" aria-hidden="true">Skill</i></a></li>
			
			<li><a href="#contact" className="menu"><i class="fa fa-phone-square" aria-hidden="true">contact</i></a> </li>
        </ul>
        </div>
    </nav>
    
      <Home/>
      <Slider/>
      <Service/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;

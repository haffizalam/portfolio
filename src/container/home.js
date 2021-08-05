import react from 'react';
import './style.css'
import image from './hfz.jpg'

import logo from './logo_hfz.png'

function showclock()
	{
		var c= new Date()
		var d=c.getDate()
		var h=c.getHours()
		var m=c.getMinutes()
		var s=c.getSeconds()
		var showtime=String(h)+":"+String(m)+":"+String(s)+":"
		console.log(showtime)
		if(h<12)
		{
		   document.getElementById('clock').innerHTML=showtime+'AM'	
		} 
		else
		{
			document.getElementById('clock').innerHTML=showtime+'PM'	
		}
        }
		setInterval(showclock,1000)


function Home() {
	return(
		<>
	<div className='container-fluid'>
	
    <section id="home" className="home">
    <div className='row'>
    <div className='col-md-6 p-5'>

    	        
    		      
    		      <h2 className="mt-5">Hello!
    		      I m Haffiz Alam</h2>
    		      <h1> web application developer.</h1>
    		      <input type="submit" name="" value="Hire" className="hire m-auto mt-5"/><br/>
              
    	    </div>
    <div className='col-md-6 p-5'>
    <img src={logo} alt="logo" width="100px" height="100px" className='img mt-3 mb-3'/>
    <div id="clock" className="clock m-auto"></div>
    </div>
    </div>
    </section>

    <section className="about" id="about">
        	
        		<div className="row">
        			<div className="col-md-6 mt-4">
        				<img src={image} width="200px;" height="200px;" className="profilepic m-2"/>

        				
        			</div>
        			<div class="col-md-6 m-auto mt-4 text-justify">
        				
        					 <span><h6>I am Haffiz Alam a fullstack developer</h6></span>
    			<p className='p-2 text-white'>Hello! "I am Haffiz Alam front-end developer. I have serious passion for UI effects, 
    			animations and creating intuitive, dynamic user experiences.Feel free to take a look at
    			my most recent project on my workpage.As a web developer, I enjoy using my obsessive attention 
    			to detail, my unequivocal love for making things.I'm interested in all kinds of visual 
    			communication, but my major focus is on designing web, mobile & tablet interfaces.
    			 I also have skills in other fields like Animation, ui design and web development.</p>
        				<br/>
        				<br/>
        				<br/>
        			</div>
        		</div>
        	
        </section>

   	
    
</div>

		</>
    );

}

export default Home;
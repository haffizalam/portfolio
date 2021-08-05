import React from 'react';

function Service() {
	return(
		<div className="container-fluid">
		<section className="service" id="service">
    <div className="row mt-4">
        <div class="col-md-4">
          <div class="img-thumbnails">
                    <i class="fa fa-paint-brush" aria-hidden="true"></i>
                    <h2>Web Design</h2>
                    <p>Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
          </div>
        </div>

        <div class="col-md-4">
             <div class="img-thumbnails">
                    <i class="fa fa-area-chart" aria-hidden="true"></i>
                    <h2>Graphics Design</h2>
                    <p>Have a better skill in Graphics and Animation designing. which will include a better effect in your company profile website.</p>
               </div>
        </div>

        <div class="col-md-4">
            
               
                   <div class="img-thumbnails">
                    <i class="fa fa-code" aria-hidden="true"></i>
                    <h2>Fullstack Development</h2>
                    <p>The web development process involves taking the graphical elements defined in the design process and coding them into a custom Wordpress theme.</p>
                   </div>
          </div>

          <div class="col-md-4">
            
               
                   <div class="img-thumbnails">
                    <i class="fa fa-code" aria-hidden="true"></i>
                    <h2>DataBase Design</h2>
                    <p>The most basic and important part is database of any dynamic application, we also provide databse design..</p>
                   </div>
          </div>
    </div>
    </section>
    </div>);

}

export default Service;
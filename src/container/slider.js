import React from 'react';
import pic11 from './pic1.png'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'

function Slider() {
	return(
		
				<div className='container-fluid'>
				<div class="row">
           			<div className='col-md-12'>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic11} class="d-block w-100" alt="First slide"/>
      <div class="carousel-caption">
						<h4 className="bg-warning p-1">Web application development</h4>
						<p>fullstack</p>
					</div>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100"  alt="Second slide"/>
      <div class="carousel-caption">
						<h4 className="bg-warning p-1">UI design</h4>
						<p></p>
					</div>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100"  alt="Third slide"/>
      <div class="carousel-caption">
						<h4 className="bg-warning p-1">WebHosting</h4>
						<p></p>
					</div>
    </div>
     <div class="carousel-item">
      <img src={pic4} class="d-block w-100"  alt="Fourth slide"/>
      <div class="carousel-caption">
            <h4 className="bg-warning p-1">Digital Marketing</h4>
            <p></p>
          </div>
    </div>
     <div class="carousel-item">
      <img src={pic5} class="d-block w-100"  alt="Fifth slide"/>
      <div class="carousel-caption">
            <h4 className="bg-warning p-1">Social-media advertising</h4>
            <p></p>
          </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   			</div>
   		</div></div>
);
}

export default Slider
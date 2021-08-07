import React from 'react';
import html from './html.png';
import css from './css.png';
import bootstrap from './boot.png';
import js from './jsss.png';
import python from './python.png';
import msql from './msql.jpg';
function Skill() {
	return(
		<>
		<div className='container-fluid skill' id="skill">
			<div className="row">
				<div className='col-md-6 text-justify text-white'> 
				<i className="fa fa-chevron-right mt-5" aria-hidden="true"></i>   Learning fullstack development with Python.<br/>
				<i className="fa fa-chevron-right mt-4" aria-hidden="true"></i>   Experience in creating front end project.<br/>
          		<i className="fa fa-chevron-right mt-4" aria-hidden="true"></i>   Worked in Django Project.<br/>
          		<i className="fa fa-chevron-right mt-4" aria-hidden="true"></i>   Begginer in React js.<br/>
          		<i className="fa fa-chevron-right mt-4" aria-hidden="true"></i>   Know about MySQL.
          		</div>
				<div className="col-md-6 text-justify mb-4">
				<h5 className="text-white mt-4">skill in following technologies</h5>
				<h4 className='mt-4 justify-content-center'>HTML<img src={html} width="50px" height="50px;"/>85%<div class="progress">
              	<div className="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
         		</div></h4>
          		

         		<h4>CSS<img src={css} width="50px" height="50px;"/>78%<div class="progress">
              <div className="progress-bar bg-info" role="progressbar" style={{width: "78%"}} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
          </div></h4>
          

          <h4>Javascript<img src={js} width="50px" height="50px;"/></h4>
          <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>

           <h4>Bootstrap<img src={bootstrap} width="50px" height="50px;"/></h4>
          <div className="progress">
              <div className="progress-bar bg-dark text-white" role="progressbar" style={{width: "67%"}} aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">67%</div>
          </div>

          <h4>Python<img src={python} width="50px" height="50px;"/></h4>
          <div className="progress">
              <div className="progress-bar bg-primary" role="progressbar" style={{width: "76%"}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100">76%</div>
          </div>

          <h4>MySQL<img src={msql} width="50px" height="50px;"/><div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
          </div>
		</h4>
          

				</div>
			</div>
		</div>
		</>
		);
}

export default Skill;
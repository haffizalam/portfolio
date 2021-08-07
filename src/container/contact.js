import React from 'react';

function Contact() {
	return(
		<>
		<div className="container-fluid" id="contact">
			<div className="row">
				<div className="col-12">
					<h1 className="contact_header mt-4">Contact Info</h1>
					<h4 className="mt-4">E-mail:  alamhaffiz786@gmail.com</h4>
					<h4 className="mt-4">Mobile No: +91  6260866205</h4>

					<h1 className="contact_header mt-4">Follow on</h1>
					<div className='d-flex justify-content-center'>
						<a href="https://www.facebook.com/haffiz.alam/" ><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
       					<a href="https://www.instagram.com/haffizalam/"><i className="fa fa-instagram ml-3" aria-hidden="true"></i></a>
       					<a href="https://www.linkedin.com/in/haffiz-alam-4a273a19b"><i className="fa fa-linkedin-square ml-3" aria-hidden="true"></i></a>
       					<a href="https://twitter.com/alam_haffiz?s=08"><i className="fa fa-twitter ml-3" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		</div>
		<div className="footer">
				<h6 className='bg-dark text-light p-2 float-right'>Designed by Haffiz Alam</h6>
		</div>
		</>);
}
export default Contact;
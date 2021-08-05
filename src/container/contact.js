import React from 'react';

function Contact() {
	return(
		<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h1 className="contact_header mt-4">Contact Info</h1>
					<h4 className="mt-4">E-mail:  alamhaffiz786@gmail.com</h4>
					<h4 className="mt-4">Mobile No: +91  6260866205</h4>

					<h1 className="contact_header mt-4">Follow on</h1>
					<div className='d-flex justify-content-center'>
						<i className="fa fa-facebook-square" aria-hidden="true"></i>
       					<i className="fa fa-instagram ml-3" aria-hidden="true"></i>
       					<i className="fa fa-linkedin-square ml-3" aria-hidden="true"></i>
       					<i class="fa fa-twitter ml-3" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		</div>
		</>);
}
export default Contact;
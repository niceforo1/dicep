import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<section id="footer">
				<div className="inner">
					<h2 className="major">Contáctenos</h2>
					<p>Para comunicarse con nosotros.</p>
					<ul className="contact">
						<li className="fa-envelope">
							<a href="mailto:info@dicep.com.ar">info@dicep.com.ar</a>
						</li>
						<li className="fa-phone">(+549) 351-234-1627</li>
						<li className="fa-phone">(+549) 351-269-3767</li>
					</ul>
					<ul className="copyright">
						<li>&copy; DICEP Soluciones Todos los derechos reservados.</li>
						<li>
							Design: <a href="http://www.dicep.com.ar">DICEP Soluciones</a>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}
export default Footer;

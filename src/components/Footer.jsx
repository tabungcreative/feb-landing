import React from "react";
import {MDBFooter, MDBContainer, MDBCol, MDBRow} from "mdb-react-ui-kit";
import logo from "../assets/images/logo_feb_putih.png";

const Footer = () => {
	return (
		<MDBFooter bgColor="black" className="text-white text-left text-lg-left">
			<MDBContainer className="p-4">
				<MDBRow>
					<MDBCol lg="4" md="6" className="mb-4 mb-md-0 ">
						<img src={logo} width="150" className="mb-2" alt="" />
						<h6 className="text-uppercase text-gray">Fakultas Ekonomi dan Bisnis</h6>
						<p className="text-gray">
							Universitas Sains Al Qur’an <br /> Jawa Tengah di Wonosobo
						</p>
					</MDBCol>

					<MDBCol lg="4" md="6" className="mb-4 mb-md-0">
						<h5 className="text-uppercase mb-0">Tentang Fakultas</h5>

						<ul className="list-unstyled">
							<li>
								<a href="#!" className="text-gray text-line-none">
									Sejarah Feb Unsiq
								</a>
							</li>
						</ul>
					</MDBCol>

					<MDBCol lg="4" md="6" className="mb-4 mb-md-0">
						<h5 className="text-uppercase">Kontak</h5>

						<ul className="list-unstyled mb-0 text-gray">
							<li>Jl. KH. Hasyim Asy'ari Km. 03, Kalibeber,</li>
							<li>Kec. Mojotengah, Kab. Wonosobo,</li>
							<li>Jawa Tengah - 56351</li>
							<li>Telp. : (0286) ******</li>
							<li>Whatsapp. : (0286) *******</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>

			<div className="text-center text-gray bg-dark p-3">&copy; {new Date().getFullYear()} Copyright All Right Reserved 2022, Faculty of Economics and Business, UNSIQ</div>
		</MDBFooter>
	);
};

export default Footer;

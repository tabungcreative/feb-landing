import React from "react";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage} from "mdb-react-ui-kit";
import {Container} from "react-bootstrap";
import image from "../../assets/images/img.JPG";

const Berita = () => {
	return (
		<>
			<Container className="bg-white mt-5">
				<h1 className="text-dark">Berita Terkini</h1>
				<MDBCard className="mb-3">
					<MDBCardImage position="top" src="https://mdbootstrap.com/img/new/slides/041.webp" alt="..." />
					<MDBCardBody>
						<MDBCardTitle>Card title</MDBCardTitle>
						<MDBCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</MDBCardText>
						<MDBCardText>
							<small className="text-muted">Last updated 3 mins ago</small>
						</MDBCardText>
					</MDBCardBody>
				</MDBCard>
			</Container>
			<section className="p-5">
				<div className="container">
					<div className="row text-left g-4 border-1 border-dark">
						<div className="col-md">
							<div className="card text-dark">
								<img src={image} class="card-img-top" alt="" />
								<div className="card-body">
									<h3 className="card-title">Virtual</h3>
									<a href="#" className="text-dark-red">
										Selengkapnya
									</a>
								</div>
							</div>
						</div>
						<div className="col-md">
							<div className="card text-dark">
								<img src={image} class="card-img-top" alt="" />
								<div className="card-body">
									<h3 className="card-title">Virtual</h3>
									<a href="#" className="text-dark-red">
										Selengkapnya
									</a>
								</div>
							</div>
						</div>
						<div className="col-md">
							<div className="card text-dark">
								<img src={image} class="card-img-top" alt="" />
								<div className="card-body">
									<h3 className="card-title">Virtual</h3>
									<a href="#" className="text-dark-red">
										Selengkapnya
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Berita;

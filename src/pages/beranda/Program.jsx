import React from "react";
import HeadingLine from "../../components/HeadingLine";
import img from "../../assets/images/img.JPG";

const Program = () => {
	return (
		<div className="container-fluid bg-white p-3 mt-5">
			<div className="container">
				<div className="row">
					<HeadingLine name="Program Kami"></HeadingLine>
					<CardProgram gambar={img} button="Kelas Eksekutif" />
					<CardProgram gambar={img} button="Kelas Regular" />
				</div>
			</div>
		</div>
	);
};

export default Program;

const CardProgram = props => {
	return (
		<div className="col-md-6 mt-3">
			<div className="card border-0">
				<div className="card-body">
					<div className="d-grid gap-2">
						<img className="card-img-top" src={props.gambar} alt={props.alt} />
						<a href="/" className="btn btn-base fw-bold btn-xl mt-3">
							{props.button}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

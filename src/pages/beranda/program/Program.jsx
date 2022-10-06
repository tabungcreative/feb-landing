import React from "react";
import {Link} from "react-router-dom";
import HeadingLine from "../../../components/HeadingLine";
import useFetch from "../../../hooks/useFetch";

const Program = () => {
	const program = process.env.REACT_APP_PROGRAM;
	const data = useFetch(`${program}/?size=2`);

	return (
		<div className="container-fluid bg-white p-3 mt-5">
			<div className="container">
				<div className="row">
					<HeadingLine name="Program Kami"></HeadingLine>
					{data && data.map(pgr => <CardProgram button={pgr.nama_program} gambar={pgr.gambar_url} id={pgr.id} key={pgr.id} />)}
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
						<img className="card-img-top img-fluid ms-auto me-auto" src={props.gambar} alt={props.alt} style={{height: "20rem", width: "20rem"}} />
						<Link to={"/program/" + props.id} className="btn btn-base fw-bold btn-xl mt-3">
							{props.button}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

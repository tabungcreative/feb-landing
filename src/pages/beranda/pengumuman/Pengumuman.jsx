import React from "react";
import {Link} from "react-router-dom";
import HeadingLine from "../../../components/HeadingLine";
import useFetch from "../../../hooks/useFetch";
import "../style.css";

const Pengumuman = () => {
	const pengumuman = process.env.REACT_APP_API_KEY;
	const data = useFetch(`${pengumuman}/pengumuman/?size=6`);

	return (
		<div className="container-fluid bg-white p-3">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<HeadingLine name="Pengumuman"></HeadingLine>
					</div>
				</div>
				<div className="row">{data && data.map(pgn => <CardPengumuman judul={pgn.judul} gambar={pgn.gambar_url} isi={pgn.isi} tanggal={pgn.created_at} id={pgn.id} key={pgn.id} />)}</div>
			</div>
		</div>
	);
};

export default Pengumuman;

const CardPengumuman = props => {
	return (
		<div className="col-md-4 mt-3">
			<Link to={"/pengumuman/" + props.id} className="link" id="link">
				<div className="card border-1 bg-white">
					<div className="card-body">
						<div className="left-line">
							<h5 className="card-title text-black mb-3" style={{maxHeight: "3.1rem", overflow: "hidden"}}>
								{props.judul}
							</h5>
							<small className="text-gray">{props.tanggal}</small>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

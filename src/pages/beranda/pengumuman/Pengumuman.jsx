import React from "react";
import {Link} from "react-router-dom";
import HeadingLine from "../../../components/HeadingLine";
import useFetch from "../../../hooks/useFetch";
import {FaArrowRight} from "react-icons/fa";

import "../style.css";

const Pengumuman = () => {
	const pengumuman = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${pengumuman}/pengumuman?page_size=6`);
	console.log(`${pengumuman}/pengumuman`);

	return (
		<div className="container-fluid bg-white p-3">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<HeadingLine name="Pengumuman"></HeadingLine>
					</div>
				</div>
				<div className="row">
					{loading && <div>A moment please...</div>}
					{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
					{quote && quote.data.map(pgn => <CardPengumuman judul={pgn.judul} gambar={pgn.gambar_url} isi={pgn.isi} tanggal={pgn.created_at} id={pgn.id} key={pgn.id} />)}
				</div>
				<Link to={"/pengumuman"} className="btn btn-base mt-3">
					Pengumuman Lainnya <FaArrowRight />
				</Link>
			</div>
		</div>
	);
};

export default Pengumuman;

const CardPengumuman = props => {
	return (
		<div className="col-md-4 mt-3">
			<Link to={"/pengumuman/" + props.id} id="link">
				<div className="card shadow-sm border-0 hover-shadow">
					<div className="card-body my-0">
						<div className="left-line">
							<h5 className="card-title mb-3 my-0" style={{maxHeight: "3rem", overflow: "hidden"}}>
								{props.judul}
							</h5>
							<div className="my-0">
								<small>{props.tanggal}</small>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

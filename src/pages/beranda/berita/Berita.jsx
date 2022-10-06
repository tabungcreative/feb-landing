import React from "react";
import {Link} from "react-router-dom";
import HeadingLine from "../../../components/HeadingLine";
import useFetch from "../../../hooks/useFetch";
import "../style.css";

const Berita = () => {
	const berita = process.env.REACT_APP_BERITA;
	const data = useFetch(`${berita}/?size=3`);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<HeadingLine name="Berita Terkini"></HeadingLine>
					</div>
				</div>
				<div className="row">
					{/* {loading && <div>Tunggu Sebentar...</div>}
					{error && <div>{`data gagal dimuat - ${error}`}</div>} */}
					{data && data.map(brt => <CardBerita judul={brt.judul} gambar={brt.gambar_url} isi={brt.isi} tanggal={brt.created_at} id={brt.id} key={brt.id} />)}
				</div>
			</div>
		</>
	);
};

export default Berita;

const CardBerita = props => {
	return (
		<div className="col-md-4 mt-3">
			<Link to={"/berita/" + props.id} className="link" id="link">
				<div className="card shadow-sm border-0 hover-shadow">
					<img src={props.gambar} className="card-img-top img-thumbnail img-fluid " alt="..." />
					<div className="card-body my-0">
						<h5 className="card-title mb-3 my-0" style={{maxHeight: "3rem", overflow: "hidden"}}>
							{props.judul}
						</h5>
						<div className="my-0">
							<small>{props.tanggal}</small>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

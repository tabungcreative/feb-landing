import React from "react";
import {Link} from "react-router-dom";
import HeadingLine from "../../../components/HeadingLine";
import useFetch from "../../../hooks/useFetch";
import {FaArrowRight} from "react-icons/fa";

const Berita = () => {
	const berita = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${berita}/berita?page_size=3`);

	return (
		<>
			<div className="container-fluid p-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-8 col-sm-6">
							<HeadingLine name="Berita Terkini"></HeadingLine>
						</div>
					</div>
					<div className="row">
						{loading && <div>A moment please...</div>}
						{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
						{quote && quote.data.map(brt => <CardBerita judul={brt.judul} gambar={brt.gambar_path} isi={brt.isi} tanggal={brt.created_at} id={brt.id} key={brt.id} />)}
					</div>
					<Link to={"/berita"} className="btn btn-base mt-3">
						Berita Lainnya <FaArrowRight />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Berita;

const CardBerita = props => {
	return (
		<div className="col-md-4 mt-3">
			<Link to={"/berita/" + props.id} id="link">
				<div className="card shadow-sm border-0 hover-shadow">
					<img src={"https://ebfis.feb-unsiq.ac.id/storage/" + props.gambar} className="card-img-top img-thumbnail img-fluid " alt="..." />
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

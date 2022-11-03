import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useFetch from "../../../hooks/useFetch";

const BeritaAll = () => {
	const berita = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${berita}/berita`);

	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						{loading && <div>A moment please...</div>}
						{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
						{quote && quote.data.map(brt => <CardBerita judul={brt.judul} gambar={brt.gambar_url} isi={brt.isi} tanggal={brt.created_at} id={brt.id} key={brt.id} />)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BeritaAll;

const CardBerita = props => {
	return (
		<div className="col-md-10 mt-5 mx-auto">
			<Link to={"/berita/" + props.id} id="link">
				<div class="card mb-3 border-0 shadow-sm">
					<div class="row g-0">
						<div class="col-md-4">
							<img src={props.gambar} class="img-fluid rounded-start" alt="..." />
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">{props.judul}</h5>
								<p class="card-text">
									<small class="text-muted">{props.tanggal}</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

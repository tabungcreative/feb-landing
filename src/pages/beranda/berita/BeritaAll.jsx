import React from "react";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useFetch from "../../../hooks/useFetch";

const BeritaAll = () => {
	const berita = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${berita}/berita`);
	console.log(quote);
	const handlePageClick = data => {
		console.log(data.selected);
	};

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
					<div className="mt-5 mb-5">
						<ReactPaginate
							previousLabel={"<<"}
							nextLabel={">>"}
							breakLabel={"..."}
							pageCount={25}
							marginPagesDisplayed={2}
							pageRangeDisplayed={3}
							onPageChange={handlePageClick}
							containerClassName={"pagination justify-content-center"}
							pageClassName={"page-item"}
							pageLinkClassName={"page-link"}
							previousClassName={"page-item"}
							previousLinkClassName={"page-link"}
							nextLinkClassName={"page-link"}
							breakClassName={"page-link"}
							activeClassName={"active"}
						></ReactPaginate>
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
				<div className="card mb-3 border-0 shadow-sm">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={props.gambar} className="img-fluid rounded-start" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{props.judul}</h5>
								<p className="card-text">
									<small className="text-muted">{props.tanggal}</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

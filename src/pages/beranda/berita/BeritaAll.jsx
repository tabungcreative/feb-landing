import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useFetch from "../../../hooks/useFetch";

const BeritaAll = () => {
	const berita = process.env.REACT_APP_API_KEY;
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setpageCount] = useState(0);

	let limit = 10;
	const {data: quote, loading, error, total} = useFetch(`${berita}/berita?page=${currentPage}&page_size=${limit}`);

	useEffect(() => {
		const getPages = async () => {
			setpageCount(Math.ceil(total / limit));
		};

		getPages();
	}, [limit, total]);

	const handlePageClick = data => {
		setCurrentPage(data.selected + 1);
	};

	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						{loading && <div>A moment please...</div>}
						{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
						{quote && quote.data.map(brt => <CardBerita judul={brt.judul} gambar={brt.gambar_path} isi={brt.isi} tanggal={brt.created_at} id={brt.id} key={brt.id} />)}
					</div>
					<div className="mt-5 mb-5">
						<ReactPaginate
							previousLabel={"<<"}
							nextLabel={">>"}
							breakLabel={"..."}
							pageCount={pageCount}
							marginPagesDisplayed={2}
							pageRangeDisplayed={2}
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
							<img src={"https://ebfis.feb-unsiq.ac.id/storage/" + props.gambar} className="img-fluid rounded-start" alt="..." />
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

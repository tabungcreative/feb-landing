import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import useFetch from "../../../hooks/useFetch";

const PengumumanAll = () => {
	const pengumuman = process.env.REACT_APP_API_KEY;
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setpageCount] = useState(0);

	let limit = 10;
	const {data: quote, loading, error, total} = useFetch(`${pengumuman}/pengumuman?page=${currentPage}&page_size=${limit}`);

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
		<div>
			<Header />
			<div className="container">
				<div className="row mb-4">
					<div className="col-lg-12 col-md-8 col-sm-6">
						{loading && <div>A moment please...</div>}
						{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
						{quote && quote.data.map(brt => <CardPengumuman judul={brt.judul} isi={brt.isi} tanggal={brt.created_at} id={brt.id} key={brt.id} />)}
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
		</div>
	);
};

export default PengumumanAll;

const CardPengumuman = props => {
	return (
		<div className="col-md-10 mt-5 mx-auto">
			<Link to={"/pengumuman/" + props.id} id="link">
				<div className="card shadow-sm border-0 hover-shadow">
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

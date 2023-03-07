import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LineDivider from "../../components/LineDivider";
import useFetch from "../../hooks/useFetch";

const Fasilitas = () => {
	const fasilitas = process.env.REACT_APP_API_KEY;
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setpageCount] = useState(0);

	let limit = 10;
	const {data: quote, loading, error, total} = useFetch(`${fasilitas}/fasilitas?page=${currentPage}&page_size=${limit}`);
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
			<div className="container min-vh-100">
				<div className="row">
					<div className="col-lg-12 col-mf-8 col-sm-6">
						<h2 className="mt-4">Fasilitas FEB</h2>
						<LineDivider />
						{loading && <div>A moment please...</div>}
						{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
						{quote && quote.data.map(fls => <CardFasilitas nama={fls.nama_fasilitas} gambar={fls.gambar_path} deskripsi={fls.isi} />)}
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

export default Fasilitas;

const CardFasilitas = props => {
	return (
		<div className="card mb-3 border-0">
			<div className="row g-0">
				<div className="col-md-4">
					<img src={"https://ebfis.feb-unsiq.ac.id/storage/" + props.gambar} className="img-fluid rounded-start" alt="gambar fasilitas" style={{maxWidth: "20rem"}} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.nama}</h5>
						<UnsafeComponent html={props.deskripsi} />
					</div>
				</div>
			</div>
		</div>
	);
};

function UnsafeComponent({html}) {
	return <div dangerouslySetInnerHTML={{__html: html}} className="mb-5" />;
}

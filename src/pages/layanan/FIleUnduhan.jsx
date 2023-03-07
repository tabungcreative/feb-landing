import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LineDivider from "../../components/LineDivider";
import useFetch from "../../hooks/useFetch";

const FileUnduhan = () => {
	const unduhan = process.env.REACT_APP_API_KEY;
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setpageCount] = useState(0);

	let limit = 10;
	const {data: quote, loading, error, total} = useFetch(`${unduhan}/unduhan?page=${currentPage}&page_size=${limit}`);
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
			<div className="container min-vh-100">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-4">
						<h2 className="mt-5">File Unduhan</h2>
						<LineDivider />
						<div className="table-responsive mb-5">
							<table className="table table-striped table-hover">
								<thead className="bg-light">
									<tr>
										<th>No</th>
										<th>Nama File</th>
										<th>Aksi</th>
									</tr>
								</thead>
								<tbody>
									{loading && <div>A moment please...</div>}
									{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
									{quote &&
										quote.data.map((und, index) => (
											<>
												<tr>
													<td>{index + 1}</td>
													<td>{und.nama_file}</td>
													<td>
														<a href={"https://ebfis.feb-unsiq.ac.id/storage/" + und.file_path} className="download fw-semibold " target="_blank" rel="noopener noreferrer">
															download
														</a>
													</td>
												</tr>
											</>
										))}
								</tbody>
							</table>
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
			</div>
			<Footer />
		</>
	);
};

export default FileUnduhan;

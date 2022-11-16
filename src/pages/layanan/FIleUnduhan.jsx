import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LineDivider from "../../components/LineDivider";
import useFetch from "../../hooks/useFetch";

const FileUnduhan = () => {
	const unduhan = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${unduhan}/unduhan/?page_size=10`);
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
														<a href={und.file_url} className="download fw-semibold " target="_blank" rel="noopener noreferrer">
															download
														</a>
													</td>
												</tr>
											</>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default FileUnduhan;

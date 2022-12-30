import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LineDivider from "../../components/LineDivider";
import useFetch from "../../hooks/useFetch";

const Dosen = () => {
	const dosen = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${dosen}/dosen`);
	return (
		<>
			<Header />
			<div className="container min-vh-100">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<h2 className="mt-5">Dosen Fakultas Ekonomi dan Bisnis</h2>
						<LineDivider />
						<div className="table-responsive">
							<table className="table table-striped table-hover ">
								<thead className="bg-light">
									<tr>
										<th>No</th>
										<th>Nidn</th>
										<th>Nama</th>
										<th>Pendidikan Terakhir</th>
										<th>Bidang Keilmuan</th>
										<th>Prodi</th>
									</tr>
								</thead>
								<tbody>
									{quote &&
										quote.map((dsn, index) => (
											<>
												<tr>
													<td>{index + 1}</td>
													<td>{dsn.nidn}</td>
													<td>{dsn.nama}</td>
													<td>{dsn.lulusan_terakhir}</td>
													<td>{dsn.keilmuan}</td>
													<td style={{textTransform: "capitalize"}}>{dsn.prodi}</td>
												</tr>
											</>
										))}
								</tbody>
							</table>
						</div>
						<ul className="mb-5">
							{loading && <div>A moment please...</div>}
							{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Dosen;
